import React, { useState }  from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSignIn } from "@clerk/clerk-react"
import { toast } from "sonner"

import AuthLayout from "@/layouts/AuthLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import GoogleSignIn from "@/pages/auth/components/GoogleSignIn"
import TwitterSignIn from "@/pages/auth/components/TwitterSignIn"


const LoginPage = () => {
    const { signIn, isLoaded, setActive } = useSignIn()
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const loginUser = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!isLoaded) {
            toast.error("Sign-in service is not ready. Please try again later.");
            return
        }

        setIsLoading(true)

        try {
            const result = await signIn.create({
                identifier: username,
                password,
            })

            if (result.status === "complete") {
                toast.success("Logged In Successfully!")
                await setActive({ session: result.createdSessionId })
                navigate('/auth-callback')
            } else {
                toast.error("Login Incomplete. Please Try Again")
            }
        } catch (error: any) {
            console.error(JSON.stringify(error, null, 2))

            if (error.errors) {
                const errMessage = error.errors[0]?.message || "Login Failed"
                toast.error(errMessage)
            } else {
                toast.error("Invalid Credentials")
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <AuthLayout>
            <div className="flex flex-col gap-y-4">
                <h2 className="text-xl font-semibold">Welcome, RoBloggers!</h2>
                <form onSubmit={loginUser} className="space-y-4">
                    <Input 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-[#131015]/80 outline-none border-none" 
                        type="text" 
                        placeholder="Username"
                        required
                     />
                    <Input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#131015]/80 outline-none border-none" 
                        type="password" 
                        placeholder="Password"
                        required
                    />
                    <Button 
                        type="submit" 
                        disabled={isLoading}
                        className="text-xs w-full bg-transparent border outline-none font-bold hover:bg-transparent hover:opacity-80"
                    >
                        {isLoading ? "Logging In..." : "Log In"}
                    </Button>
                </form>
                
                <Link to={'/reset-password'} className="text-center text-xs font-bold">
                    Forgot Password or Username?
                </Link>
                
                <div className="border border-white/50" />

                <div className="text-xs text-center space-y-4">
                    <GoogleSignIn />
                    <TwitterSignIn />

                    <p>
                        Don't have an account?{" "}
                        <Link to={'/register'} className="font-bold capitalize">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </AuthLayout>
    )
}

export default LoginPage