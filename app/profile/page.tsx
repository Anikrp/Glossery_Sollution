import type { Metadata } from "next"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight, Home, User, Package, Heart, MapPin, CreditCard } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Profile - PantryPlus",
  description: "Manage your PantryPlus profile",
}

export default function ProfilePage() {
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
            <BreadcrumbLink>Profile</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
            <p className="text-muted-foreground mt-1">Manage your account preferences and view your order history</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Profile Sidebar */}
          <Card className="md:col-span-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Sarah Connor" />
                  <AvatarFallback className="text-lg">SC</AvatarFallback>
                </Avatar>
                <h2 className="mt-4 text-lg font-semibold">Sarah Connor</h2>
                <p className="text-sm text-muted-foreground">sarah@example.com</p>
                <p className="text-xs text-muted-foreground mt-1">Member since June 2023</p>

                <Button className="mt-4 w-full" variant="outline">
                  Edit Profile
                </Button>
              </div>

              <div className="mt-6 space-y-1">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    Account Overview
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/orders">
                    <Package className="mr-2 h-4 w-4" />
                    Orders
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/favorites">
                    <Heart className="mr-2 h-4 w-4" />
                    Saved Items
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/addresses">
                    <MapPin className="mr-2 h-4 w-4" />
                    Addresses
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/billing">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Methods
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="md:col-span-3">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="recentOrders">Recent Orders</TabsTrigger>
                <TabsTrigger value="savedItems">Saved Items</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0 space-y-6">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Manage your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Full Name</p>
                        <p className="text-sm text-muted-foreground">Sarah Connor</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Email Address</p>
                        <p className="text-sm text-muted-foreground">sarah@example.com</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Phone Number</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Date of Birth</p>
                        <p className="text-sm text-muted-foreground">February 15, 1990</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit Information
                    </Button>
                  </CardContent>
                </Card>

                {/* Account Stats */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold">12</div>
                      <p className="text-sm text-muted-foreground mt-1">Orders Placed</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold">₹1200</div>
                      <p className="text-sm text-muted-foreground mt-1">Total Savings</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold">8</div>
                      <p className="text-sm text-muted-foreground mt-1">Items in Wishlist</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Default Address */}
                <Card>
                  <CardHeader>
                    <CardTitle>Default Delivery Address</CardTitle>
                    <CardDescription>Your primary delivery location</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 border rounded-md">
                      <p className="font-medium">Home</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        123 Main Street, Apt 4B
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Set as Default
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="recentOrders" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>Your order history from the past 3 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {orders.length > 0 ? (
                      <div className="space-y-4">
                        {orders.map((order) => (
                          <div key={order.id} className="p-4 border rounded-md">
                            <div className="flex flex-wrap justify-between gap-2">
                              <div>
                                <p className="font-medium">Order #{order.id}</p>
                                <p className="text-sm text-muted-foreground">{order.date}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">₹{order.total}</p>
                                <p
                                  className={`text-sm ${order.status === "Delivered" ? "text-green-500" : "text-amber-500"}`}
                                >
                                  {order.status}
                                </p>
                              </div>
                            </div>
                            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-muted-foreground">
                              <div>
                                <p className="font-medium text-xs">Items</p>
                                <p>{order.items} items</p>
                              </div>
                              <div>
                                <p className="font-medium text-xs">Payment</p>
                                <p>{order.payment}</p>
                              </div>
                              <div>
                                <p className="font-medium text-xs">Address</p>
                                <p>{order.address}</p>
                              </div>
                              <div className="text-right md:text-left">
                                <Button size="sm" variant="outline" asChild>
                                  <Link href={`/orders/${order.id}`}>View Details</Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Package className="h-12 w-12 mx-auto text-muted-foreground/50" />
                        <h3 className="mt-4 text-lg font-medium">No orders yet</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          When you place an order, it will appear here
                        </p>
                        <Button className="mt-4" asChild>
                          <Link href="/">Start Shopping</Link>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="savedItems" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Saved Items</CardTitle>
                    <CardDescription>Products you've added to your wishlist</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {wishlist.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {wishlist.map((item) => (
                          <div key={item.id} className="border rounded-md overflow-hidden">
                            <div className="aspect-square relative">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="font-medium line-clamp-1">{item.name}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{item.price}</p>
                              <div className="flex gap-2 mt-4">
                                <Button size="sm" className="flex-1">
                                  Add to Cart
                                </Button>
                                <Button size="sm" variant="outline">
                                  Remove
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Heart className="h-12 w-12 mx-auto text-muted-foreground/50" />
                        <h3 className="mt-4 text-lg font-medium">No saved items</h3>
                        <p className="text-sm text-muted-foreground mt-1">Items you save will appear here</p>
                        <Button className="mt-4" asChild>
                          <Link href="/categories">Browse Categories</Link>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

const orders = [
  {
    id: "ORD-7829",
    date: "May 15, 2023",
    total: "1,245.00",
    status: "Delivered",
    items: 5,
    payment: "Credit Card",
    address: "Home",
  },
  {
    id: "ORD-6543",
    date: "April 28, 2023",
    total: "879.50",
    status: "Delivered",
    items: 3,
    payment: "UPI",
    address: "Home",
  },
  {
    id: "ORD-5421",
    date: "March 12, 2023",
    total: "2,156.75",
    status: "Delivered",
    items: 8,
    payment: "Credit Card",
    address: "Office",
  },
]

const wishlist = [
  {
    id: 1,
    name: "Organic Turmeric Root",
    price: "₹45.00",
    image: "/placeholder.svg?height=200&width=200&text=Turmeric",
  },
  {
    id: 2,
    name: "Premium Basmati Rice",
    price: "₹329.00",
    image: "/placeholder.svg?height=200&width=200&text=Basmati+Rice",
  },
  {
    id: 3,
    name: "Fresh Spinach",
    price: "₹40.00",
    image: "/placeholder.svg?height=200&width=200&text=Spinach",
  },
  {
    id: 4,
    name: "Organic Coffee Beans",
    price: "₹280.00",
    image: "/placeholder.svg?height=200&width=200&text=Coffee",
  },
]

