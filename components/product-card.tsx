"use client"

import { Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/cart-context"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: number
    originalPrice?: number
    unit: string
    image: string
    slug?: string
    category?: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [isFavorite, setIsFavorite] = useState(false)
  const { toast } = useToast()

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = () => {
    addItem(product, 1)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    })
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: `${product.name} has been ${isFavorite ? "removed from" : "added to"} your favorites.`,
      duration: 2000,
    })
  }

  const productUrl = product.slug
    ? `/product/${product.slug}`
    : product.category
      ? `/category/${product.category}/${product.id}`
      : `/product/${product.id}`

  return (
    <Card className="overflow-hidden group border-muted/60 hover:border-primary/20 transition-colors">
      <CardContent className="p-0 relative">
        <div className="absolute top-2 right-2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={toggleFavorite}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-rose-500 text-rose-500" : "text-muted-foreground"}`} />
            <span className="sr-only">{isFavorite ? "Remove from favorites" : "Add to favorites"}</span>
          </Button>
        </div>
        {discount > 0 && (
          <Badge className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground">{discount}% OFF</Badge>
        )}
        <Link href={productUrl}>
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </Link>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-3">
        <Link href={productUrl} className="w-full">
          <div className="space-y-1 text-sm w-full">
            <h3 className="font-medium leading-tight line-clamp-2">{product.name}</h3>
            <p className="text-xs text-muted-foreground">{product.unit}</p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="font-bold">₹{product.price}</div>
            {product.originalPrice && (
              <div className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</div>
            )}
          </div>
        </Link>
        <Button
          className="mt-3 w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
          onClick={handleAddToCart}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Add to bag
        </Button>
      </CardFooter>
    </Card>
  )
}

