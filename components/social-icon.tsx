import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

interface SocialIconProps {
  platform: "twitter" | "instagram" | "youtube" | "facebook" | "snapchat"
}

export function SocialIcon({ platform }: SocialIconProps) {
  const getIcon = () => {
    switch (platform) {
      case "twitter":
        return <Twitter className="h-5 w-5" />
      case "instagram":
        return <Instagram className="h-5 w-5" />
      case "youtube":
        return <Youtube className="h-5 w-5" />
      case "facebook":
        return <Facebook className="h-5 w-5" />
      case "snapchat":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2c4.5 0 8 3.5 8 8 0 3.5-2 5-2 5s.5 2 1 2c.3 0 .6-.1.8-.3.2.3.2.7.2 1 0 1.1-.9 2-2 2-.5 0-1.6-.2-2-.5-2 1.2-4 1.2-4 1.2-3 0-5.5-1.5-7-3.5-.5-.7-1-1.5-1-2.5 0-.8.4-1.5 1-2 .6-.5 1.3-.8 2-1 .3-.1.5-.2.8-.3.2-.1.4-.2.6-.4.2-.2.3-.4.4-.6.1-.2.1-.5.1-.7 0-.2-.1-.5-.2-.7-.1-.2-.2-.4-.4-.6-.1-.2-.3-.3-.5-.4-.2-.1-.4-.2-.6-.2-.2-.1-.5-.1-.7-.1-1.1 0-2 .9-2 2 0 .3.1.6.2.8-.2.2-.5.3-.8.3-1.1 0-2-.9-2-2 0-4.5 3.5-8 8-8z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
      {getIcon()}
    </div>
  )
}
