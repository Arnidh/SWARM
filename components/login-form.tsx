"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Mail, Lock, User, AlertTriangle } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginForm() {
  const router = useRouter()
  const { login, signup } = useAuth()

  // Login state
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [isLoginLoading, setIsLoginLoading] = useState(false)

  // Signup state
  const [signupName, setSignupName] = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [signupPassword, setSignupPassword] = useState("")
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("")
  const [signupError, setSignupError] = useState("")
  const [isSignupLoading, setIsSignupLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError("")
    setIsLoginLoading(true)

    try {
      const success = await login(loginEmail, loginPassword)
      if (success) {
        router.push("/dashboard")
      } else {
        setLoginError("Invalid email or password. Please try again.")
      }
    } catch (error) {
      setLoginError("An error occurred. Please try again.")
    } finally {
      setIsLoginLoading(false)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setSignupError("")

    // Validate passwords match
    if (signupPassword !== signupConfirmPassword) {
      setSignupError("Passwords do not match")
      return
    }

    // Validate password length
    if (signupPassword.length < 6) {
      setSignupError("Password must be at least 6 characters")
      return
    }

    setIsSignupLoading(true)

    try {
      const success = await signup(signupEmail, signupPassword, signupName)
      if (success) {
        router.push("/dashboard")
      } else {
        setSignupError("Failed to create account. Please try again.")
      }
    } catch (error) {
      setSignupError("An error occurred. Please try again.")
    } finally {
      setIsSignupLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Secure Login & Sign-up</h1>
      </div>

      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>

        <TabsContent value="login" className="space-y-6 pt-4">
          <div className="space-y-2 text-center">
            <h2 className="text-xl font-semibold">Welcome Back</h2>
            <p className="text-sm text-muted-foreground">Sign in to access your drone surveillance dashboard</p>
          </div>

          {loginError && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>{loginError}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                  <Mail className="h-4 w-4" />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="pl-10"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                  <Lock className="h-4 w-4" />
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoginLoading}>
              {isLoginLoading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" type="button" className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
              >
                <path d="M1.2 6.8a9.8 9.8 0 0 1 17.6 0" />
                <path d="M3.6 10.3a6.3 6.3 0 0 1 11.4 0" />
                <path d="M6.3 13.8a2.8 2.8 0 0 1 5 0" />
                <circle cx="9" cy="17" r="0.5" />
              </svg>
              Google
            </Button>
            <Button variant="outline" type="button" className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <rect width="20" height="20" x="2" y="2" rx="2" />
                <path d="M4 4h16v16H4z" />
                <path d="M4 12h16" />
                <path d="M12 4v16" />
              </svg>
              Microsoft
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </TabsContent>

        <TabsContent value="signup" className="space-y-6 pt-4">
          <div className="space-y-2 text-center">
            <h2 className="text-xl font-semibold">Create an Account</h2>
            <p className="text-sm text-muted-foreground">Sign up to access drone surveillance features</p>
          </div>

          {signupError && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>{signupError}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signup-name">Full Name</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                  <User className="h-4 w-4" />
                </div>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Enter your full name"
                  className="pl-10"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                  <Mail className="h-4 w-4" />
                </div>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email address"
                  className="pl-10"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                  <Lock className="h-4 w-4" />
                </div>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="Create a password"
                  className="pl-10"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  required
                />
              </div>
              <p className="text-xs text-muted-foreground">Password must be at least 6 characters</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-confirm-password">Confirm Password</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                  <Lock className="h-4 w-4" />
                </div>
                <Input
                  id="signup-confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  className="pl-10"
                  value={signupConfirmPassword}
                  onChange={(e) => setSignupConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isSignupLoading}>
              {isSignupLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" type="button" className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
              >
                <path d="M1.2 6.8a9.8 9.8 0 0 1 17.6 0" />
                <path d="M3.6 10.3a6.3 6.3 0 0 1 11.4 0" />
                <path d="M6.3 13.8a2.8 2.8 0 0 1 5 0" />
                <circle cx="9" cy="17" r="0.5" />
              </svg>
              Google
            </Button>
            <Button variant="outline" type="button" className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <rect width="20" height="20" x="2" y="2" rx="2" />
                <path d="M4 4h16v16H4z" />
                <path d="M4 12h16" />
                <path d="M12 4v16" />
              </svg>
              Microsoft
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

