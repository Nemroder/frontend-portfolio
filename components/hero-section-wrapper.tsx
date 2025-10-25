"use client"

import dynamic from "next/dynamic"

const HeroSection = dynamic(
  () =>
    import("@/components/hero-section").then((mod) => mod.HeroSection), // 👈 accedemos al export nombrado
  { ssr: false }
)

export function HeroSectionWrapper() {
  return <HeroSection />
}
