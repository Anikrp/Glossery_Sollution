"use client"

import type React from "react"

import { useState, useRef } from "react"
import { SearchIcon, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { allProducts } from "@/data/products"
import Link from "next/link"
import { useOnClickOutside } from "@/hooks/use-click-outside"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"

interface SearchProps {
  className?: string
  mobile?: boolean
}

export function Search({ className, mobile = false }: SearchProps) {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const { addItem } = useCart()
  const { toast } = useToast()

  // Filter products based on search query
  const filteredProducts =
    query === ""
      ? []
      : allProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category?.toLowerCase().includes(query.toLowerCase()),
        )

  // Generate search suggestions
  const suggestions = query
    ? [`${query} rice`, `${query}`, `${query} premium`, `Search in ${query} category`].filter((s) => s.trim() !== "")
    : []

  // Close dropdown when clicking outside
  useOnClickOutside(searchRef, () => setIsOpen(false))

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 1)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    })
  }

  return (
    <div ref={searchRef} className={`relative flex items-center w-full ${className}`}>
      <SearchIcon className="absolute left-2.5 h-4 w-4 text-muted-foreground z-10" />
      <Input
        type="text"
        placeholder={mobile ? "Search products..." : "Search for products (e.g. eggs, milk, potato)"}
        className="pl-8 rounded-full bg-muted/50"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setIsOpen(e.target.value.length > 0)
        }}
        onFocus={() => query && setIsOpen(true)}
      />
      {query && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 h-7 w-7"
          onClick={() => {
            setQuery("")
            setIsOpen(false)
          }}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Clear search</span>
        </Button>
      )}

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg z-50 overflow-hidden">
          <div className="p-1">
            {suggestions.length > 0 && (
              <div className="border-b pb-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-3 py-1.5 text-sm hover:bg-muted rounded-sm flex items-center"
                    onClick={() => {
                      setQuery(suggestion)
                      // Keep the dropdown open with new results
                    }}
                  >
                    <SearchIcon className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {filteredProducts.length > 0 ? (
              <div className="py-2 max-h-[60vh] overflow-auto">
                {filteredProducts.slice(0, 6).map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.slug || product.id}`}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-muted rounded-sm group"
                    onClick={() => {
                      setIsOpen(false)
                      setQuery("")
                    }}
                  >
                    <div className="h-12 w-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium truncate">{product.name}</h4>
                      <div className="flex items-center mt-1">
                        <span className="text-sm font-bold">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-muted-foreground line-through ml-2">
                            ₹{product.originalPrice}
                          </span>
                        )}
                        <span className="text-xs text-muted-foreground ml-2">{product.unit}</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => handleAddToCart(product, e)}
                    >
                      Add
                    </Button>
                  </Link>
                ))}
                {filteredProducts.length > 6 && (
                  <div className="px-3 pt-2 border-t mt-2">
                    <p className="text-sm text-muted-foreground">Showing 6 of {filteredProducts.length} results</p>
                  </div>
                )}
              </div>
            ) : (
              query && (
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">No results found for "{query}"</p>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}

