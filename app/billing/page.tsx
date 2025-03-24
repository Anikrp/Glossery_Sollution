import type { Metadata } from "next"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight, Home, CreditCard, Wallet, Plus, CalendarIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Billing - PantryPlus",
  description: "Manage your payment methods and billing information",
}

export default function BillingPage() {
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
            <BreadcrumbLink>Billing</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <CreditCard className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Billing & Payments</h1>
            <p className="text-muted-foreground mt-1">Manage your payment methods and view billing history</p>
          </div>
        </div>

        <Tabs defaultValue="cards" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="cards">Payment Methods</TabsTrigger>
            <TabsTrigger value="history">Billing History</TabsTrigger>
          </TabsList>

          <TabsContent value="cards" className="mt-0 space-y-6">
            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your saved payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Credit Card 1 */}
                <div className="p-4 border rounded-md relative">
                  <div className="absolute top-4 right-4 w-10 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                  <div className="flex items-start gap-3">
                    <CreditCard className="h-10 w-10 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="font-medium">•••• •••• •••• 1234</p>
                      <p className="text-sm text-muted-foreground mt-1">Expires 11/25</p>
                      <div className="flex items-center mt-2">
                        <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm font-medium">Primary</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>

                {/* Credit Card 2 */}
                <div className="p-4 border rounded-md relative">
                  <div className="absolute top-4 right-4 w-10 h-6 bg-gradient-to-r from-yellow-500 to-amber-500 rounded"></div>
                  <div className="flex items-start gap-3">
                    <CreditCard className="h-10 w-10 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="font-medium">•••• •••• •••• 5678</p>
                      <p className="text-sm text-muted-foreground mt-1">Expires 08/26</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Remove
                    </Button>
                    <Button variant="outline" size="sm">
                      Set as Primary
                    </Button>
                  </div>
                </div>

                {/* UPI */}
                <div className="p-4 border rounded-md">
                  <div className="flex items-start gap-3">
                    <Wallet className="h-10 w-10 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="font-medium">UPI ID: sarah@upi</p>
                      <p className="text-sm text-muted-foreground mt-1">Linked to HDFC Bank</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>

                {/* Add New Payment Method */}
                <Button className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>View your payment and transaction history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {billingHistory.map((transaction) => (
                    <div key={transaction.id} className="p-4 border rounded-md">
                      <div className="flex flex-wrap justify-between gap-2">
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-muted-foreground flex items-center mt-1">
                            <CalendarIcon className="h-3 w-3 mr-1" />
                            {transaction.date}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{transaction.amount}</p>
                          <p
                            className={`text-sm ${transaction.status === "Paid" ? "text-green-500" : transaction.status === "Failed" ? "text-red-500" : "text-amber-500"}`}
                          >
                            {transaction.status}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between text-sm text-muted-foreground">
                        <div>
                          <p className="font-medium text-xs">Payment Method</p>
                          <p>{transaction.method}</p>
                        </div>
                        <div>
                          <p className="font-medium text-xs">Transaction ID</p>
                          <p>{transaction.id}</p>
                        </div>
                        <div>
                          <Button size="sm" variant="outline">
                            View Invoice
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6 flex justify-between">
                <Button variant="outline">Download All Invoices</Button>
                <Button variant="outline">View Detailed Reports</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

const billingHistory = [
  {
    id: "TXN-7829",
    date: "May 15, 2023",
    amount: "₹1,245.00",
    status: "Paid",
    description: "Order #ORD-7829",
    method: "Credit Card ending in 1234",
  },
  {
    id: "TXN-6543",
    date: "April 28, 2023",
    amount: "₹879.50",
    status: "Paid",
    description: "Order #ORD-6543",
    method: "UPI (sarah@upi)",
  },
  {
    id: "TXN-5421",
    date: "March 12, 2023",
    amount: "₹2,156.75",
    status: "Paid",
    description: "Order #ORD-5421",
    method: "Credit Card ending in 5678",
  },
  {
    id: "PMT-2345",
    date: "March 1, 2023",
    amount: "₹2,999.00",
    status: "Paid",
    description: "Premium Membership (Annual)",
    method: "Credit Card ending in 1234",
  },
  {
    id: "TXN-4567",
    date: "February 18, 2023",
    amount: "₹567.25",
    status: "Failed",
    description: "Order #ORD-4567",
    method: "Credit Card ending in 5678",
  },
]

