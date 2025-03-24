"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // In a real app, you would make an API call to logout
    // For this demo, we'll just simulate a logout and redirect
    const logout = async () => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect to home page
      router.push("/")
    }

    logout()
  }, [router])

  return (
    <div className="container flex items-center justify-center h-[70vh]">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Logging out...</h1>
        <p className="text-muted-foreground">You'll be redirected to the home page in a moment.</p>
      </div>
    </div>
  )
}

