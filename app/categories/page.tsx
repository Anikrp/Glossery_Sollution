import type { Metadata } from "next"
import { categories } from "@/data/products"
import { Card, CardContent } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { getCategoryIcon } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Categories - PantryPlus",
  description: "Browse all product categories at PantryPlus",
}

export default function CategoriesPage() {
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
            <BreadcrumbLink>Categories</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
          <p className="text-muted-foreground mt-2">Browse all product categories at PantryPlus.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.slug}`}>
              <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                  <div className="rounded-full bg-primary/10 p-6 mb-4">
                    {getCategoryIcon(category.icon, "h-8 w-8 text-primary")}
                  </div>
                  <h3 className="font-medium text-lg">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

