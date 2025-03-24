"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Plus, Minus } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"

interface AddToCartButtonProps {
  product: any
  showQuantity?: boolean
}

export function AddToCartButton({ product, showQuantity = true }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem(product, quantity)
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} has been added to your cart.`,
      duration: 2000,
    })
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {showQuantity && (
        <div className="flex items-center">
          <span className="mr-4 font-medium">Quantity</span>
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-none"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease</span>
            </Button>
            <span className="w-12 text-center">{quantity}</span>
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none" onClick={incrementQuantity}>
              <Plus className="h-4 w-4" />
              <span className="sr-only">Increase</span>
            </Button>
          </div>
        </div>
      )}

      <Button size="lg" className="w-full md:w-auto" onClick={handleAddToCart}>
        <ShoppingBag className="mr-2 h-5 w-5" />
        Add to Cart
      </Button>
    </div>
  )
}

