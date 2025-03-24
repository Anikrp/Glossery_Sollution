import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  Heart,
  Calendar,
  Star,
  Zap,
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
  Award,
  Utensils,
  Coffee,
  Apple,
  Leaf,
  Milk,
  CroissantIcon as Bread,
  Drumstick,
  Fish,
  Wheat,
} from "lucide-react"
import { categories } from "@/data/products"

interface CategorySidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CategorySidebar({ className, ...props }: CategorySidebarProps) {
  return (
    <aside className={cn("w-64 border-r p-4", className)} {...props}>
      <div className="space-y-4">
        <div className="grid gap-1">
          <Link
            href="/coupons"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Star className="h-4 w-4" />
            </div>
            <span>Coupons</span>
            <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
              5
            </span>
          </Link>
          <Link
            href="/offers"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Zap className="h-4 w-4" />
            </div>
            <span>Offers</span>
            <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
              12
            </span>
          </Link>
          <Link
            href="/premium"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
              <Award className="h-4 w-4" />
            </div>
            <span>Premium Club</span>
          </Link>
        </div>
        <div className="h-px bg-muted" />
        <div className="grid gap-1">
          <Link
            href="/favorites"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
          >
            <Heart className="h-4 w-4 text-rose-500" />
            <span>Favorites</span>
          </Link>
          <Link
            href="/seasonal"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
          >
            <Calendar className="h-4 w-4 text-orange-500" />
            <span>Seasonal</span>
          </Link>
          <Link
            href="/trending"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
          >
            <Star className="h-4 w-4 text-yellow-500" />
            <span>Trending</span>
          </Link>
          <Link
            href="/flash-sales"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
          >
            <Zap className="h-4 w-4 text-purple-500" />
            <span>Flash Sales</span>
          </Link>
        </div>
        <div className="h-px bg-muted" />
        <div className="grid gap-1">
          <div className="text-xs font-medium text-muted-foreground">Categories</div>
          {categories.slice(0, 15).map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.slug}`}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              {getCategoryIcon(category.icon, "h-4 w-4")}
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

function getCategoryIcon(icon: string, className: string) {
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
    default:
      return <ShoppingBag className={className} />
  }
}

