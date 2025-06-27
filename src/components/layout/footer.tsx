"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M17.5 3h3.9l-6.9 7.8L22 21h-7.6l-4.7-6.5-5.4 6.5H.5l7.5-9L1 3h7.6l4.3 6 4.6-6z" />
  </svg>
)

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Muhadev",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/fayemi-muhammed",
      label: "LinkedIn",
    },
    {
      icon: XIcon,
      href: "https://twitter.com/Muha_dev",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:muhammedfayemi@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-foreground mb-2">Fayemi Muhammed</h3>
            <p className="text-muted-foreground">
              Software Engineer • Building the future, one line of code at a time
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Fayemi Muhammed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
