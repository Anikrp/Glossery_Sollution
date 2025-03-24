import type { Metadata } from "next"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight, Home, MapPin, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Addresses - PantryPlus",
  description: "Manage your delivery addresses",
}

export default function AddressesPage() {
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
            <BreadcrumbLink>Addresses</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Addresses</h1>
            <p className="text-muted-foreground mt-1">Manage your delivery locations</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {addresses.map((address) => (
            <AddressCard
              key={address.id}
              title={address.title}
              name={address.name}
              address={address.address}
              phone={address.phone}
              isDefault={address.isDefault}
            />
          ))}

          <Card className="border-dashed flex items-center justify-center min-h-[200px]">
            <Button variant="outline" className="flex flex-col h-auto p-6 gap-2">
              <Plus className="h-6 w-6" />
              <span>Add New Address</span>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

interface AddressCardProps {
  title: string
  name: string
  address: string
  phone: string
  isDefault?: boolean
}

function AddressCard({ title, name, address, phone, isDefault }: AddressCardProps) {
  return (
    <Card className="relative">
      {isDefault && (
        <div className="absolute top-2 right-2 bg-primary/10 text-primary text-xs font-medium py-1 px-2 rounded-full">
          Default
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>Delivery address</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground whitespace-pre-line">{address}</p>
          <p className="text-sm text-muted-foreground mt-2">{phone}</p>
        </div>
        <div className="flex gap-2 mt-4">
          <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button variant="outline" size="sm">
            Delete
          </Button>
          {!isDefault && (
            <Button variant="outline" size="sm">
              Set as Default
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

const addresses = [
  {
    id: 1,
    title: "Home",
    name: "Sarah Connor",
    address: "123 Main Street, Apt 4B\nNew York, NY 10001\nUnited States",
    phone: "+1 (555) 123-4567",
    isDefault: true,
  },
  {
    id: 2,
    title: "Office",
    name: "Sarah Connor",
    address: "456 Corporate Plaza, Suite 789\nNew York, NY 10022\nUnited States",
    phone: "+1 (555) 987-6543",
    isDefault: false,
  },
  {
    id: 3,
    title: "Parents' Home",
    name: "John Connor",
    address: "789 Family Lane\nLos Angeles, CA 90001\nUnited States",
    phone: "+1 (555) 321-7890",
    isDefault: false,
  },
]

