import { useSignIn } from "@clerk/clerk-react"
import { Button } from "../../../components/ui/button"

const TwitterSignIn = () => {
    const { signIn, isLoaded } = useSignIn()

    if (!isLoaded) return null

    const signInWithX = () => {
        signIn.authenticateWithRedirect({
            strategy: "oauth_x",
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/auth-callback",
        })
    }

    return (
        <Button onClick={signInWithX} className="text-xs gap-1 w-full bg-transparent border outline-none hover:bg-transparent hover:opacity-80">
            <img src="/x.svg" alt="Google" className="size-5 mr-1" />
            Sign In with<span className="font-bold">X</span>
        </Button>
    )
}

export default TwitterSignIn