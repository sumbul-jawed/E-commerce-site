"use client"
import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SignedIn, SignedOut, SignInButton, useSignIn, useUser, useClerk } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const { signIn, isLoaded } = useSignIn()
  const { isSignedIn } = useUser()
  const { signOut } = useClerk()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email || !password) {
      alert("Please fill in both fields.")
      return
    }

    try {
      if (signIn && isLoaded) {
        const result = await signIn.create({
          identifier: email,
          password,
        })

        if (result.status === "complete") {
          alert("Login successful!")
          router.push("/dashboard") // Redirect to dashboard
        }
      } else {
        alert("Sign-in is not loaded yet.")
      }
    } catch (err) {
      console.error("Login error:", err)
    }
  }

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="flex w-full max-w-4xl shadow-lg bg-white rounded-lg overflow-hidden">
        {/* Left Side - Welcome Message */}
        <div className="w-1/2 flex flex-col justify-center items-center text-black p-8">
          <h1 className="text-3xl font-bold text-yellow-600 underline text-center">
            Welcome to Furniro Furniture Shop
          </h1>
          <br />
          <h2 className="text-1xl font-thin mt-2 text-center">
            Furniro offers a wide range of high-quality furniture to enhance your home and office space. Discover
            stylish, durable, and affordable designs tailored to your needs
          </h2>
        </div>

        {/* Right Side - Login Form Centered */}
        <div className="w-1/2 flex items-center justify-center p-6">
          <Card className="w-full max-w-sm shadow-md p-6">
            <CardHeader className="flex justify-center">
              {/* Show Login Title or Welcome Message */}
              <CardTitle className="text-xl flex justify-center">{isSignedIn ? "Welcome Back!" : "Login"}</CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="mt-1 w-full"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium">
                    Password
                  </label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="mt-1 w-full"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Link href="/forgot-password" className="text-blue-500 text-sm">
                    Forgot Password?
                  </Link>
                </div>

                <SignedOut>
                  <SignInButton mode="modal">
                    <button
                      type="submit"
                      className="w-full bg-yellow-600 hover:bg-yellow-200 text-white py-2 rounded-md text-center"
                    >
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <div className="flex justify-between mt-4">
                    <Link href="/dashboard" className="w-full">
                      <button className="w-full bg-green-600 hover:bg-green-400 text-white py-2 rounded-md text-center">
                        Go to Dashboard
                      </button>
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="w-full bg-yellow-600 hover:bg-yellow-200 text-white py-2 rounded-md text-center ml-2"
                    >
                      Sign Out
                    </button>
                  </div>
                </SignedIn>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

