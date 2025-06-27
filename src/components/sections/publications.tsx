"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Eye, MessageSquare, BookOpen, FileText, Video } from "lucide-react"

export function Publications() {
  const publications = [
    {
      type: "article",
      title: "Building Scalable Microservices with Node.js and Kubernetes",
      description:
        "A comprehensive guide to designing and deploying microservices architecture that can handle millions of requests per day.",
      platform: "Medium",
      date: "2024-01-15",
      readTime: "12 min read",
      url: "https://medium.com/@johndoe/building-scalable-microservices",
      tags: ["Microservices", "Node.js", "Kubernetes", "DevOps"],
      featured: true,
    },
    {
      type: "talk",
      title: "The Future of Frontend Development: React Server Components",
      description:
        "Conference talk exploring React Server Components and their impact on modern web development patterns.",
      platform: "React Conf 2024",
      date: "2024-03-20",
      url: "https://youtube.com/watch?v=example",
      tags: ["React", "Server Components", "Frontend", "Performance"],
      featured: true,
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "article":
        return FileText
      case "talk":
        return Video
      case "whitepaper":
        return BookOpen
      case "tutorial":
        return BookOpen
      default:
        return FileText
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "article":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
      case "talk":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300"
      case "whitepaper":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
      case "tutorial":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300"
    }
  }

  const featuredPublications = publications.filter((p) => p.featured)
  const otherPublications = publications.filter((p) => !p.featured)

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Publications & Talks</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge through technical writing, conference talks, and thought leadership in software
            development.
          </p>
        </div>

        {/* Featured Publications */}
        <div className="mb-0">
          <h3 className="text-2xl font-bold text-foreground mb-8">Featured Content</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPublications.map((pub, index) => {
              const IconComponent = getIcon(pub.type)
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <Badge className={`text-xs ${getTypeColor(pub.type)}`}>
                            {pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(pub.date).toLocaleDateString()}</span>
                        </div>
                        <div>{pub.readTime}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-foreground mb-2">{pub.title}</CardTitle>
                    <p className="text-muted-foreground text-sm mb-4">{pub.description}</p>
                    <div className="text-sm text-muted-foreground mb-4">
                      <span className="font-medium">Published on:</span> {pub.platform}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      </div>
                      <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                        <a href={pub.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Read More
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
