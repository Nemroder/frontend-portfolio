import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Software Development Intern",
    company: "Group Cos",
    location: "Bogotá D.C, Colombia",
    period: "July 2024 – January 2025",
    description: [
      "Contributed to the development of Progressive Web Applications (PWA) using modern front-end and back-end technologies",
      "Applied Agile methodologies to enhance project workflows and deliverables",
      "Collaborated with the team to improve code quality, maintainability, and performance",
      "Adapted quickly to new technologies, contributing to continuous improvement initiatives",
    ],
  },
  {
    title: "E-commerce Developer (Shopify)",
    company: "Freelance",
    location: "Bogotá D.C, Colombia",
    period: "January 2024 – June 2024",
    description: [
      "Designed and developed custom Shopify themes tailored to client requirements",
      "Integrated third-party apps and plugins to optimize payment gateways, shipping processes, and analytics",
      "Performed advanced configuration and customization of online stores, including image editing and product optimization",
      "Improved site performance and load speed, enhancing user experience and boosting conversion rates",
    ],
  },
]

const education = [
  {
    degree: "B.Sc. in Systems Engineering",
    institution: "Fundación Universitaria Los Libertadores",
    period: "Feb 2025 – Present",
  },
  {
    degree: "Technologist in Software Analysis and Development",
    institution: "Sena",
    period: "Oct 2022 – Jan 2025",
  },
  {
    degree: "Technical Degree in Multimedia Design and Integration",
    institution: "Sena",
    period: "Mar 2020 – Nov 2021",
  },
]

export function ExperienceSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Work Experience */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Professional journey building web applications and e-commerce solutions.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 md:p-8 group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  {edu.degree}
                </h3>
                <p className="text-muted-foreground mb-2">{edu.institution}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
