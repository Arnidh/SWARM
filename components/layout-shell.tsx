"use client"

import type React from "react"

import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { useAuth } from "@/lib/auth-context"

interface LayoutShellProps {
  children: React.ReactNode
}

export function LayoutShell({ children }: LayoutShellProps) {
  const { user, logout } = useAuth()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">DroneGuard</h1>
            <MainNav />
          </div>
          <UserNav user={user} onLogout={logout} />
        </div>
      </header>
      <main className="flex-1 container py-6">{children}</main>
    </div>
  )
}

