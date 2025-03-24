import type { Metadata } from "next"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight, Home, Settings, Bell, Shield, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export const metadata: Metadata = {
  title: "Settings - PantryPlus",
  description: "Manage your account settings and preferences",
}

export default function SettingsPage() {
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
            <BreadcrumbLink>Settings</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <Settings className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
            <p className="text-muted-foreground mt-1">Manage your account settings and preferences</p>
          </div>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-0 space-y-6">
            {/* Account Information */}
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your basic account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Sarah Connor" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" defaultValue="sarah@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Preferred Language</Label>
                    <select
                      id="language"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                      <option value="ta">Tamil</option>
                      <option value="te">Telugu</option>
                      <option value="bn">Bengali</option>
                    </select>
                  </div>
                </div>
                <Button className="mt-4">Save Changes</Button>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card>
              <CardHeader>
                <CardTitle>Account Preferences</CardTitle>
                <CardDescription>Customize your shopping experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Dietary Preferences</Label>
                    <p className="text-sm text-muted-foreground">
                      We'll highlight products that match your preferences
                    </p>
                  </div>
                  <Button variant="outline">Customize</Button>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-0.5">
                    <Label className="text-base">Product Recommendations</Label>
                    <p className="text-sm text-muted-foreground">
                      Use my purchase history to show relevant recommendations
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-0.5">
                    <Label className="text-base">Order Confirmations</Label>
                    <p className="text-sm text-muted-foreground">
                      Include detailed nutritional information with my orders
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-0.5">
                    <Label className="text-base">Seasonal Products</Label>
                    <p className="text-sm text-muted-foreground">Show seasonal and limited-time products in my feed</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-0">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Manage how we contact you</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="all-notifications" className="text-sm font-medium">
                      All Notifications
                    </Label>
                    <Switch id="all-notifications" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-muted-foreground" />
                      <div className="space-y-0.5">
                        <h4 className="font-medium">Order Updates</h4>
                        <p className="text-sm text-muted-foreground">Receive notifications about your order status</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="order-email" className="text-sm">
                          Email
                        </Label>
                        <Switch id="order-email" defaultChecked />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="order-sms" className="text-sm">
                          SMS
                        </Label>
                        <Switch id="order-sms" defaultChecked />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="order-push" className="text-sm">
                          Push
                        </Label>
                        <Switch id="order-push" defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-muted-foreground" />
                      <div className="space-y-0.5">
                        <h4 className="font-medium">Promotions & Offers</h4>
                        <p className="text-sm text-muted-foreground">
                          Stay informed about discounts and special offers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="promo-email" className="text-sm">
                          Email
                        </Label>
                        <Switch id="promo-email" defaultChecked />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="promo-sms" className="text-sm">
                          SMS
                        </Label>
                        <Switch id="promo-sms" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="promo-push" className="text-sm">
                          Push
                        </Label>
                        <Switch id="promo-push" defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-muted-foreground" />
                      <div className="space-y-0.5">
                        <h4 className="font-medium">Account Activity</h4>
                        <p className="text-sm text-muted-foreground">Get notified about important account updates</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="account-email" className="text-sm">
                          Email
                        </Label>
                        <Switch id="account-email" defaultChecked />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="account-sms" className="text-sm">
                          SMS
                        </Label>
                        <Switch id="account-sms" defaultChecked />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="account-push" className="text-sm">
                          Push
                        </Label>
                        <Switch id="account-push" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="mt-0 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-muted-foreground" />
                      <div className="space-y-0.5">
                        <h4 className="font-medium">Password</h4>
                        <p className="text-sm text-muted-foreground">Last changed 30 days ago</p>
                      </div>
                    </div>
                    <Button variant="outline">Change Password</Button>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-5 w-5 text-muted-foreground" />
                      <div className="space-y-0.5">
                        <h4 className="font-medium">Two-Factor Authentication</h4>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                      </div>
                    </div>
                    <Button variant="outline">Set Up 2FA</Button>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-muted-foreground" />
                      <div className="space-y-0.5">
                        <h4 className="font-medium">Active Sessions</h4>
                        <p className="text-sm text-muted-foreground">Manage devices where you're currently logged in</p>
                      </div>
                    </div>
                    <Button variant="outline">View Sessions</Button>
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <h4 className="font-medium mb-2">Account Activity Log</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-1">
                      <div>
                        <p>Password changed</p>
                        <p className="text-muted-foreground">From IP: 192.168.1.1</p>
                      </div>
                      <p className="text-muted-foreground">30 days ago</p>
                    </div>
                    <div className="flex justify-between py-1">
                      <div>
                        <p>New device logged in</p>
                        <p className="text-muted-foreground">iPhone 13 Pro • New York</p>
                      </div>
                      <p className="text-muted-foreground">45 days ago</p>
                    </div>
                    <div className="flex justify-between py-1">
                      <div>
                        <p>Email address updated</p>
                        <p className="text-muted-foreground">From IP: 192.168.1.1</p>
                      </div>
                      <p className="text-muted-foreground">60 days ago</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4">
                    View Full Activity Log
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control your data and privacy preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2">
                    <div className="space-y-0.5">
                      <h4 className="font-medium">Data Sharing</h4>
                      <p className="text-sm text-muted-foreground">
                        Allow PantryPlus to share anonymized data to improve services
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="space-y-0.5">
                      <h4 className="font-medium">Personalized Ads</h4>
                      <p className="text-sm text-muted-foreground">
                        Show ads based on your browsing history and preferences
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="space-y-0.5">
                      <h4 className="font-medium">Browser Cookies</h4>
                      <p className="text-sm text-muted-foreground">
                        Manage cookie preferences for website functionality
                      </p>
                    </div>
                    <Button variant="outline">Manage Cookies</Button>
                  </div>

                  <div className="border-t pt-4 mt-4">
                    <h4 className="font-medium mb-2">Your Data</h4>
                    <p className="text-sm text-muted-foreground mb-4">Control and access the data we store about you</p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline">Download My Data</Button>
                      <Button variant="outline">Delete My Account</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

