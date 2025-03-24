import Link from "next/link"
import { Search } from "@/components/search"
import { Card } from "@/components/ui/card"
import { CategorySidebar } from "@/components/category-sidebar"
import { PromoBanner } from "@/components/promo-banner"
import { ProductCard } from "@/components/product-card"
import { allProducts, categories } from "@/data/products"

export default function Home() {
  // Get random products for different sections
  const recentProducts = allProducts.slice(0, 5)
  const recommendedProducts = allProducts.slice(5, 10)

  return (
    <div className="flex flex-1">
      <CategorySidebar className="hidden md:block" />
      <main className="flex-1 p-4 md:p-6">
        <div className="relative flex md:hidden items-center w-full mb-4">
          <Search mobile />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <PromoBanner 
            title="Flash Sale"
            description="Up to 50% off" 
            variant="primary" 
            className="md:col-span-1"
          />
          <PromoBanner 
            title="New Arrivals"
            description="Fresh products daily"
            variant="secondary"
            className="md:col-span-1"
          />
          <PromoBanner 
            title="Premium Membership"
            description="Free delivery on all orders"
            variant="accent"
            className="md:col-span-1"
          />
        </div>
        {/* Categories Carousel */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold tracking-tight">Shop by Category</h2>
            <Link href="/categories" className="text-sm font-medium text-primary">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {categories.slice(0, 6).map((category) => (
              <Card key={category.id} className="overflow-hidden group">
                <Link href={`/category/${category.slug}`} className="block p-2">
                  <div className="aspect-square rounded-xl bg-muted/80 flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                    </svg>
                  </div>
                  <div className="text-center text-sm font-medium truncate">{category.name}</div>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Order Again Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold tracking-tight">Order Again</h2>
            <Link href="/order-history" className="text-sm font-medium text-primary">
              View more
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {recentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Recommended Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold tracking-tight">Recommended For You</h2>
            <Link href="/recommended" className="text-sm font-medium text-primary">
              View more
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

