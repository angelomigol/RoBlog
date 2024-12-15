import { axiosInstance } from "@/lib/axios";
import { Post, User } from "@/types";
import { toast } from "sonner";
import { create } from "zustand";


interface BlogStore {
    accounts: User[]
    posts: Post[]
    currentPost: Post | null
    isLoading: boolean
    error: string | null

    stats: {
        totalPosts: number
        draftPosts: number
        publicPosts: number
        privatePosts: number
        totalLikes: number
        totalViews: number
    }

    fetchAccounts: () => Promise<void>
    fetchPosts: () => Promise<void>
    fetchPostById: (id: string) => Promise<void>
    createPost: (post: Post) => Promise<void>
    updatePost: (postId: string, post: Partial<Post>) => Promise<void>
    deletePost: (postId: string) => Promise<void>
    fetchStats: () => Promise<void>
    likePost: (postId: string) => Promise<void>
    addComment: (postId: string, content: string) => Promise<void>
    deleteComment: (postId: string, commentId: string) => Promise<void>
}

export const useBlogStore = create<BlogStore>((set) => ({
    accounts: [],
    posts: [],
    currentPost: null,
    isLoading: false,
    error: null,
    stats: {
        totalPosts: 0,
        draftPosts: 0,
        publicPosts: 0,
        privatePosts: 0,
        totalLikes: 0,
        totalViews: 0
    },


    fetchAccounts: async () => {
        set({ isLoading: true, error: null })
        
        try {
            const response = await axiosInstance.get('/users')

            set({ accounts: response.data })
        } catch (error: any) {
            set({ error: error.response.data.message })
        } finally {
            set({ isLoading: false })
        }
    },

    fetchPosts: async () => {
        set({ isLoading: true, error: null })

        try {
            const response = await axiosInstance.get("/posts")

            set({ posts: response.data, isLoading: false })
        } catch (error: any) {
            set({ isLoading: false, error: error.message })
            toast.error("Failed to fetch posts: ", error.message)
        }
    },

    fetchPostById: async (postId: string) => {
        set({ isLoading: true, error: null })
        
        try {
            const response = await axiosInstance.get(`"/posts/${postId}"`)

            set({ currentPost: response.data, isLoading: false })
        } catch (error: any) {
            set({ isLoading: false, error: error.message })
            toast.error("Failed to fetch post: ", error.mess)
        }
    },

    createPost: async (post: Post) => {
        set({ isLoading: true, error: null })
        
        try {
            const formData = new FormData()
            formData.append("title", post.title)
            formData.append("content", post.content)
            formData.append("category", post.category)
            formData.append("visibility", post.visibility)
            post.tags.forEach((tag, index) => {
                formData.append(`tags[${index}]`, tag)
            })

            if (post.thumbnail) formData.append("thumbnail", post.thumbnail)
            
            const response = await axiosInstance.post("/posts", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            set((state) => ({
                posts: [...state.posts, response.data],
                isLoading: false,
                currentPost: response.data
            }))

            toast.success("Post Created Successfully!")
        } catch (error: any) {
            set({ isLoading: false, error: error.message })
            toast.error("Failed to create post: ", error.message)
        }
    },

    updatePost: async (postId: string, post: Partial<Post>) => {
        set({ isLoading: true, error: null })
        
        try {
            const formData = new FormData();
            
            (Object.keys(post) as Array<keyof Post>).forEach(key => {
                const value = post[key]

                if (value !== undefined) {
                    switch(key) {
                        case 'tags': 
                            if (Array.isArray(value)) {
                                value.forEach((tag, index) => {
                                    formData.append(`tags[${index}]`, tag)
                                })
                            }
                            break
                        case 'thumbnail': 
                            if (value instanceof File) {
                                formData.append("thumbnail", value)
                            }
                            break
                        case 'comments':
                            break
                        default:
                            if (typeof value === 'string' || typeof value === 'number') {
                                formData.append(key, value.toString())
                            }
                    }
                }
            })

            const response = await axiosInstance.patch(`/posts/${postId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            set((state) => ({
                posts: state.posts.map(p => p._id === postId ? response.data : p),
                isLoading: false,
                currentPost: response.data
            }))

            toast.success("Post Updated Successfully!")
        } catch (error: any) {
            set({ isLoading: false, error: error.message })
            toast.error("Failed to update post: ", error.message)
        }
    },

    deletePost: async (postId: string) => {
        set({ isLoading: true, error: null })
        
        try {
            await axiosInstance.delete(`/posts/${postId}`)

            set((state) => ({
                posts: state.posts.filter(p => p._id !== postId),
                isLoading: false
            }))

            toast.success("Post Deleted Successfully!")
        } catch (error: any) {
            set({ isLoading: false, error: error.message })
            toast.error("Failed to delete post: ", error.message)
        }
    },

    fetchStats: async () => {
        set({ isLoading: true, error: null })
        
        try {
            const response = await axiosInstance.get("/posts/stats")

            set({ stats: response.data, isLoading: false })
        } catch (error: any) {
            set({ isLoading: false, error: error.message })
            toast.error("Failed to fetch post stats: ", error.message)
        }
    },

    likePost: async (postId: string) => {
        set({ isLoading: true, error: null })
        
        try {
            const response = await axiosInstance.post(`posts/${postId}/like`)

            set((state) => ({
                posts: state.posts.map(post => 
                    post._id === postId
                        ? { ...post, likes: response.data.likes }
                        : post
                ),
                currentPost: state.currentPost?._id === postId
                    ? { ...state.currentPost, likes: response.data.likes }
                    : state.currentPost,
                isLoading: false   
            }))
        } catch (error: any) {
            set({ isLoading: false, error: error.message })
            toast.error("Failed to like post: ", error.message)
        }
    },

    addComment: async (id: string, content: string) => {
        set({ isLoading: true, error: null })
        
        try {
            const response = await axiosInstance.post(`/posts/${id}/comments`, {
                content,
            })

            set((state) => ({
                posts: state.posts.map(post => 
                    post._id === id
                        ? { ...post, 
                            comments: [...(post.comments || []), response.data]
                        }
                        : post
                ),
                currentPost: state.currentPost?._id === id
                    ? {
                        ...state.currentPost,
                        comments: [...(state.currentPost.comments || []), response.data]
                    }
                    : state.currentPost,
                isLoading: false
            }))

            toast.success("Comment Added Successfully!")
        } catch (error: any) {
            set({ isLoading: false, error: error.message })
            toast.error("Failed to add comment: ", error.message)
        }
    },

    deleteComment: async (postId: string, commentId: string) => {
        set({ isLoading: true, error: null })
        
        try {
            await axiosInstance.delete(`/posts/${postId}/comments/${commentId}`)

            set((state) => ({
                posts: state.posts.map(post => 
                    post._id === postId
                        ? {
                            ...post,
                            comments: post.comments.filter(comment => comment._id !== commentId)
                        }
                        : post
                ),
                currentPost: state.currentPost?._id === postId
                    ? {
                        ...state.currentPost,
                        comments: state.currentPost.comments.filter(comment => comment._id !== commentId)
                    }
                    : state.currentPost,
                isLoading: false
            }))

            toast.success("Comment Deleted Successfully")
        } catch (error: any) {
            set({ isLoading: false, error: error.message })
            toast.error("Failed to delete comment: ", error.message)
        }
    },

}))