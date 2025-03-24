import type { Metadata } from "next"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight, Home, Package, ChevronDown, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Orders - PantryPlus",
  description: "View and track your orders",
}

export default function OrdersPage() {
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
            <BreadcrumbLink href="/profile">Profile</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink>Orders</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <Package className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Orders</h1>
            <p className="text-muted-foreground mt-1">View and track your order history</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Order History</CardTitle>
                <CardDescription>View and manage your orders</CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search orders..." className="pl-8 w-full sm:w-[200px]" />
                </div>
                <Button variant="outline" className="flex items-center gap-1">
                  <span>Time Period</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Orders</TabsTrigger>
                <TabsTrigger value="processing">Processing</TabsTrigger>
                <TabsTrigger value="shipped">Shipped</TabsTrigger>
                <TabsTrigger value="delivered">Delivered</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="space-y-4">
                  {orders.map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="processing">
                <div className="space-y-4">
                  {orders
                    .filter((order) => order.status === "Processing")
                    .map((order) => (
                      <OrderCard key={order.id} order={order} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="shipped">
                <div className="space-y-4">
                  {orders
                    .filter((order) => order.status === "Shipped")
                    .map((order) => (
                      <OrderCard key={order.id} order={order} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="delivered">
                <div className="space-y-4">
                  {orders
                    .filter((order) => order.status === "Delivered")
                    .map((order) => (
                      <OrderCard key={order.id} order={order} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="cancelled">
                <div className="space-y-4">
                  {orders
                    .filter((order) => order.status === "Cancelled")
                    .map((order) => (
                      <OrderCard key={order.id} order={order} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

interface Order {
  id: string
  date: string
  total: string
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled"
  items: OrderItem[]
  payment: string
  trackingId?: string
}

interface OrderItem {
  id: number
  name: string
  price: string
  quantity: number
  image: string
}

function OrderCard({ order }: { order: Order }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-muted/50 p-4 flex flex-wrap justify-between gap-2">
        <div>
          <h3 className="font-medium">Order #{order.id}</h3>
          <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
        </div>
        <div className="text-right">
          <p className="font-medium">${order.total}</p>
          <p
            className={`text-sm ${
              order.status === "Delivered"
                ? "text-green-500"
                : order.status === "Cancelled"
                  ? "text-red-500"
                  : "text-amber-500"
            }`}
          >
            {order.status}
          </p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {order.items.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[120px]">
              <div className="aspect-square rounded bg-muted overflow-hidden">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs mt-1 line-clamp-2">{item.name}</p>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>₹{item.price}</span>
                <span>Qty: {item.quantity}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-4 border-t">
          <div className="space-y-1">
            <div className="flex items-center text-sm">
              <p className="font-medium mr-2">Payment:</p>
              <p className="text-muted-foreground">{order.payment}</p>
            </div>
            {order.trackingId && (
              <div className="flex items-center text-sm">
                <p className="font-medium mr-2">Tracking ID:</p>
                <p className="text-muted-foreground">{order.trackingId}</p>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Button size="sm" variant="outline" asChild>
              <Link href={`/orders/${order.id}`}>Order Details</Link>
            </Button>
            {order.status === "Delivered" && <Button size="sm">Reorder</Button>}
            {(order.status === "Shipped" || order.status === "Processing") && <Button size="sm">Track Order</Button>}
          </div>
        </div>
      </div>
    </div>
  )
}

const orders: Order[] = [
  {
    id: "ORD-7829",
    date: "May 15, 2023",
    total: "1,245.00",
    status: "Delivered",
    payment: "Credit Card ending in 1234",
    items: [
      {
        id: 1,
        name: "Organic Turmeric Root",
        price: "45.00",
        quantity: 2,
        image: "/placeholder.svg?height=200&width=200&text=Turmeric",
      },
      {
        id: 2,
        name: "Premium Basmati Rice",
        price: "329.00",
        quantity: 1,
        image: "/placeholder.svg?height=200&width=200&text=Basmati+Rice",
      },
      {
        id: 3,
        name: "Fresh Spinach",
        price: "40.00",
        quantity: 3,
        image: "/placeholder.svg?height=200&width=200&text=Spinach",
      },
    ],
  },
  {
    id: "ORD-6543",
    date: "April 28, 2023",
    total: "879.50",
    status: "Delivered",
    payment: "UPI",
    items: [
      {
        id: 4,
        name: "Organic Coffee Beans",
        price: "280.00",
        quantity: 1,
        image: "/placeholder.svg?height=200&width=200&text=Coffee",
      },
      {
        id: 5,
        name: "Dark Chocolate",
        price: "150.00",
        quantity: 2,
        image: "/placeholder.svg?height=200&width=200&text=Chocolate",
      },
    ],
  },
  {
    id: "ORD-9012",
    date: "May 21, 2023",
    total: "1,562.25",
    status: "Processing",
    payment: "Credit Card ending in 5678",
    items: [
      {
        id: 6,
        name: "Organic Quinoa",
        price: "280.00",
        quantity: 2,
        image: "/placeholder.svg?height=200&width=200&text=Quinoa",
      },
      {
        id: 7,
        name: "Cold-Pressed Olive Oil",
        price: "175.00",
        quantity: 1,
        image: "/placeholder.svg?height=200&width=200&text=Olive+Oil",
      },
      {
        id: 8,
        name: "Matcha Green Tea",
        price: "350.00",
        quantity: 1,
        image: "/placeholder.svg?height=200&width=200&text=Matcha",
      },
    ],
  },
  {
    id: "ORD-8765",
    date: "May 18, 2023",
    total: "723.75",
    status: "Shipped",
    trackingId: "TRK-1234567890",
    payment: "UPI",
    items: [
      {
        id: 9,
        name: "Free-Range Eggs",
        price: "120.00",
        quantity: 1,
        image: "/placeholder.svg?height=200&width=200&text=Eggs",
      },
      {
        id: 10,
        name: "Artisanal Bread",
        price: "120.00",
        quantity: 2,
        image: "/placeholder.svg?height=200&width=200&text=Bread",
      },
    ],
  },
  {
    id: "ORD-5421",
    date: "March 12, 2023",
    total: "2,156.75",
    status: "Cancelled",
    payment: "Credit Card ending in 1234",
    items: [
      {
        id: 11,
        name: "Grass-Fed Beef",
        price: "450.00",
        quantity: 2,
        image: "/placeholder.svg?height=200&width=200&text=Beef",
      },
      {
        id: 12,
        name: "Wild Caught Salmon",
        price: "550.00",
        quantity: 1,
        image: "/placeholder.svg?height=200&width=200&text=Salmon",
      },
    ],
  },
]

