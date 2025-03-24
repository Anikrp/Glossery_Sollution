import type { Metadata } from "next"
import { allProducts } from "@/data/products"
import { ProductCard } from "@/components/product-card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight, Home, SearchIcon } from "lucide-react"

interface SearchPageProps {
  searchParams: { q: string }
}

export function generateMetadata({ searchParams }: SearchPageProps): Metadata {
  return {
    title: `Search results for "${searchParams.q}" - PantryPlus`,
    description: `Browse search results for "${searchParams.q}" at PantryPlus`,
  }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""

  const filteredProducts =
    query === ""
      ? []
      : allProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category?.toLowerCase().includes(query.toLowerCase()) ||
            product.description?.toLowerCase().includes(query.toLowerCase()),
        )

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
            <BreadcrumbLink>Search Results</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <SearchIcon className="mr-2 h-6 w-6" />
            Search Results
          </h1>
          <p className="text-muted-foreground mt-2">
            {filteredProducts.length} results for "{query}"
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-muted p-6 mb-4">
              <SearchIcon className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-medium mb-2">No results found</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              We couldn't find any products matching "{query}". Try checking your spelling or using more general terms.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

