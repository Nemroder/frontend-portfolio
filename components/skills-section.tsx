import { Code, Palette, Database, Wrench } from "lucide-react"

const skillCategories = [
  {
    icon: Code,
    title: "Languages & Frameworks",
    skills: ["JavaScript", "PHP", "Angular", "React", "Node.js", "TypeScript"],
  },
  {
    icon: Palette,
    title: "Front-End Development",
    skills: ["HTML5", "CSS3", "Responsive Design", "Bootstrap", "CSS Grid", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Shopify", "Linux", "CLI"],
  },
  {
    icon: Wrench,
    title: "Design & Multimedia",
    skills: ["Adobe Photoshop", "Illustrator", "Premiere Pro", "UI/UX Design"],
  },
]

export function SkillsSection() {
  return (
    <section className="py-20 px-4 relative bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            A comprehensive toolkit for building modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 md:p-8 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                  <category.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm rounded-lg bg-background/50 border border-accent/20 hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="glass-card rounded-2xl p-6 inline-block">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Languages:</span> Spanish (Native), English (Intermediate
              - B1)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
