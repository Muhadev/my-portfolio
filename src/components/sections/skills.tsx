"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS/Boostrap", level: 85 },
        { name: "Vue.js", level: 80 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 90 },
        { name: "MYSQL", level: 70 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 70 },
        { name: "Kubernetes", level: 60 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "Jest/Testing", level: 85 },
        { name: "GraphQL", level: 80 },
        { name: "Redis", level: 75 },
      ],
    },
  ]

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "MongoDB Certified Developer",
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different technologies and
            frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
