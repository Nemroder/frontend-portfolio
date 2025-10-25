import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/sergio-gutierrez" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sergio-gutierrez-741283277" },
  { icon: Mail, label: "Email", href: "mailto:sergioalejandrogutierrezmedina@gmail.com" },
  { icon: Phone, label: "+57 320 524 9988", href: "tel:+573205249988" },
]

export function ContactSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'm always open to new challenges and
            collaborations in web development and e-commerce solutions.
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-5 h-5 text-accent" />
            <span>Bogotá D.C, Colombia</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socials.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="rounded-xl hover:border-accent hover:text-accent hover:scale-110 transition-all duration-300 bg-transparent"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="w-5 h-5 mr-2" />
                  {social.label}
                </a>
              </Button>
            ))}
          </div>

          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © 2025 Sergio Gutierrez. Systems Engineer & Frontend Developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
