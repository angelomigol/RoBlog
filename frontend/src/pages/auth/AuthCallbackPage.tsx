import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "@clerk/clerk-react"
import { axiosInstance } from "@/lib/axios"
import { Card, CardContent } from "@/components/ui/card"
import { Loader } from "lucide-react"
import { toast } from "sonner"


const AuthCallbackPage = () => {
    const { isLoaded, user } = useUser()
    const navigate = useNavigate()
    const syncAttempted = useRef(false)

    useEffect(() => {
        const syncUser = async () => {
            if (!isLoaded || !user || syncAttempted.current) return

            try {
                syncAttempted.current = true

                await axiosInstance.post('/auth/callback', {
                    clerkId: user.id,
                    username: user.username,
                    email: user.emailAddresses[0].emailAddress,
                    imageUrl: user.imageUrl,
                })
            } catch (error: any) {
                console.error("Error in auth callback", {
                    message: error.message,
                    response: error.response?.data,
                    status: error.response?.status
                })

                toast.error("Error in auth callback: ", error.message)
            } finally {
                navigate('/')
            }
        }

        syncUser()
    }, [isLoaded, user, navigate])

    return (
        <div className="h-screen w-full bg-black flex items-center justify-center">
            <Card className="w-[90%] max-w-md bg-zinc-900 border-zinc-800">
                <CardContent className="flex flex-col items-center gap-4 pt-6">
                    <Loader className="size-6 text-zinc-100 animate-spin" />
                    <h3 className="text-zinc-100 text-xl font-bold">Logging You In</h3>
                    <p className="text-zinc-100 text-sm">Redirecting...</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default AuthCallbackPage