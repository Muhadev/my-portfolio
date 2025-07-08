"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import { ResumeDownload } from "@/components/ui/resume-download"
import Image from "next/image"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

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

  return (
    <section className="min-h-[110vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            {/* Professional Avatar Options */}
            <div className="w-40 h-40 mx-auto mb-8 relative">
            {!imageError ? (
              // Headshot in white circle frame
              <div className="w-full h-full rounded-full bg-white overflow-hidden border-4 border-muted-foreground shadow-2xl flex items-center justify-center">

                <Image
                  src="/images/muhadev.png"
                  alt="Fayemi Muhammed - Software Engineer"
                  width={160}
                  height={160}
                  className="object-cover object-top w-full h-full"
                  priority
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              // Fallback avatar
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-primary/80 to-secondary relative overflow-hidden border-4 border-primary/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">👨‍💻</span>
                    </div>
                    <span className="text-white font-semibold text-sm">Developer</span>
                  </div>
                </div>
              </div>
            )}
          </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">Software Engineer</h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Building scalable web applications with modern technologies. Passionate about clean code, user experience,
              and innovative solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              View My Work
            </Button>
            <ResumeDownload
              variant="outline"
              size="lg"
              className="bg-background text-foreground border-border hover:bg-accent px-8 py-3"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-background text-foreground border-border hover:bg-accent px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center mt-4 space-x-6">
            <a
              href="https://github.com/Muhadev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/fayemi-muhammed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:muhammedfayemi@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://twitter.com/Muha_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <XIcon className="w-6 h-6" />
              <span className="sr-only">Twitter (X)</span>
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200 animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  )
}
