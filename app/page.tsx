"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { SparklesCore } from "@/components/ui/sparkles"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { SocialIcon } from "@/components/social-icon"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { downloadVideo } from "@/lib/download-video"

export default function Home() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [downloadLink, setDownloadLink] = useState("")
  const [videoType, setVideoType] = useState("")

  const handleDownload = async () => {
    if (!url) {
      setError("Please enter a valid URL")
      return
    }

    setLoading(true)
    setError("")
    setDownloadLink("")

    try {
      const result = await downloadVideo(url)
      setDownloadLink(result.downloadUrl)
      setVideoType(result.type)
      setError("")
    } catch (err) {
      setError("Failed to process video. Please check the URL and try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const taglineWords =
    "Download videos online effortlessly by pasting the link, choosing quality, and clicking download instantly."

  return (
    <main className="flex min-h-screen flex-col items-center relative overflow-hidden bg-black">
      <BackgroundBeams className="absolute inset-0" />

      <nav className="w-full flex justify-between items-center p-4 z-10">
        <h1 className="text-2xl font-bold text-white">VideoVault</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full">
            <Sparkles className="mr-2 h-4 w-4" /> Star me on GitHub
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Follow me on Twitter
          </Button>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-1 px-4 z-10">
        <div className="w-full max-w-7xl mx-auto text-center">
          <Button
            variant="ghost"
            className="rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white px-4 py-2 mb-8"
          >
            <Sparkles className="mr-2 h-4 w-4" /> Universal Video Downloader →
          </Button>

          <div className="relative h-40 w-full">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
            <h1 className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-center text-white">
              VideoVault
            </h1>
          </div>

          <div className="mt-4 mb-8 text-white/80 max-w-xl  mx-auto">
            <TextGenerateEffect words={taglineWords} />
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <SocialIcon platform="twitter" />
            <SocialIcon platform="instagram" />
            <SocialIcon platform="youtube" />
            <SocialIcon platform="facebook" />
            <SocialIcon platform="snapchat" />
          </div>

          <TracingBeam className="px-6">
            <Card className="w-full max-w-xl mx-auto bg-black/50 backdrop-blur-md border-white/10">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-2 ">
                  <Input
                    type="text"
                    placeholder="Paste Instagram, YouTube, Twitter or Facebook video URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-1 bg-black/30 border-white/10 text-white w-[800px]"
                  />
                  <Button
                    onClick={handleDownload}
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {loading ? "Processing..." : "Download Now"}
                  </Button>
                </div>

                {error && <p className="text-red-500 mt-2">{error}</p>}

                {downloadLink && (
                  <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-md">
                    <p className="text-green-400 mb-2">Your {videoType} video is ready!</p>
                    <a
                      href={downloadLink}
                      download
                      className="block w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded text-center"
                    >
                      Download Video
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          </TracingBeam>
        </div>
      </div>
    </main>
  )
}
