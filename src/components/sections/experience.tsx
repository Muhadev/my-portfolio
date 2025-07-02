"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function Experience() {
 const experiences = [
  {
    title: "Junior Software Engineer",
    company: "Optisoft Technology Company Ltd",
    location: "Lagos, Nigeria",
    period: "January 2025 – June 2025",
      "description": [
      "Built on the existing loan servicing infrastructure of Rosabon Financial Services (RFS), a CBN-licensed non-bank financial intermediary, enhancing modules for loan origination, repayment tracking, and credit evaluation workflows.",
      "Integrated automated credit risk checks, document verification, and compliance flows in line with CBN regulations.",
      "Spearheaded an admin dashboard enabling 30+ staff to manage customer onboarding, loan approvals, repayments, and access control roles.",
      "Improved backend API response time by 45% through database schema restructuring, indexed queries, and optimized Django REST serializers.",
      "Led API testing and OpenAPI documentation to support collaborative development in a fast-paced agile team."
    ],
    technologies: ["Python", "Django", "Flask", "React", "TypeScript"]
  },
  {
    title: "Contract Software Engineer",
    company: "Lasaco Assurance Plc",
    location: "Lagos, Nigeria",
    period: "November 2023 – April 2024",
    description: [
      "Migrated legacy claims workflow to a secure web app serving over 500 monthly claimants.",
      "Implemented a premium/tax engine supporting 10+ regional policies, increasing accuracy by 35%.",
      "Automated the generation of 1,000+ dynamic policy documents with secure digital signatures.",
      "Rolled out JWT-based authentication and granular access roles for underwriters, claim agents, and clients."
    ],
    technologies: ["Python", "Django", "React", "Bootstrap"]
  },
  {
    title: "Software Engineer & Mentor",
    company: "Africa Agility",
    location: "Lagos, Nigeria",
    period: "July 2023 – February 2025",
    description: [
      "Spearheaded training sessions for 20+ aspiring female developers on agile workflows, frontend design, and Git.",
      "Mentored teams on full-stack project delivery, reviewed 100+ code commits, and coached on deployment strategies."
    ],
    technologies: ["React", "Node.js", "TypeScript", "MySQL", "Redis"]
  },
  {
    title: "Intern Software Engineer",
    company: "ALX Africa",
    location: "Remote / Africa-wide",
    period: "September 2024 – December 2024",
    description: [
      "Refactored lesson tracking and dashboard components to reduce load time by 40%, boosting UX and maintainability.",
      "Collaborated with 10+ mentors and interns in agile sprints to deliver new features and resolve technical debt."
    ],
    technologies: ["Python", "Flask", "React", "TypeScript", "MySQL", "Redis"]
  }
]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I&apos;ve made at various organizations.
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
