import { useSignIn } from "@clerk/clerk-react"
import { Button } from "../../../components/ui/button"

const GoogleSignIn = () => {
    const { signIn, isLoaded } = useSignIn()

    if (!isLoaded) return null

    const signInWithGoogle = () => {
        signIn.authenticateWithRedirect({
            strategy: "oauth_google",
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/auth-callback"
        })
    }

    return (
        <Button onClick={signInWithGoogle} className="text-xs gap-1 w-full bg-transparent border outline-none hover:bg-transparent hover:opacity-80">
            <img src="/google.svg" alt="Google" className="size-5 mr-1" />
            Sign In with <span className="font-bold">Google</span>
        </Button>
    )
}

export default GoogleSignIn