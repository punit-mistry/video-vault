"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function BackgroundBeams({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Initialize
    setCanvasDimensions()

    // Handle window resize
    window.addEventListener("resize", setCanvasDimensions)

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Draw grid of dots
    const drawGrid = () => {
      if (!context || !canvas) return

      context.clearRect(0, 0, canvas.width, canvas.height)

      const dotSize = 1
      const gap = 30

      context.fillStyle = "rgba(255, 255, 255, 0.3)"

      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          // Calculate distance from mouse
          const distX = mousePosition.x - x
          const distY = mousePosition.y - y
          const distance = Math.sqrt(distX * distX + distY * distY)

          // Adjust dot size based on mouse proximity
          let size = dotSize
          if (distance < 100) {
            size = dotSize + (100 - distance) / 25
          }

          context.beginPath()
          context.arc(x, y, size, 0, Math.PI * 2)
          context.fill()
        }
      }

      requestAnimationFrame(drawGrid)
    }

    const animationId = requestAnimationFrame(drawGrid)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [mousePosition])

  return (
    <div className={cn("h-full w-full fixed inset-0 z-0", className)} {...props}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
