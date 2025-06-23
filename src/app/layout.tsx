import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fayemi Muhammed - Software Engineer",
  description:
    "Professional portfolio of Fayemi Muhammed, a Software Engineer specializing in Python, Django/Flask, React and modern web technologies.",
  keywords: "Software Engineer, Python, Django/Flask, react, node.js, typescript, web development, portfolio",
  authors: [{ name: "Fayemi Muhammed" }],
  openGraph: {
    title: "Fayemi Muhammed - Software Engineer",
    description: "Professional portfolio showcasing modern web development projects and expertise",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
