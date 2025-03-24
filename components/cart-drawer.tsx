"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, Plus, Minus, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/context/cart-context"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"

export function CartDrawer() {
  const { items, removeItem, updateQuantity, itemCount, subtotal } = useCart()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative">
        <ShoppingCart className="h-5 w-5" />
        <span className="sr-only">Open cart</span>
      </Button>
    )
  }

  const shipping = 40
  const tax = subtotal * 0.05
  const total = subtotal + shipping + tax

  // Check if we can apply free shipping
  const freeShippingThreshold = 500
  const freeShippingEligible = subtotal >= freeShippingThreshold
  const amountToFreeShipping = freeShippingThreshold - subtotal

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={() => setOpen(true)} // Explicitly set open to true
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Open cart</span>
          {itemCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">{itemCount}</Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full sm:max-w-md p-0">
        <div className="p-4 border-b flex items-center justify-between">
          <SheetTitle className="flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            {itemCount} {itemCount === 1 ? "ITEM" : "ITEMS"}
          </SheetTitle>
          <SheetClose asChild>
            <Button variant="ghost" size="sm">
              Close
            </Button>
          </SheetClose>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 py-12 text-center">
            <div className="rounded-full bg-muted p-6 mb-4">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
            <SheetClose asChild>
              <Button asChild>
                <Link href="/">Start Shopping</Link>
              </Button>
            </SheetClose>
          </div>
        ) : (
          <>
            {!freeShippingEligible && (
              <div className="bg-primary/10 p-3 text-center text-sm">
                Shop ${amountToFreeShipping.toFixed(2)} more and save ${shipping.toFixed(2)} fee
              </div>
            )}

            <ScrollArea className="flex-1">
              <div className="divide-y">
                {items.map((item) => (
                  <div key={item.id} className="p-4 flex items-start gap-3">
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col items-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase</span>
                        </Button>
                        <span className="text-sm font-medium my-1">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease</span>
                        </Button>
                      </div>

                      <div className="h-16 w-16 rounded-md overflow-hidden bg-muted">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <h4 className="text-sm font-medium leading-tight line-clamp-2">{item.name}</h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 ml-1 -mt-1 -mr-1"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{item.unit}</p>
                      <div className="flex justify-between items-center mt-2">
                        <div className="text-sm font-bold">₹{item.price}</div>
                        <div className="text-sm font-bold">₹{(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t p-4 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{freeShippingEligible ? "FREE" : `₹${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span>₹{(subtotal + (freeShippingEligible ? 0 : shipping) + tax).toFixed(2)}</span>
                </div>
              </div>

              <div className="grid gap-2">
                <Button className="w-full">
                  Place Order
                  <span className="ml-auto">
                    ₹{(subtotal + (freeShippingEligible ? 0 : shipping) + tax).toFixed(2)}
                  </span>
                </Button>
                <SheetClose asChild>
                  <Button variant="outline">Continue Shopping</Button>
                </SheetClose>
              </div>

              {freeShippingEligible && (
                <div className="bg-green-50 text-green-700 p-2 text-sm rounded-md text-center">
                  You've qualified for free shipping!
                </div>
              )}
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

