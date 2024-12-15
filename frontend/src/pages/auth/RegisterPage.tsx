import { useState } from "react"
import { useSignUp } from "@clerk/clerk-react"
import { Link, useNavigate } from "react-router-dom"
import AuthLayout from "@/layouts/AuthLayout"

import { toast } from "sonner"
import GoogleSignIn from "@/pages/auth/components/GoogleSignIn"
import TwitterSignIn from "@/pages/auth/components/TwitterSignIn"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS } from "input-otp"

const RegisterPage = () => {
  const { isLoaded, signUp, setActive } = useSignUp()
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [pendingVerification, setPendingVerification] = useState(false)
  const [code, setCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [openOTP, setOpenOTP] = useState(false)

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    if (!isLoaded) {
      toast.error("Sign-up service is not available. Please try again later.")
      setIsLoading(false)
      return
    }

    try {
      await signUp.create({
        username,
        emailAddress,
        password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" })
      setPendingVerification(true)
      setOpenOTP(true)
    } catch (error: any) {
      console.error(JSON.stringify(error, null, 2))
      toast.error(error.errors[0].message || "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isLoaded) return

    try {
      const completeSignUp = await signUp?.attemptEmailAddressVerification({ code })

      if (completeSignUp.status !== "complete") {
        console.error(JSON.stringify(completeSignUp, null, 2))
      } 

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId })
        setPendingVerification(false)
        setOpenOTP(false)
        navigate("/login")
      }
        
    } catch (error: any) {
      console.error(JSON.stringify(error, null, 2))
      toast.error(error.errors[0].message || "Something went wrong. Please try again.")
    }
  }

  return (
    <AuthLayout>
      <div className="flex flex-col gap-y-4">
        <h2 className="text-xl font-semibold capitalize">Begin Your First Blog.</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-[#131015]/80 outline-none border-none" 
            type="text" 
            placeholder="Username"
            required
            />
          <Input
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            className="bg-[#131015]/80 outline-none border-none" 
            type="email" 
            placeholder="Email Address"
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
            {isLoading ? "Signing Up..." : "Sign Up"}
          </Button>

          <div id='clerk-captcha' />
        </form>

        <p className="text-xs text-center">
          By clicking Sign Up, you are agreeing to the{" "}
          <Link to={'/'} className="font-bold">Terms of Use.</Link>
        </p>
          
        <div className="border border-white/50" />

        <div className="text-xs text-center space-y-4">
          <GoogleSignIn />
          <TwitterSignIn />


          <p>
            Already have an account?{" "}
            <Link to={'/login'} className="font-bold capitalize">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {(pendingVerification && openOTP) && (
        <Dialog open={openOTP}>
          <DialogContent className="outline-none">
            <DialogHeader>
              <DialogTitle>Verify Your Email</DialogTitle>
              <DialogDescription>
                Please enter your one-time code sent to your email
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleVerifyEmail} className="space-y-6">
              <InputOTP 
                maxLength={6}
                onChange={(code) => setCode(code)}
                pattern={REGEXP_ONLY_DIGITS}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>

              <Button type="submit" onClick={() =>  handleVerifyEmail}>Submit</Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </AuthLayout>
  )
}

export default RegisterPage