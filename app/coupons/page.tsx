import type { Metadata } from "next"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Home, Scissors } from "lucide-react"
import { CouponCard } from "@/components/coupon-card"

export const metadata: Metadata = {
  title: "Coupons - PantryPlus",
  description: "Save more with exclusive PantryPlus coupons",
}

export default function CouponsPage() {
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
            <BreadcrumbLink>Coupons</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <Scissors className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Coupons</h1>
            <p className="text-muted-foreground mt-1">Save more with exclusive PantryPlus coupons</p>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Coupons</TabsTrigger>
            <TabsTrigger value="groceries">Groceries</TabsTrigger>
            <TabsTrigger value="household">Household</TabsTrigger>
            <TabsTrigger value="personal">Personal Care</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <CouponCard
                code="WELCOME20"
                title="20% Off Your First Order"
                description="New customers get 20% off their first order"
                discount="20%"
                expiresIn="30 days"
                color="primary"
              />
              <CouponCard
                code="FRESHFRUITS10"
                title="10% Off Fresh Fruits"
                description="Get 10% off all fresh fruits"
                discount="10%"
                expiresIn="7 days"
                category="Fresh Fruits"
                color="secondary"
              />
              <CouponCard
                code="FREESHIP50"
                title="Free Shipping"
                description="Free shipping on orders over ₹500"
                discount="FREE"
                expiresIn="14 days"
              />
              <CouponCard
                code="BOGO5050"
                title="Buy One Get One 50% Off"
                description="Buy one item, get another at 50% off"
                discount="50%"
                expiresIn="5 days"
                category="Selected Items"
                color="destructive"
              />
              <CouponCard
                code="WEEKEND15"
                title="Weekend Special"
                description="15% off on all orders placed during weekends"
                discount="15%"
                expiresIn="This weekend"
                color="secondary"
              />
            </div>
          </TabsContent>

          <TabsContent value="groceries" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <CouponCard
                code="FRESHFRUITS10"
                title="10% Off Fresh Fruits"
                description="Get 10% off all fresh fruits"
                discount="10%"
                expiresIn="7 days"
                category="Fresh Fruits"
                color="secondary"
              />
              <CouponCard
                code="VEGGIES15"
                title="15% Off Vegetables"
                description="Fresh vegetables at 15% discount"
                discount="15%"
                expiresIn="10 days"
                category="Vegetables"
                color="primary"
              />
              <CouponCard
                code="DAIRY5"
                title="5% Off Dairy Products"
                description="All dairy products at 5% discount"
                discount="5%"
                expiresIn="14 days"
                category="Dairy"
              />
            </div>
          </TabsContent>

          <TabsContent value="household" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <CouponCard
                code="CLEAN20"
                title="20% Off Cleaning Supplies"
                description="All cleaning products at 20% discount"
                discount="20%"
                expiresIn="7 days"
                category="Cleaning Supplies"
                color="primary"
              />
              <CouponCard
                code="HOME10"
                title="10% Off Home Essentials"
                description="Discount on all home essentials"
                discount="10%"
                expiresIn="14 days"
                category="Home & Kitchen"
                color="secondary"
              />
            </div>
          </TabsContent>

          <TabsContent value="personal" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <CouponCard
                code="BEAUTY25"
                title="25% Off Beauty Products"
                description="Discount on selected beauty items"
                discount="25%"
                expiresIn="5 days"
                category="Beauty & Makeup"
                color="destructive"
              />
              <CouponCard
                code="CARE15"
                title="15% Off Personal Care"
                description="All personal care products at 15% discount"
                discount="15%"
                expiresIn="10 days"
                category="Personal Care"
                color="secondary"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

