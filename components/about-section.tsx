import { Code2, ShoppingCart, Zap, Users, Layers, GitBranch } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Modern Frameworks",
    description: "Expert in Angular, React, Node.js, and PHP for building scalable web applications.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Specialized in Shopify development with custom themes and third-party integrations.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Improving site performance, load speed, and user experience to boost conversion rates.",
  },
  {
    icon: Layers,
    title: "PWA Development",
    description: "Building Progressive Web Applications with modern front-end and back-end technologies.",
  },
  {
    icon: GitBranch,
    title: "DevOps Practices",
    description: "Proficient in Git, GitHub, Docker, and Agile methodologies for efficient workflows.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Strong ability to contribute effectively in collaborative team environments.",
  },
]

export function AboutSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Systems Engineering student with a strong foundation in clean code principles, Agile methodologies, and
            hands-on experience building scalable web applications and e-commerce solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 md:p-8 group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                  <skill.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
