import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="bg-background border-t">
      {/* Newsletter Section */}
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest offers, recipes and exclusive deals straight to your inbox.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="max-w-sm" />
              <Button>Subscribe</Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@pantryplus.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1" />
                <span>123 Grocery Lane, Fresh City, FC 12345</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="border-t">
        <div className="container py-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-semibold mb-3">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/categories" className="text-sm text-muted-foreground hover:text-foreground">
                    All Categories
                  </Link>
                </li>
                <li>
                  <Link href="/offers" className="text-sm text-muted-foreground hover:text-foreground">
                    Offers & Discounts
                  </Link>
                </li>
                <li>
                  <Link href="/trending" className="text-sm text-muted-foreground hover:text-foreground">
                    Trending Products
                  </Link>
                </li>
                <li>
                  <Link href="/new-arrivals" className="text-sm text-muted-foreground hover:text-foreground">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-sm text-muted-foreground hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-sm text-muted-foreground hover:text-foreground">
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-sm text-muted-foreground hover:text-foreground">
                    Shipping Information
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                    About PantryPlus
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability" className="text-sm text-muted-foreground hover:text-foreground">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">PantryPlus</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/premium" className="text-sm text-muted-foreground hover:text-foreground">
                    Premium Membership
                  </Link>
                </li>
                <li>
                  <Link href="/app" className="text-sm text-muted-foreground hover:text-foreground">
                    Download App
                  </Link>
                </li>
                <li>
                  <Link href="/refer" className="text-sm text-muted-foreground hover:text-foreground">
                    Refer a Friend
                  </Link>
                </li>
                <li>
                  <Link href="/gift-cards" className="text-sm text-muted-foreground hover:text-foreground">
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2024 PantryPlus. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

