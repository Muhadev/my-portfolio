"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Coffee, Lightbulb, Users } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code Advocate",
      description: "Writing maintainable, scalable, and well-documented code",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively in cross-functional teams",
    },
    {
      icon: Coffee,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate software engineer with 2+ years of experience building high-quality web applications and leading
            development teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                I&apos;m a Software Engineer who loves creating digital experiences that make a difference. My journey in
                software development started with a curiosity about how things work, and it has evolved into a passion
                for building scalable, user-centric applications.
              </p>

              <p className="text-muted-foreground mb-6">
                I specialize in modern web technologies including Python, C, Typescript, React, and cloud platforms. I&apos;ve had the
                privilege of working with startups companies, leading projects from conception to
                deployment.
              </p>

              <p className="text-muted-foreground mb-8">
                When I&apos;m not coding, you&apos;ll find me contributing to open source projects, mentoring fellow developers,
                or exploring the latest in tech innovation.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">AWS</Badge>
              <Badge variant="secondary">C</Badge>
              {/* <Badge variant="secondary">C</Badge> */}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
