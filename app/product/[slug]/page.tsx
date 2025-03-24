import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProductBySlug, getRelatedProducts } from "@/data/products"
import { ProductCard } from "@/components/product-card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight, Home, Truck, ShieldCheck, RotateCcw } from "lucide-react"
import { AddToCartButton } from "@/components/add-to-cart-button"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} - PantryPlus`,
    description: product.description,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.id)

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
          {product.category && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink href={`/category/${product.category}`}>
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
            </>
          )}
          <BreadcrumbItem>
            <BreadcrumbLink>{product.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="aspect-square relative overflow-hidden rounded-xl bg-muted">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="object-cover w-full h-full" />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="mt-2 flex items-center gap-4">
            <div className="text-3xl font-bold">${product.price}</div>
            {product.originalPrice && (
              <div className="text-xl text-muted-foreground line-through">${product.originalPrice}</div>
            )}
            {product.originalPrice && (
              <div className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm font-medium">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </div>
            )}
          </div>

          <div className="mt-2 text-sm text-muted-foreground">{product.unit}</div>

          <div className="mt-6">
            <h2 className="font-medium mb-2">Description</h2>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>

          <div className="mt-8 grid gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Free Delivery</h3>
                <p className="text-sm text-muted-foreground">On orders over ₹500</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Quality Guarantee</h3>
                <p className="text-sm text-muted-foreground">100% authentic products</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <RotateCcw className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

