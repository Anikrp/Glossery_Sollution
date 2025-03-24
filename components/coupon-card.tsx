"use client"

import { Clock, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

interface CouponCardProps {
  code: string
  title: string
  description: string
  discount: string
  expiresIn: string
  category?: string
  color?: "default" | "primary" | "secondary" | "destructive"
}

export function CouponCard({
  code,
  title,
  description,
  discount,
  expiresIn,
  category = "All Products",
  color = "default",
}: CouponCardProps) {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code).then(
      () => {
        toast({
          title: "Coupon code copied!",
          description: `${code} has been copied to your clipboard.`,
        })
      },
      (err) => {
        console.error("Could not copy text: ", err)
        toast({
          title: "Failed to copy",
          description: "Please copy the code manually.",
          variant: "destructive",
        })
      },
    )
  }

  const getBackgroundColor = () => {
    switch (color) {
      case "primary":
        return "bg-primary/10 border-primary/20"
      case "secondary":
        return "bg-purple-500/10 border-purple-500/20"
      case "destructive":
        return "bg-rose-500/10 border-rose-500/20"
      default:
        return "bg-muted border-border"
    }
  }

  return (
    <div className={`rounded-lg border p-4 ${getBackgroundColor()}`}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
        <div className="flex items-center justify-center h-12 min-w-16 rounded-md bg-background text-xl font-bold">
          {discount}
        </div>
      </div>

      <div className="relative mt-4 flex items-center">
        <div className="absolute left-0 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background"></div>
        <div className="absolute right-0 top-1/2 h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full bg-background"></div>
        <div className="h-px w-full bg-border"></div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            <span>Expires in {expiresIn}</span>
          </div>
          <div className="text-xs text-muted-foreground">Valid on: {category}</div>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-medium">{code}</span>
          <Button size="sm" variant="secondary" onClick={handleCopyCode}>
            <Copy className="h-3.5 w-3.5 mr-1" />
            Copy
          </Button>
        </div>
      </div>
    </div>
  )
}

