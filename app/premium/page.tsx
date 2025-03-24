import type { Metadata } from "next"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight, Home, Award, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Premium Club - PantryPlus",
  description: "Join the PantryPlus Premium Club for exclusive benefits and savings",
}

export default function PremiumClubPage() {
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
            <BreadcrumbLink>Premium Club</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-amber-500/10 p-3">
            <Award className="h-6 w-6 text-amber-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Premium Club</h1>
            <p className="text-muted-foreground mt-1">
              Exclusive benefits and privileges for our most valued customers
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-white">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000&text=Premium+Pattern')] opacity-10 bg-repeat"></div>
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlock Premium Privileges</h2>
              <p className="text-lg mb-6 text-amber-50">
                Join the PantryPlus Premium Club today and enjoy exclusive benefits, personalized offers, and elevated
                shopping experiences.
              </p>
              <Button size="lg" className="bg-white text-amber-500 hover:bg-amber-50">
                Join Premium Club
              </Button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Premium Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500"
                >
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Free Delivery</h3>
              <p className="text-muted-foreground">
                Unlimited free delivery on all orders, with no minimum purchase required.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Exclusive Discounts</h3>
              <p className="text-muted-foreground">Get special member-only discounts and early access to promotions.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500"
                >
                  <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"></path>
                  <path d="M3 8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8z"></path>
                  <path d="M17 5h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Priority Service</h3>
              <p className="text-muted-foreground">Dedicated customer support and priority delivery scheduling.</p>
            </div>
          </div>
        </div>

        {/* Membership Plans */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Membership Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-muted relative">
              <CardHeader>
                <CardTitle>Monthly</CardTitle>
                <CardDescription>Perfect for trying out Premium</CardDescription>
                <div className="mt-4 flex items-baseline text-foreground">
                  <span className="text-3xl font-bold">₹299</span>
                  <span className="ml-1 text-sm font-medium text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6">Choose Plan</Button>
              </CardContent>
            </Card>
            <Card className="border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 h-16 w-16">
                <div className="absolute transform rotate-45 bg-primary text-primary-foreground text-xs font-medium py-1 right-[-35px] top-[32px] w-[170px] text-center">
                  Popular
                </div>
              </div>
              <CardHeader>
                <CardTitle>Annual</CardTitle>
                <CardDescription>Save 16% with yearly billing</CardDescription>
                <div className="mt-4 flex items-baseline text-foreground">
                  <span className="text-3xl font-bold">₹2999</span>
                  <span className="ml-1 text-sm font-medium text-muted-foreground">/year</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Annual gift box</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary text-primary-foreground">Choose Plan</Button>
              </CardContent>
            </Card>
            <Card className="border-muted relative">
              <CardHeader>
                <CardTitle>Family</CardTitle>
                <CardDescription>Share premium with up to 5 members</CardDescription>
                <div className="mt-4 flex items-baseline text-foreground">
                  <span className="text-3xl font-bold">₹4999</span>
                  <span className="ml-1 text-sm font-medium text-muted-foreground">/year</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Up to 5 family accounts</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Family gift box</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Choose Plan</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 py-10 bg-muted/50 rounded-lg px-6">
          <h2 className="text-2xl font-bold text-center mb-8">What Our Members Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="font-semibold">JD</span>
                </div>
                <div>
                  <h3 className="font-medium">John Doe</h3>
                  <p className="text-sm text-muted-foreground">Member since 2022</p>
                </div>
              </div>
              <p className="text-sm italic">
                "The free delivery alone is worth the membership fee! I've saved so much money and time with PantryPlus
                Premium."
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="font-semibold">AS</span>
                </div>
                <div>
                  <h3 className="font-medium">Aarti Singh</h3>
                  <p className="text-sm text-muted-foreground">Member since 2023</p>
                </div>
              </div>
              <p className="text-sm italic">
                "The exclusive discounts are amazing. I estimate I've saved over ₹5000 in just three months of
                membership."
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="font-semibold">RK</span>
                </div>
                <div>
                  <h3 className="font-medium">Rahul Kumar</h3>
                  <p className="text-sm text-muted-foreground">Member since 2021</p>
                </div>
              </div>
              <p className="text-sm italic">
                "The priority service is a game changer. I can schedule my deliveries at exact times that work for me."
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 border rounded-lg">
                <h3 className="font-medium mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to elevate your shopping experience?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join thousands of satisfied members who enjoy premium benefits every day.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
            Become a Premium Member <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

const features = [
  "Free unlimited delivery",
  "Exclusive member-only discounts",
  "Priority customer service",
  "Early access to sales",
  "Special birthday offers",
]

const faqs = [
  {
    question: "How does the free delivery work?",
    answer:
      "As a Premium member, you get unlimited free delivery on all orders with no minimum purchase required. This applies to all delivery slots, including same-day and next-day delivery.",
  },
  {
    question: "Can I cancel my membership anytime?",
    answer:
      "Yes, you can cancel your membership at any time. For monthly plans, you'll continue to enjoy benefits until the end of your billing period. For annual plans, we provide a 14-day money-back guarantee.",
  },
  {
    question: "How do I share my Family plan with others?",
    answer:
      "Once you sign up for a Family plan, you'll receive instructions to invite up to 5 family members via email. Each person will create their own account but will be linked to your family membership.",
  },
  {
    question: "Are there any additional fees beyond the membership cost?",
    answer:
      "No, your membership fee covers all the benefits described. There are no hidden charges or additional fees for using any of the premium features.",
  },
  {
    question: "What is included in the gift box?",
    answer:
      "The annual gift box includes a curated selection of premium products, exclusive merchandise, and special offers. The contents vary throughout the year, but it's always valued higher than the membership fee.",
  },
]

