"use client"

import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { useState } from "react"

interface ResumeDownloadProps {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
  showIcon?: boolean
}

export function ResumeDownload({
  variant = "default",
  size = "default",
  className = "",
  showIcon = true,
}: ResumeDownloadProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // Replace this URL with your actual resume file path
      // You should place your resume.pdf in the public folder
      const resumeUrl = "/Muhammed_resume.pdf"

      // Create a temporary link element
      const link = document.createElement("a")
      link.href = resumeUrl
      link.download = "Muhammed_resume.pdf" // Replace with your actual name
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Optional: Track download analytics
      // gtag('event', 'resume_download', { event_category: 'engagement' })
    } catch (error) {
      console.error("Error downloading resume:", error)
      // You could show a toast notification here
      alert("Sorry, there was an error downloading the resume. Please try again.")
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button variant={variant} size={size} onClick={handleDownload} disabled={isDownloading} className={className}>
      {showIcon &&
        (isDownloading ? <FileText className="w-4 h-4 mr-2 animate-pulse" /> : <Download className="w-4 h-4 mr-2" />)}
      {isDownloading ? "Downloading..." : "Download Resume"}
    </Button>
  )
}
