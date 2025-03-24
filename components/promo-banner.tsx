import type React from "react"
import { cn } from "@/lib/utils"

interface PromoBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  variant?: "primary" | "secondary" | "accent"
}

export function PromoBanner({ title, description, variant = "primary", className, ...props }: PromoBannerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl p-6 h-40 flex flex-col justify-end",
        variant === "primary" && "bg-gradient-to-br from-primary to-primary/70 text-primary-foreground",
        variant === "secondary" && "bg-gradient-to-br from-purple-600 to-purple-600/70 text-white",
        variant === "accent" && "bg-gradient-to-br from-amber-500 to-amber-500/70 text-white",
        className,
      )}
      {...props}
    >
      <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 opacity-20">
        {variant === "primary" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 17h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
            <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
            <path d="M12 17v4" />
            <path d="M8 17v4" />
            <path d="M16 17v4" />
          </svg>
        )}
        {variant === "secondary" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v8" />
            <path d="m4.93 10.93 1.41 1.41" />
            <path d="M2 18h2" />
            <path d="M20 18h2" />
            <path d="m19.07 10.93-1.41 1.41" />
            <path d="M22 22H2" />
            <path d="m16 6-4 4-4-4" />
            <path d="M16 18a4 4 0 0 0-8 0" />
          </svg>
        )}
        {variant === "accent" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
          </svg>
        )}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  )
}

