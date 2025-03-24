import type { Metadata } from "next"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight, Home, Heart, Search, ShoppingBag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"
import { allProducts } from "@/data/products"

export const metadata: Metadata = {
  title: "Favorites - PantryPlus",
  description: "View and manage your favorite products",
}

export default function FavoritesPage() {
  // For demo purposes, we'll use the first 8 products as "favorites"
  const favoriteProducts = allProducts.slice(0, 8)

  return (
    <div className="container py-6 md:py-10">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Home className="h-4 w-4 mr-1" />
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink>Favorites</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-red-500/10 p-3">
            <Heart className="h-6 w-6 text-red-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Favorites</h1>
            <p className="text-muted-foreground mt-1">Products you've saved for later</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search your favorites..." className="pl-8" />
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-1">
              <ShoppingBag className="h-4 w-4 mr-1" />
              Add All to Cart
            </Button>
            <Button variant="outline" className="flex items-center gap-1">
              <Heart className="h-4 w-4 mr-1" />
              Remove All
            </Button>
          </div>
        </div>

        {favoriteProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <Card className="py-8">
            <CardContent className="flex flex-col items-center justify-center py-10 text-center">
              <Heart className="h-16 w-16 text-muted-foreground/40" />
              <h2 className="text-xl font-medium mt-4">No favorites yet</h2>
              <p className="text-muted-foreground max-w-md mt-2">
                Save your favorite products for quick access. Look for the heart icon when browsing products.
              </p>
              <Button className="mt-6" asChild>
                <a href="/categories">Browse Categories</a>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

