import { Link } from "react-router-dom"
import roblogs_logo from "@/assets/images/RoBlogs_Logo.png"
import { UserButton } from "@clerk/clerk-react"


const Header = () => {

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 mb-8">
                <Link to='/admin' className="rounded-lg">
                    <img src={roblogs_logo} alt="RoBlogs Logo" className="w-14" />
                </Link>
                <div>
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <p className="text-sm text-zinc-400 mt-1">Track your activity and manage account</p>
                </div>
            </div>
            <UserButton />
      </div>
    )
}

export default Header