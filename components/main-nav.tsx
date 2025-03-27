"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DrillIcon as Drone, LayoutDashboard, Settings, Video } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      active: pathname === "/dashboard",
    },
    {
      href: "/drones",
      label: "Drones",
      icon: Drone,
      active: pathname === "/drones",
    },
    {
      href: "/footage",
      label: "Footage",
      icon: Video,
      active: pathname === "/footage",
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
      active: pathname === "/settings",
    },
  ]

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => {
        const Icon = route.icon
        return (
          <Button key={route.href} variant={route.active ? "default" : "ghost"} asChild className="justify-start">
            <Link
              href={route.href}
              className={cn(
                "flex items-center text-sm font-medium transition-colors",
                route.active ? "text-primary-foreground" : "text-muted-foreground hover:text-primary",
              )}
            >
              <Icon className="mr-2 h-4 w-4" />
              {route.label}
            </Link>
          </Button>
        )
      })}
    </nav>
  )
}

