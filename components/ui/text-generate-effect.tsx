"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  const [renderedText, setRenderedText] = useState("")

  useEffect(() => {
    const textArray = words.split("")
    let currentText = ""
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < textArray.length) {
        currentText += textArray[currentIndex]
        setRenderedText(currentText)
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [words])

  return (
    <div className={cn("font-normal", className)}>
      <motion.div
        className="text-base sm:text-lg md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {renderedText}
      </motion.div>
    </div>
  )
}
