import * as React from "react"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {
  ShoppingBag,
  SprayCanIcon as Spray,
  User,
  HeartPulse,
  Baby,
  Home,
  FileText,
  Cat,
  Gamepad2,
  Sparkles,
  ShirtIcon,
  Car,
  Shield,
  Utensils,
  Coffee,
  Apple,
  Leaf,
  Milk,
  CroissantIcon as Bread,
  Drumstick,
  Fish,
  Wheat,
  Droplet,
  BellIcon as Pepper,
  Cookie,
  Smartphone,
} from "lucide-react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCategoryIcon(icon: string, className: string) {
  switch (icon) {
    case "shopping-bag":
      return <ShoppingBag className={className} />
    case "spray":
      return <Spray className={className} />
    case "user":
      return <User className={className} />
    case "heart-pulse":
      return <HeartPulse className={className} />
    case "baby":
      return <Baby className={className} />
    case "home":
      return <Home className={className} />
    case "file-text":
      return <FileText className={className} />
    case "cat":
      return <Cat className={className} />
    case "gamepad-2":
      return <Gamepad2 className={className} />
    case "sparkles":
      return <Sparkles className={className} />
    case "shirt":
      return <ShirtIcon className={className} />
    case "car":
      return <Car className={className} />
    case "shield":
      return <Shield className={className} />
    case "utensils":
      return <Utensils className={className} />
    case "coffee":
      return <Coffee className={className} />
    case "apple":
      return <Apple className={className} />
    case "leaf":
      return <Leaf className={className} />
    case "milk":
      return <Milk className={className} />
    case "bread":
      return <Bread className={className} />
    case "drumstick":
      return <Drumstick className={className} />
    case "fish":
      return <Fish className={className} />
    case "wheat":
      return <Wheat className={className} />
    case "droplet":
      return <Droplet className={className} />
    case "pepper":
      return <Pepper className={className} />
    case "cookie":
      return <Cookie className={className} />
    case "smartphone":
      return <Smartphone className={className} />
    default:
      return <ShoppingBag className={className} />
  }
}

export function formatPrice(price: number) {
  return `$${price}`
}


