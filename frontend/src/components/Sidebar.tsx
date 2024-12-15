import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { SignedIn, useClerk, useUser } from "@clerk/clerk-react"

import roblogs_logo from "@/assets/images/RoBlogs_Logo.png"
import { CircleHelp, House, LogOut, Plus, Search, UserRound } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Button } from "./ui/button"


interface NavLinkComponentProps {
    to: string
    label: string
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const Sidebar = () => {
    const { signOut } = useClerk()
    const { isSignedIn } = useUser()
    const [loginPromptOpen, setLoginPromptOpen] = useState(false)
    const navigate = useNavigate()
    
    const navItems: NavLinkComponentProps[] = [
        { to: '/', label: 'home', Icon: House, },
        { to: '/search', label: 'search', Icon: Search },
        { to: '/create-post', label: 'add', Icon: Plus },
        { to: '/about', label: 'about', Icon: CircleHelp },
        { to: '/account/:id', label: 'account', Icon: UserRound },
    ]

    const handleNavLinkClick = (label: string) => {
        if ((label === 'add' || label === 'account') && !isSignedIn) {
            setLoginPromptOpen(true);
            return false
        }
        return true
    }
    
    // const handleSignOut = () => {
        
    // }


    return (
        <div className="max-h-screen h-screen min-w-20 max-w-20 bg-[#19161B] py-5 flex flex-col items-center justify-between">
            <Link to={'/'} className="outline-none">
                <img src={roblogs_logo} alt="RoBlogs Logo" className="w-10" />
            </Link>

            <ul className="flex flex-col items-center gap-y-8">
                {navItems.map(({ to, label, Icon }) => (
                    <li 
                        key={label}
                        className={`${label === "add" ? 'bg-[#1F1C21]' : ''} hover:bg-[#1F1C21] py-2 px-3 rounded-lg transition ease-in`}
                    >
                        <NavLink
                            to={to}
                            onClick={(e) => {
                                if (!handleNavLinkClick(label)) {
                                    e.preventDefault()
                                } 
                                // else {
                                //     e.preventDefault()
                                //     window.location.href = to
                                // }
                            }}
                            className={({ isActive }) => `${isActive ? 'opacity-100' : 'opacity-50 transition ease-in hover:opacity-100'}`}
                        >
                            <Icon />
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div>
                <SignedIn>
                    <LogOut 
                        onClick={() => signOut({ redirectUrl: "/login" })} 
                        className="cursor-pointer opacity-50 transition ease-in hover:opacity-100" 
                    />
                </SignedIn>
            </div>

            <Dialog open={loginPromptOpen} onOpenChange={setLoginPromptOpen}>  
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Login Required</DialogTitle>
                        <DialogDescription>
                            You need to be logged in to access this feature.
                        </DialogDescription>
                        <DialogFooter>
                            <Button 
                                variant='outline'
                                onClick={() => setLoginPromptOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button 
                                onClick={() => {
                                    setLoginPromptOpen(false)
                                    navigate('/login')
                                }}
                            >
                                Login
                            </Button>
                        </DialogFooter>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Sidebar