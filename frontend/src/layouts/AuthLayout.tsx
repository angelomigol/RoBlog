import React from "react"
import image1 from "@/assets/images/image1.png"
import roblogs_logo from "@/assets/images/RoBlogs_Logo.png"


const AuthLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="flex max-h-screen h-screen text-white">
            <div className="w-full md:w-1/3 bg-[#393340] md:px-16 px-8 flex flex-col justify-center">
                <div className="h-full flex flex-col justify-between py-4">
                    <div className="text-center mb-8 flex items-center gap-2">
                        <img src={roblogs_logo} alt="RoBlogs Logo" className="size-12" />
                        <h1 className="text-2xl font-bold">RoBlogs</h1>
                    </div>
                    {children}
                    <footer className="mt-8 text-xs text-white/50">
                        <p className="text-start">&copy; RoBlogs 2024</p>
                    </footer>
                </div>
            </div>
            
            <div className="relative hidden md:block md:w-2/3 bg-cover bg-center" style={{ backgroundImage: `url(${image1})` }}>
                <div className="absolute bottom-4 right-4 p-2 rounded bg-[#393340]/30">
                    <p className="text-[10px] px-2">Photo Taken from Sol's RNG</p>
                </div>
            
            </div>
        </div>
    )
}

export default AuthLayout