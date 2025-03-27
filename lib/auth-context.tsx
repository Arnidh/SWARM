"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  email: string
  name: string
  role: string
  avatar?: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  signup: (email: string, password: string, name: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check if user is logged in on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("droneUser")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // Mock login function - in a real app, this would call an API
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // For demo purposes, accept any email with a password length > 5
        if (email && password.length > 5) {
          const newUser = {
            id: "user-1",
            email,
            name: email.split("@")[0],
            role: "Drone Operator",
          }

          setUser(newUser)
          localStorage.setItem("droneUser", JSON.stringify(newUser))
          setIsLoading(false)
          resolve(true)
        } else {
          setIsLoading(false)
          resolve(false)
        }
      }, 1500)
    })
  }

  // Mock signup function
  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email && password.length > 5) {
          const newUser = {
            id: "user-" + Date.now(),
            email,
            name: name || email.split("@")[0],
            role: "Drone Operator",
          }

          setUser(newUser)
          localStorage.setItem("droneUser", JSON.stringify(newUser))
          setIsLoading(false)
          resolve(true)
        } else {
          setIsLoading(false)
          resolve(false)
        }
      }, 1500)
    })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("droneUser")
    router.push("/")
  }

  return <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

