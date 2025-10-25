import { HeroSectionWrapper } from "@/components/hero-section-wrapper"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { FloatingNav } from "@/components/floating-nav"

export default function Home() {
  return (
    <main className="relative">
      <FloatingNav />
      <HeroSectionWrapper />
      <div id="about">
        <AboutSection />
      </div>
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  )
}
