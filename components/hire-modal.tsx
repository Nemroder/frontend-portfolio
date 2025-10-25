"use client"

import type React from "react"

import { useState } from "react"
import { X, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface HireModalProps {
  isOpen: boolean
  onClose: () => void
}

export function HireModal({ isOpen, onClose }: HireModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:sergioalejandrogutierrezmedina@gmail.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink

    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setFormData({ name: "", email: "", message: "" })
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg glass-card rounded-2xl p-6 md:p-8 animate-in zoom-in-95 duration-300">
        <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-4 top-4 rounded-full">
          <X className="h-5 w-5" />
        </Button>

        {!isSubmitted ? (
          <>
            <div className="mb-6">
              <h2 className="text-3xl font-bold gradient-text mb-2">Let's Work Together</h2>
              <p className="text-muted-foreground">Tell me about your project and let's create something amazing.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="bg-background/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="bg-background/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center animate-in zoom-in duration-300">
            <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  )
}
