"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LocationSelector() {
  const [location, setLocation] = useState("New York")
  const [open, setOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleGetLocation = () => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      setLocation("Geolocation not supported")
      setOpen(false)
      return
    }

    // Show loading state
    setLocation("Getting location...")

    // Try to get the location
    const timeoutId = setTimeout(() => {
      setLocation("Location request timed out")
      setOpen(false)
    }, 10000)

    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          clearTimeout(timeoutId)
          setLocation(`${position.coords.latitude.toFixed(2)}, ${position.coords.longitude.toFixed(2)}`)
          setOpen(false)
        },
        (error) => {
          clearTimeout(timeoutId)
          console.error("Geolocation error:", error)

          // Use a fallback location
          setLocation("Location unavailable - using default")
          setOpen(false)
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
      )
    } catch (error) {
      clearTimeout(timeoutId)
      console.error("Geolocation exception:", error)
      setLocation("Location access error")
      setOpen(false)
    }
  }

  const handleLocationSelect = (newLocation: string) => {
    setLocation(newLocation)
    setOpen(false)
  }

  const handleCustomLocation = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const customLocation = formData.get("customLocation") as string

    if (customLocation) {
      setLocation(customLocation)
      setDialogOpen(false)
    }
  }

  return (
    <div className="flex items-center">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-1 h-8 px-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium max-w-[100px] truncate">{location}</span>
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Select Location</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {popularLocations.map((loc) => (
            <DropdownMenuItem key={loc} onClick={() => handleLocationSelect(loc)}>
              <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
              {loc}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" className="w-full justify-start px-2 rounded-sm font-normal text-sm h-9">
                Enter custom location
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enter your location</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleCustomLocation} className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="customLocation">Location</Label>
                  <Input id="customLocation" name="customLocation" placeholder="Enter city, area, or zip code" />
                </div>
                <div className="flex justify-end">
                  <Button type="submit">Save Location</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
          <DropdownMenuItem onClick={handleGetLocation}>
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            Use current location
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

const popularLocations = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
]

