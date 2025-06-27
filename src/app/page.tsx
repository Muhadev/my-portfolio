import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Publications } from "@/components/sections/publications"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
