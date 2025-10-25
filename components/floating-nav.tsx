"use client"

import { useState, useEffect } from "react"
import { Home, User, Briefcase, Mail } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: User, label: "About", href: "#about" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
]

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <>
      {/* Top navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold gradient-text">Portfolio</div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Floating side navigation */}
      <nav
        className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12 pointer-events-none"
        }`}
      >
        <div className="glass-card rounded-2xl p-3 space-y-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                const element = document.querySelector(item.href)
                element?.scrollIntoView({ behavior: "smooth" })
              }}
              className="group relative flex items-center justify-center w-12 h-12 rounded-xl hover:bg-accent/10 transition-all duration-300"
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              <span className="absolute right-full mr-3 px-3 py-1 bg-accent text-accent-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
