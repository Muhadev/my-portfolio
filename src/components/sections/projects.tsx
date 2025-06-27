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
      liveUrl: "https://tech-meet-io.vercel.app", // Update with actual URL if live
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
      liveUrl: "https://payforme-two.vercel.app/", // Update with actual URL if available
      githubUrl: "https://github.com/Muhadev/PayForMe", // Replace with actual repo link
      featured: true,
      metrics: ["Real-time donation tracking", "Secure Stripe payments", "Campaign analytics"],
    },
    {
      title: "Image Kit Dashboard",
      description:
        "A modern image management and UI kit built with Next.js, showcasing component styling and image handling features.",
      image: "/images/image-kit.png", // You can replace this with an actual screenshot path
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://image-kit-gold.vercel.app/", // Replace with actual live site URL if available
      githubUrl: "https://github.com/Muhadev/image-kit", // Replace with real GitHub repo
      featured: false,
      metrics: ["Responsive UI", "Modular components", "Optimized performance"]
    },

    {
      title: "Crypto Analytics Dashboard",
      description:
        "A cryptocurrency tracking and analytics platform displaying coin details, exchange data, and interactive price charts using real-time APIs.",
      image: "/images/crypto.png", // Update this path to your image
      technologies: ["React", "Redux", "Chart.js", "RapidAPI"],
      liveUrl: "https://kryptoeverseapp.netlify.app/", // Replace with actual URL if deployed
      githubUrl: "https://github.com/Muhadev/react-redux-cryptoapp", // Replace with actual GitHub repo
      featured: false,
      metrics: ["100+ cryptocurrencies", "Live exchange rates", "Interactive charts"]
    },

    {
      "title": "Simple Shell (Unix Shell Clone)",
      "description": "A custom UNIX command-line interpreter built in C. Implements core shell functionalities such as command parsing, execution, and process handling. Developed as a milestone project at ALX.",
      "image": "/images/simple.png",
      "technologies": ["C", "Unix", "Shell", "Linux", "System Calls"],
      "liveUrl": "https://github.com/Muhadev/simple_shell",
      "githubUrl": "https://github.com/Muhadev/simple_shell",  // Replace with your actual GitHub URL if different
      "featured": false,
      "metrics": ["Handles built-in and external commands", "Executes programs via PATH", "Manual memory and process management"],
      "stars": 0,
      "forks": 0
    },
    {
      "title": "Personal Portfolio Website",
      "description": "A responsive and modern portfolio built with Next.js 15, TypeScript, and Tailwind CSS. Showcases experience, skills, and projects with performance optimizations and accessibility best practices.",
      "image": "/images/porfolio.png",
      "technologies": ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      "liveUrl": "https://github.com/Muhadev/simple_shell",
      "githubUrl": "https://github.com/Muhadev/my-portfolio.git",  // Replace with your actual GitHub URL if different
      "featured": false,
      "metrics": ["100% responsive design", "Dark/light mode toggle", "SEO-optimized metadata"],
      "stars": 0,
      "forks": 0
    }
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
