"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
      {
      title: "TechMeet.io – Tech Event Management Platform",
      description:
        "A full-stack platform for managing tech events, featuring event creation, ticket generation with QR codes, role-based access control, and real-time payment processing. Implemented Google/GitHub OAuth, email confirmations, and admin dashboards.",
      image: "/images/TechMeet.png", // Replace with your actual image path
      technologies: ["React", "Django", "MySQL", "Tailwind CSS", "JWT", "Paystack", "SendGrid"],
      liveUrl: "https://techmeet.io", // Update with actual URL if live
      githubUrl: "https://github.com/Muhadev/PayForMe", // Replace with actual repo link
      featured: true,
      metrics: ["QR-based tickets", "Multi-role access", "OAuth + Paystack Integration"],
    },
    {
      title: "PayForMe – Online Crowdfunding App",
      description:
        "A donation-based crowdfunding application where users can create campaigns, track contributions, and securely collect funds. Features campaign dashboards, Stripe payment integration, and social sharing to boost reach.",
      image: "/images/PayForMe.png", // Replace with actual image path
      technologies: ["Flask", "React", "MySQL", "Stripe", "Redis"],
      liveUrl: "https://payForMe.io", // Update with actual URL if available
      githubUrl: "https://github.com/Muhadev/PayForMe", // Replace with actual repo link
      featured: true,
      metrics: ["Real-time donation tracking", "Secure Stripe payments", "Campaign analytics"],
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "A data visualization platform that aggregates weather data from multiple APIs and provides interactive charts and forecasting.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      metrics: ["1M+ data points", "Real-time updates", "ML predictions"],
    },
    {
      title: "Social Media Scheduler",
      description:
        "An automation tool for scheduling and managing social media posts across multiple platforms with analytics and engagement tracking.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "OAuth"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      metrics: ["50+ platforms", "Auto-scheduling", "Analytics dashboard"],
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to bring ideas to life.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="border-border overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl text-foreground mb-2">{project.title}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                        {project.metrics.map((metric, metricIndex) => (
                          <span key={metricIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button asChild className="bg-primary hover:bg-primary/90">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="bg-background text-foreground border-border hover:bg-accent"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="bg-background text-foreground border-border hover:bg-accent"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
