import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";

interface AdminStore {
    isLoading: boolean
    error: string | null
    stats: {
        totalPosts: number
        totalUsers: number
        totalBlogReports: number
        totalCommentReports: number
    }


    fetchStats: () => Promise<void>
}

export const useAdminStore = create<AdminStore>((set) => ({
    accounts: [],
    isLoading: false,
    error: null,
    stats: {
        totalPosts: 0,
        totalUsers: 0,
        totalBlogReports: 0,
        totalCommentReports: 0
    },


    fetchStats: async () => {
        set({ isLoading: true, error: null })

        try {
            const response = await axiosInstance.get('/stats/admin')

            set({ stats: response.data })
        } catch (error: any) {
            set({ error: error.response.data.message })
        } finally {
            set({ isLoading: false })
        }
    },
    
}))