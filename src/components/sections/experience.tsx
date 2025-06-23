"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function Experience() {
 const experiences = [
  {
    title: "Junior Software Engineer",
    company: "Mactavis Digital",
    location: "Somolu, Lagos, Nigeria",
    period: "January 2025 – June 2025",
    description: [
      "Developed and maintained a full-stack pizza ordering platform with integrated payment APIs.",
      "Improved user experience through iterative UI design aligned with client requirements.",
      "Built and extended RESTful APIs for an internal admin panel used by staff for order and user management.",
      "Worked in an agile environment: performed code reviews, tested APIs, and collaborated with cross-functional teams.",
    ],
    technologies: ["Python", "Django", "Flask", "React", "TypeScript"],
  },
  {
    title: "Intern Software Engineer",
    company: "ALX Africa",
    location: "Remote / Africa-wide",
    period: "September 2024 – December 2024",
    description: [
      "Contributed features to an educational web platform including lesson modules and student progress tracking.",
      "Focused on usability, performance optimization, and clean code practices.",
      "Collaborated with mentors and developers in an agile, peer-review driven environment.",
    ],
    technologies: ["Python", "Flask", "React", "TypeScript", "MySQL", "Redis"],
  },
  {
    title: "Software Engineer & Mentor",
    company: "Africa Agility",
    location: "Lagos, Nigeria",
    period: "July 2024 – February 2025",
    description: [
      "Designed and taught web development modules during a Girls-in-Tech Bootcamp.",
      "Mentored students through project planning, coding, testing, and deployment.",
      "Helped over 20 young women build real-world applications and gain industry-ready skills.",
    ],
    technologies: ["React", "Node.js", "TypeScript", "MySQL", "Redis"],
  },
]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-primary mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
