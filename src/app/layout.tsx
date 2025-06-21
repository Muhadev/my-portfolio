import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Doe - Full Stack Developer",
  description:
    "Professional portfolio of John Doe, a full stack developer specializing in React, Node.js, and modern web technologies.",
  keywords: "full stack developer, react, node.js, typescript, web development, portfolio",
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe - Full Stack Developer",
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
