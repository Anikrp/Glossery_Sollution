"use client"

import Link from "next/link"
import { Search } from "@/components/search"
import { UserNav } from "@/components/user-nav"
import { MobileNav } from "@/components/mobile-nav"
import { CartDrawer } from "@/components/cart-drawer"
import { LocationSelector } from "@/components/location-selector"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <MobileNav />
          <Link href="/" className="flex items-center gap-2">
            <span className="hidden font-bold text-2xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent md:inline-block">
              Pantry<span className="text-primary font-extrabold">Plus</span>
            </span>
            <span className="font-bold text-2xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent md:hidden">
              P<span className="text-primary font-extrabold">+</span>
            </span>
          </Link>
        </div>

        <div className="relative hidden md:flex items-center w-full max-w-sm mx-4">
          <Search />
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LocationSelector />
          <CartDrawer />
          <UserNav />
        </div>
      </div>

      {/* Secondary navigation for categories - only on homepage */}
      {isHomePage && (
        <div className="hidden md:block border-t">
          <div className="container">
            <nav className="flex items-center overflow-x-auto py-2">
              <ul className="flex items-center gap-6">
                {topCategories.map((category) => (
                  <li key={category.slug}>
                    <Link
                      href={`/category/${category.slug}`}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

const topCategories = [
  { name: "Food", slug: "food" },
  { name: "Fruits", slug: "fruits" },
  { name: "Vegetables", slug: "vegetables" },
  { name: "Dairy", slug: "dairy" },
  { name: "Bakery", slug: "bakery" },
  { name: "Beverages", slug: "beverages" },
  { name: "Snacks", slug: "snacks" },
  { name: "Health & Wellness", slug: "health-wellness" },
  { name: "Home & Kitchen", slug: "home-kitchen" },
  { name: "Beauty & Makeup", slug: "beauty-makeup" },
]

