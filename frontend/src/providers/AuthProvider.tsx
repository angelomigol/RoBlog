import { axiosInstance } from "@/lib/axios"
import { useAuth } from "@clerk/clerk-react"
import { Loader } from "lucide-react"
import React, { useEffect, useState } from "react"

const updateAPIToken = (token:string | null) => {
    if (token) axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    else delete axiosInstance.defaults.headers.common['Authorization']
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { getToken, userId } = useAuth()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const initAuth = async () => {
            try {
                const token = await getToken()
                updateAPIToken(token)
                if (token) {
                    // await checkAdminStatus()

                    if (userId) {} // initSocket(userId)
                }
            } catch (error:any) {
                updateAPIToken(null)
                console.log("Error in auth provider: ", error)
            } finally { 
                setLoading(false)
            }
        }

        initAuth()

        return () => {} // disconnectSocket()
    }, [getToken, userId])

    if (loading) return (
        <div className="h-screen w-full flex items-center justify-center">
            <Loader className="size-8 text-emerald-500 animate-spin" />
        </div>
    )

    return <>{children}</>
}

export default AuthProvider