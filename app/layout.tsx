import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleAnalytics } from "nextjs-google-analytics";
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VideoVault - Download Videos from Instagram, YouTube, Twitter & Facebook",
  description:
    "Download videos online effortlessly by pasting the link, choosing quality, and clicking download instantly.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <GoogleAnalytics trackPageViews gaMeasurementId="G-RV9D9NVBGH" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'