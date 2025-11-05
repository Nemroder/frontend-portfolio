import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Angular E-Commerce Web App",
    description:
      "Developed a custom e-commerce platform using Angular, featuring modular architecture, authentication, and product management. Integrated local storage for cart persistence and optimized performance and user experience for faster navigation and higher engagement.",
    image: "/ecommerce.png",
    tags: ["Angular", "TypeScript", "RxJS", "Local Storage API"],
    github: "https://github.com/Nemroder/angular-ecommerce",
    demo: "https://angular-ecommerce-ashy.vercel.app/",
  },
  {
    title: "Wordle Game",
    description:
      "Developed an interactive Wordle-style game using JavaScript and RxJS. Implemented keyboard input handling, dynamic UI updates, and game state logic to deliver a smooth and engaging experience.",
    image: "/wordle.png",
    tags: ["JavaScript", "RxJS", "Game Logic", "Frontend"],
    github: "https://github.com/Nemroder/wordle-Game",
    demo: "https://myproject-wordlegame.vercel.app/",
  },
  {
    title: "TaskFlow – SaaS Project Management Platform",
    description:
      "Developed a modern SaaS project management platform featuring Supabase authentication, real-time dashboards, Kanban-based task management, live chat with Realtime subscriptions, and a fully responsive design inspired by Linear and Notion. All data is protected with Row Level Security policies.",
    image: "/taskflow.png",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Realtime", "SaaS"],
    github: "https://github.com/Nemroder/taskflow-app",
    demo: "https://taskflow-app-green.vercel.app/" 
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
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full rounded-lg hover:border-accent hover:text-accent transition-all duration-300 bg-transparent cursor-pointer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      className="w-full rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 glass-card rounded-2xl overflow-hidden group">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative overflow-hidden aspect-video lg:aspect-auto">
              <img
                src="/portfolio_website.png"
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
                <a
                  href="https://github.com/Nemroder/frontend-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full rounded-lg hover:border-accent hover:text-accent transition-all duration-300 bg-transparent cursor-pointer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
