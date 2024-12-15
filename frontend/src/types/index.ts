export interface User {
    _id: string
    username: string
    email: string
    imageUrl: string
    clerkId: string
    bio: string
    isBanned: boolean | number
    banReason: string | null
    dateBanned: string | null
    banExpiration: string | null
    // lastSignedIn: string
    no_of_posts: number
    createdAt: string
}

export interface Post {
    _id?: string
    title: string
    content: string
    category: string
    visibility: "draft" | "public" | "private"
    thumbnail: File | null
    tags: string[]
    createdAt?: string
    updatedAt?: string

    likes: number
    views: number
    comments: Comment[]
}

export interface Comment {
    _id?: string
    author: User
    content: string
    createdAt: string
    likes: number
}