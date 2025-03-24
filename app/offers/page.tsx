import type { Metadata } from "next"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight, Home, Zap, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Offers - PantryPlus",
  description: "Exclusive offers and deals at PantryPlus",
}

export default function OffersPage() {
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
            <BreadcrumbLink>Offers</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Special Offers</h1>
            <p className="text-muted-foreground mt-1">Exclusive deals and promotions just for you</p>
          </div>
        </div>

        {/* Featured Offer */}
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-primary/20 to-primary/5 border mb-8">
          <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                Limited Time
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Mega Summer Sale</h2>
              <p className="text-muted-foreground mb-6">
                Get up to 50% off on fresh produce, pantry staples, and more. Plus, free shipping on orders over ₹500!
              </p>
              <div className="flex items-center gap-4">
                <Button asChild>
                  <Link href="/category/food">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>Ends in 3 days</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-[300px] rounded-xl bg-white shadow-lg p-8 flex items-center justify-center overflow-hidden relative">
                <img
                  src="/placeholder.svg?height=300&width=300&text=Summer+Sale"
                  alt="Summer Sale"
                  className="w-full h-full object-contain"
                />
                <div className="absolute -top-12 -right-12 bg-yellow-500 text-white w-40 h-40 rounded-full flex items-end justify-start p-4 transform rotate-12">
                  <span className="text-2xl font-bold">50% OFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Offers</TabsTrigger>
            <TabsTrigger value="combo">Combo Deals</TabsTrigger>
            <TabsTrigger value="clearance">Clearance</TabsTrigger>
            <TabsTrigger value="flash">Flash Sales</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {offers.map((offer, index) => (
                <OfferCard key={index} {...offer} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="combo" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {offers
                .filter((offer) => offer.type === "combo")
                .map((offer, index) => (
                  <OfferCard key={index} {...offer} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="clearance" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {offers
                .filter((offer) => offer.type === "clearance")
                .map((offer, index) => (
                  <OfferCard key={index} {...offer} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="flash" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {offers
                .filter((offer) => offer.type === "flash")
                .map((offer, index) => (
                  <OfferCard key={index} {...offer} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface OfferCardProps {
  title: string
  description: string
  discount: string
  image: string
  expiresIn: string
  type: "combo" | "clearance" | "flash"
  category: string
  url: string
}

function OfferCard({ title, description, discount, image, expiresIn, category, url }: OfferCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-background text-foreground rounded-full px-3 py-1 text-sm font-medium border shadow-sm">
          {discount}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1 mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            <span>Ends in {expiresIn}</span>
          </div>
          <Button asChild size="sm" variant="secondary">
            <Link href={url}>Shop Now</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

const offers: OfferCardProps[] = [
  {
    title: "Buy 2 Get 1 Free",
    description: "On all dairy products including milk, cheese, and yogurt",
    discount: "3 for 2",
    image: "/placeholder.svg?height=200&width=400&text=Dairy+Products",
    expiresIn: "5 days",
    type: "combo",
    category: "Dairy",
    url: "/category/dairy",
  },
  {
    title: "Fresh Produce Deal",
    description: "30% off on all organic fruits and vegetables",
    discount: "30% OFF",
    image: "/placeholder.svg?height=200&width=400&text=Fresh+Produce",
    expiresIn: "7 days",
    type: "flash",
    category: "Fruits & Vegetables",
    url: "/category/fruits",
  },
  {
    title: "Pantry Essentials",
    description: "Stock up and save big on staples like rice, flour, and pasta",
    discount: "25% OFF",
    image: "/placeholder.svg?height=200&width=400&text=Pantry+Essentials",
    expiresIn: "10 days",
    type: "clearance",
    category: "Food",
    url: "/category/food",
  },
  {
    title: "Breakfast Bundle",
    description: "Get cereal, milk, and fresh fruits at a special price",
    discount: "20% OFF",
    image: "/placeholder.svg?height=200&width=400&text=Breakfast+Bundle",
    expiresIn: "4 days",
    type: "combo",
    category: "Food",
    url: "/category/food",
  },
  {
    title: "Cleaning Supplies",
    description: "Flash sale on all household cleaning products",
    discount: "40% OFF",
    image: "/placeholder.svg?height=200&width=400&text=Cleaning+Supplies",
    expiresIn: "2 days",
    type: "flash",
    category: "Cleaning Supplies",
    url: "/category/cleaning-supplies",
  },
  {
    title: "Snack Attack",
    description: "Discounts on all snacks, chips, and nibbles",
    discount: "15% OFF",
    image: "/placeholder.svg?height=200&width=400&text=Snacks",
    expiresIn: "6 days",
    type: "clearance",
    category: "Snacks",
    url: "/category/snacks",
  },
  {
    title: "Health & Wellness",
    description: "Special offers on vitamins, supplements, and health foods",
    discount: "35% OFF",
    image: "/placeholder.svg?height=200&width=400&text=Health+Products",
    expiresIn: "8 days",
    type: "clearance",
    category: "Health & Wellness",
    url: "/category/health-wellness",
  },
  {
    title: "Beverage Bonanza",
    description: "Buy any 2 beverages and get 1 free",
    discount: "3 for 2",
    image: "/placeholder.svg?height=200&width=400&text=Beverages",
    expiresIn: "5 days",
    type: "combo",
    category: "Beverages",
    url: "/category/beverages",
  },
  {
    title: "Weekend Flash Sale",
    description: "Limited time deals on premium products",
    discount: "Up to 50% OFF",
    image: "/placeholder.svg?height=200&width=400&text=Flash+Sale",
    expiresIn: "3 days",
    type: "flash",
    category: "All Categories",
    url: "/categories",
  },
]

