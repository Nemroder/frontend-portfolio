import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Custom Shopify E-Commerce Stores",
    description:
      "Designed and developed custom Shopify themes with third-party integrations for payment gateways, shipping, and analytics. Optimized performance and user experience to boost conversion rates.",
    image: "/modern-ecommerce-interface.png",
    tags: ["Shopify", "JavaScript", "CSS3", "Performance Optimization"],
    github: "#",
    demo: "#",
  },
  {
    title: "Progressive Web Applications",
    description:
      "Contributed to building PWAs using modern front-end and back-end technologies, focusing on code quality, maintainability, and performance improvements.",
    image: "/ai-analytics-dashboard-dark-theme.jpg",
    tags: ["React", "Node.js", "PWA", "Agile"],
    github: "#",
    demo: "#",
  },
  {
    title: "Multimedia Design Projects",
    description:
      "Created engaging multimedia content and web designs using Adobe Creative Suite, combining technical skills with creative design principles.",
    image: "/social-media-app-interface-mobile.jpg",
    tags: ["Adobe Photoshop", "Illustrator", "Premiere Pro", "UI/UX"],
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            A selection of work showcasing expertise in web development and e-commerce solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden group">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 rounded-lg hover:border-accent hover:text-accent transition-all duration-300 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 glass-card rounded-2xl overflow-hidden group">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative overflow-hidden aspect-video lg:aspect-auto">
              <img
                src="/portfolio-website-design-showcase.jpg"
                alt="Portfolio Website"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                Interactive Portfolio Website
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                This portfolio showcases modern web development skills with Next.js 16, featuring liquid glass effects,
                smooth animations, and a fully responsive design with light/dark theme support.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js 16", "TypeScript", "Tailwind CSS", "React"].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="rounded-lg hover:border-accent hover:text-accent transition-all duration-300 bg-transparent"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
