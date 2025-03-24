export const categories = [
  { id: 1, name: "Food", slug: "food", icon: "shopping-bag" },
  { id: 2, name: "Fruits", slug: "fruits", icon: "apple" },
  { id: 3, name: "Vegetables", slug: "vegetables", icon: "leaf" },
  { id: 4, name: "Dairy", slug: "dairy", icon: "milk" },
  { id: 5, name: "Bakery", slug: "bakery", icon: "bread" },
  { id: 6, name: "Meat", slug: "meat", icon: "drumstick" },
  { id: 7, name: "Seafood", slug: "seafood", icon: "fish" },
  { id: 8, name: "Grains", slug: "grains", icon: "wheat" },
  { id: 9, name: "Oils", slug: "oils", icon: "droplet" },
  { id: 10, name: "Spices", slug: "spices", icon: "pepper" },
  { id: 11, name: "Beverages", slug: "beverages", icon: "coffee" },
  { id: 12, name: "Snacks", slug: "snacks", icon: "cookie" },
  { id: 13, name: "Cleaning Supplies", slug: "cleaning-supplies", icon: "spray" },
  { id: 14, name: "Personal Care", slug: "personal-care", icon: "user" },
  { id: 15, name: "Health & Wellness", slug: "health-wellness", icon: "heart-pulse" },
  { id: 16, name: "Baby Care", slug: "baby-care", icon: "baby" },
  { id: 17, name: "Home & Kitchen", slug: "home-kitchen", icon: "home" },
  { id: 18, name: "Stationery & Office", slug: "stationery-office", icon: "file-text" },
  { id: 19, name: "Pet Care", slug: "pet-care", icon: "cat" },
  { id: 20, name: "Toys & Sports", slug: "toys-sports", icon: "gamepad-2" },
  { id: 21, name: "Beauty & Makeup", slug: "beauty-makeup", icon: "sparkles" },
  { id: 22, name: "Fashion & Lifestyle", slug: "fashion-lifestyle", icon: "shirt" },
  { id: 23, name: "Vehicle Essentials", slug: "vehicle-essentials", icon: "car" },
  { id: 24, name: "Premium Care", slug: "premium-care", icon: "shield" },
  { id: 25, name: "Recipes", slug: "recipes", icon: "utensils" },
  { id: 26, name: "Electronics", slug: "electronics", icon: "smartphone" },
]

// Generate more products for each category
export const allProducts = [
  // Food Category
  {
    id: 1,
    name: "Organic Turmeric Root",
    price: 45,
    originalPrice: 55,
    unit: "200 gm",
    image: "/placeholder.svg?height=200&width=200&text=Turmeric",
    category: "food",
    slug: "organic-turmeric-root",
    description:
      "Fresh organic turmeric root with vibrant color and intense flavor. Perfect for curries, teas, and health drinks.",
  },
  {
    id: 2,
    name: "Premium Basmati Rice",
    price: 329,
    originalPrice: 351,
    unit: "5 kg",
    image: "/placeholder.svg?height=200&width=200&text=Basmati+Rice",
    category: "food",
    slug: "premium-basmati-rice",
    description: "Long-grain aromatic rice with a delicate flavor. Ideal for biryanis and pulao.",
  },

  // Fruits Category
  {
    id: 3,
    name: "Organic Apples",
    price: 120,
    unit: "1 kg",
    image: "/placeholder.svg?height=200&width=200&text=Apples",
    category: "fruits",
    slug: "organic-apples",
    description: "Fresh, crisp organic apples. Rich in fiber and antioxidants.",
  },
  {
    id: 4,
    name: "Ripe Bananas",
    price: 60,
    unit: "1 dozen",
    image: "/placeholder.svg?height=200&width=200&text=Bananas",
    category: "fruits",
    slug: "ripe-bananas",
    description: "Sweet, energy-packed bananas. Perfect for smoothies and snacks.",
  },

  // Vegetables Category
  {
    id: 5,
    name: "Fresh Spinach",
    price: 40,
    unit: "250 gm",
    image: "/placeholder.svg?height=200&width=200&text=Spinach",
    category: "vegetables",
    slug: "fresh-spinach",
    description: "Crisp, dark green spinach leaves packed with iron and vitamins.",
  },
  {
    id: 6,
    name: "Organic Tomatoes",
    price: 80,
    unit: "500 gm",
    image: "/placeholder.svg?height=200&width=200&text=Tomatoes",
    category: "vegetables",
    slug: "organic-tomatoes",
    description: "Vine-ripened tomatoes grown without pesticides. Sweet and juicy.",
  },

  // Dairy Category
  {
    id: 7,
    name: "Greek Yogurt",
    price: 130,
    unit: "500 gm",
    image: "/placeholder.svg?height=200&width=200&text=Greek+Yogurt",
    category: "dairy",
    slug: "greek-yogurt",
    description: "Thick, creamy yogurt strained in the traditional Greek method. High in protein.",
  },
  {
    id: 8,
    name: "Free-Range Eggs",
    price: 120,
    unit: "Pack of 12",
    image: "/placeholder.svg?height=200&width=200&text=Eggs",
    category: "dairy",
    slug: "free-range-eggs",
    description: "Farm-fresh eggs from free-range hens fed on organic feed.",
  },

  // Bakery Category
  {
    id: 9,
    name: "Artisanal Bread",
    price: 120,
    originalPrice: 150,
    unit: "400 gm",
    image: "/placeholder.svg?height=200&width=200&text=Bread",
    category: "bakery",
    slug: "artisanal-bread",
    description: "Freshly baked sourdough bread made with organic flour and traditional methods.",
  },
  {
    id: 10,
    name: "Chocolate Croissants",
    price: 180,
    unit: "Pack of 4",
    image: "/placeholder.svg?height=200&width=200&text=Croissants",
    category: "bakery",
    slug: "chocolate-croissants",
    description: "Buttery, flaky croissants filled with rich chocolate. Baked fresh daily.",
  },

  // Meat Category
  {
    id: 11,
    name: "Grass-Fed Beef",
    price: 450,
    unit: "500 gm",
    image: "/placeholder.svg?height=200&width=200&text=Beef",
    category: "meat",
    slug: "grass-fed-beef",
    description: "Premium cuts from grass-fed cattle. Higher in omega-3 fatty acids and vitamins.",
  },
  {
    id: 12,
    name: "Free-Range Chicken",
    price: 320,
    unit: "1 kg",
    image: "/placeholder.svg?height=200&width=200&text=Chicken",
    category: "meat",
    slug: "free-range-chicken",
    description: "Ethically raised chicken with no antibiotics or hormones. Lean and flavorful.",
  },

  // Seafood Category
  {
    id: 13,
    name: "Wild Caught Salmon",
    price: 550,
    unit: "500 gm",
    image: "/placeholder.svg?height=200&width=200&text=Salmon",
    category: "seafood",
    slug: "wild-caught-salmon",
    description: "Premium salmon fillets rich in omega-3 fatty acids and protein.",
  },
  {
    id: 14,
    name: "Fresh Prawns",
    price: 480,
    unit: "500 gm",
    image: "/placeholder.svg?height=200&width=200&text=Prawns",
    category: "seafood",
    slug: "fresh-prawns",
    description: "Succulent, fresh prawns. Perfect for grilling, curries, or pasta dishes.",
  },

  // Grains Category
  {
    id: 15,
    name: "Organic Quinoa",
    price: 280,
    unit: "500 gm",
    image: "/placeholder.svg?height=200&width=200&text=Quinoa",
    category: "grains",
    slug: "organic-quinoa",
    description: "Complete protein grain that's gluten-free and rich in nutrients.",
  },
  {
    id: 16,
    name: "Whole Wheat Pasta",
    price: 95,
    unit: "500 gm",
    image: "/placeholder.svg?height=200&width=200&text=Pasta",
    category: "grains",
    slug: "whole-wheat-pasta",
    description: "Nutritious pasta made from 100% whole wheat flour. High in fiber and protein.",
  },

  // Oils Category
  {
    id: 17,
    name: "Cold-Pressed Olive Oil",
    price: 175,
    unit: "1 ltr",
    image: "/placeholder.svg?height=200&width=200&text=Olive+Oil",
    category: "oils",
    slug: "cold-pressed-olive-oil",
    description:
      "Extra virgin olive oil cold-pressed to preserve nutrients and flavor. Perfect for salads and light cooking.",
  },
  {
    id: 18,
    name: "Organic Coconut Oil",
    price: 320,
    unit: "500 ml",
    image: "/placeholder.svg?height=200&width=200&text=Coconut+Oil",
    category: "oils",
    slug: "organic-coconut-oil",
    description: "Cold-pressed, unrefined coconut oil perfect for cooking and beauty applications.",
  },

  // Spices Category
  {
    id: 19,
    name: "Himalayan Pink Salt",
    price: 120,
    unit: "500 gm",
    image: "/placeholder.svg?height=200&width=200&text=Pink+Salt",
    category: "spices",
    slug: "himalayan-pink-salt",
    description: "Mineral-rich salt mined from ancient sea beds in the Himalayan mountains.",
  },
  {
    id: 20,
    name: "Organic Cinnamon Sticks",
    price: 150,
    unit: "100 gm",
    image: "/placeholder.svg?height=200&width=200&text=Cinnamon",
    category: "spices",
    slug: "organic-cinnamon-sticks",
    description: "Aromatic cinnamon sticks with a sweet, woody flavor. Perfect for teas, desserts, and curries.",
  },

  // Beverages Category
  {
    id: 21,
    name: "Organic Coffee Beans",
    price: 280,
    unit: "250 gm",
    image: "/placeholder.svg?height=200&width=200&text=Coffee",
    category: "beverages",
    slug: "organic-coffee-beans",
    description: "Fair-trade, shade-grown coffee beans with rich, complex flavor notes.",
  },
  {
    id: 22,
    name: "Matcha Green Tea",
    price: 350,
    unit: "100 gm",
    image: "/placeholder.svg?height=200&width=200&text=Matcha",
    category: "beverages",
    slug: "matcha-green-tea",
    description: "Premium grade matcha powder from Japan. Rich in antioxidants and L-theanine.",
  },

  // Snacks Category
  {
    id: 23,
    name: "Dark Chocolate",
    price: 150,
    unit: "100 gm",
    image: "/placeholder.svg?height=200&width=200&text=Chocolate",
    category: "snacks",
    slug: "dark-chocolate",
    description: "72% cocoa dark chocolate made with organic cacao beans and minimal sugar.",
  },
  {
    id: 24,
    name: "Mixed Nuts",
    price: 350,
    unit: "250 gm",
    image: "/placeholder.svg?height=200&width=200&text=Mixed+Nuts",
    category: "snacks",
    slug: "mixed-nuts",
    description: "Premium blend of almonds, cashews, walnuts, and pecans. Roasted and lightly salted.",
  },

  // Cleaning Supplies Category
  {
    id: 25,
    name: "Eco-Friendly Laundry Detergent",
    price: 220,
    unit: "1 ltr",
    image: "/placeholder.svg?height=200&width=200&text=Detergent",
    category: "cleaning-supplies",
    slug: "eco-friendly-laundry-detergent",
    description: "Plant-based, biodegradable laundry detergent that's gentle on clothes and the environment.",
  },
  {
    id: 26,
    name: "Multi-Surface Cleaner",
    price: 180,
    unit: "750 ml",
    image: "/placeholder.svg?height=200&width=200&text=Cleaner",
    category: "cleaning-supplies",
    slug: "multi-surface-cleaner",
    description: "Non-toxic cleaner effective on countertops, glass, and most household surfaces.",
  },

  // Personal Care Category
  {
    id: 27,
    name: "Natural Shampoo",
    price: 250,
    unit: "300 ml",
    image: "/placeholder.svg?height=200&width=200&text=Shampoo",
    category: "personal-care",
    slug: "natural-shampoo",
    description: "Sulfate-free shampoo with botanical extracts for healthy, shiny hair.",
  },
  {
    id: 28,
    name: "Organic Body Wash",
    price: 220,
    unit: "250 ml",
    image: "/placeholder.svg?height=200&width=200&text=Body+Wash",
    category: "personal-care",
    slug: "organic-body-wash",
    description: "Gentle, moisturizing body wash with essential oils and no harsh chemicals.",
  },

  // Health & Wellness Category
  {
    id: 29,
    name: "Vitamin D Supplements",
    price: 380,
    unit: "60 capsules",
    image: "/placeholder.svg?height=200&width=200&text=Vitamin+D",
    category: "health-wellness",
    slug: "vitamin-d-supplements",
    description: "High-potency vitamin D3 supplements for immune support and bone health.",
  },
  {
    id: 30,
    name: "Organic Turmeric Capsules",
    price: 420,
    unit: "90 capsules",
    image: "/placeholder.svg?height=200&width=200&text=Turmeric+Caps",
    category: "health-wellness",
    slug: "organic-turmeric-capsules",
    description: "Anti-inflammatory turmeric supplements with enhanced bioavailability.",
  },

  // Baby Care Category
  {
    id: 31,
    name: "Organic Baby Wipes",
    price: 150,
    unit: "Pack of 80",
    image: "/placeholder.svg?height=200&width=200&text=Baby+Wipes",
    category: "baby-care",
    slug: "organic-baby-wipes",
    description: "Gentle, fragrance-free wipes made with organic cotton and aloe vera.",
  },
  {
    id: 32,
    name: "Natural Baby Lotion",
    price: 180,
    unit: "200 ml",
    image: "/placeholder.svg?height=200&width=200&text=Baby+Lotion",
    category: "baby-care",
    slug: "natural-baby-lotion",
    description: "Hypoallergenic lotion specially formulated for sensitive baby skin.",
  },

  // Home & Kitchen Category
  {
    id: 33,
    name: "Bamboo Cutting Board",
    price: 450,
    unit: "1 piece",
    image: "/placeholder.svg?height=200&width=200&text=Cutting+Board",
    category: "home-kitchen",
    slug: "bamboo-cutting-board",
    description: "Sustainable bamboo cutting board that's gentle on knives and naturally antibacterial.",
  },
  {
    id: 34,
    name: "Stainless Steel Water Bottle",
    price: 350,
    unit: "750 ml",
    image: "/placeholder.svg?height=200&width=200&text=Water+Bottle",
    category: "home-kitchen",
    slug: "stainless-steel-water-bottle",
    description: "Double-walled insulated bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
  },

  // Stationery & Office Category
  {
    id: 35,
    name: "Recycled Notebooks",
    price: 120,
    unit: "Pack of 3",
    image: "/placeholder.svg?height=200&width=200&text=Notebooks",
    category: "stationery-office",
    slug: "recycled-notebooks",
    description: "Eco-friendly notebooks made from 100% post-consumer recycled paper.",
  },
  {
    id: 36,
    name: "Bamboo Pens",
    price: 150,
    unit: "Pack of 5",
    image: "/placeholder.svg?height=200&width=200&text=Pens",
    category: "stationery-office",
    slug: "bamboo-pens",
    description: "Smooth-writing pens with sustainable bamboo barrels and refillable ink.",
  },

  // Pet Care Category
  {
    id: 37,
    name: "Organic Dog Treats",
    price: 180,
    unit: "250 gm",
    image: "/placeholder.svg?height=200&width=200&text=Dog+Treats",
    category: "pet-care",
    slug: "organic-dog-treats",
    description: "Healthy, grain-free treats made with organic ingredients and no artificial additives.",
  },
  {
    id: 38,
    name: "Natural Cat Litter",
    price: 320,
    unit: "5 kg",
    image: "/placeholder.svg?height=200&width=200&text=Cat+Litter",
    category: "pet-care",
    slug: "natural-cat-litter",
    description: "Biodegradable, dust-free litter made from plant materials with excellent odor control.",
  },

  // Toys & Sports Category
  {
    id: 39,
    name: "Wooden Building Blocks",
    price: 450,
    unit: "Set of 50",
    image: "/placeholder.svg?height=200&width=200&text=Building+Blocks",
    category: "toys-sports",
    slug: "wooden-building-blocks",
    description: "Classic wooden blocks made from sustainable forests. Non-toxic finishes safe for children.",
  },
  {
    id: 40,
    name: "Yoga Mat",
    price: 550,
    unit: "1 piece",
    image: "/placeholder.svg?height=200&width=200&text=Yoga+Mat",
    category: "toys-sports",
    slug: "yoga-mat",
    description: "Eco-friendly, non-slip yoga mat made from natural rubber. Free from PVC and harmful chemicals.",
  },

  // Beauty & Makeup Category
  {
    id: 41,
    name: "Organic Lipstick",
    price: 280,
    unit: "1 piece",
    image: "/placeholder.svg?height=200&width=200&text=Lipstick",
    category: "beauty-makeup",
    slug: "organic-lipstick",
    description: "Creamy, long-lasting lipstick made with organic oils and natural pigments.",
  },
  {
    id: 42,
    name: "Natural Face Mask",
    price: 220,
    unit: "100 ml",
    image: "/placeholder.svg?height=200&width=200&text=Face+Mask",
    category: "beauty-makeup",
    slug: "natural-face-mask",
    description: "Hydrating clay mask with botanical extracts to purify and rejuvenate skin.",
  },

  // Fashion & Lifestyle Category
  {
    id: 43,
    name: "Organic Cotton T-Shirt",
    price: 450,
    unit: "1 piece",
    image: "/placeholder.svg?height=200&width=200&text=T-Shirt",
    category: "fashion-lifestyle",
    slug: "organic-cotton-t-shirt",
    description: "Soft, breathable t-shirt made from 100% organic cotton. Fair-trade certified.",
  },
  {
    id: 44,
    name: "Bamboo Socks",
    price: 180,
    unit: "Pack of 3",
    image: "/placeholder.svg?height=200&width=200&text=Socks",
    category: "fashion-lifestyle",
    slug: "bamboo-socks",
    description: "Naturally antibacterial and moisture-wicking socks made from bamboo fiber.",
  },

  // Vehicle Essentials Category
  {
    id: 45,
    name: "Car Air Freshener",
    price: 120,
    unit: "1 piece",
    image: "/placeholder.svg?height=200&width=200&text=Air+Freshener",
    category: "vehicle-essentials",
    slug: "car-air-freshener",
    description: "Natural air freshener with essential oils. No artificial fragrances or chemicals.",
  },
  {
    id: 46,
    name: "Microfiber Cleaning Cloth",
    price: 150,
    unit: "Pack of 5",
    image: "/placeholder.svg?height=200&width=200&text=Cleaning+Cloth",
    category: "vehicle-essentials",
    slug: "microfiber-cleaning-cloth",
    description: "Ultra-soft microfiber cloths for streak-free cleaning of car interiors and exteriors.",
  },

  // Premium Care Category
  {
    id: 47,
    name: "Luxury Hand Cream",
    price: 380,
    unit: "75 ml",
    image: "/placeholder.svg?height=200&width=200&text=Hand+Cream",
    category: "premium-care",
    slug: "luxury-hand-cream",
    description: "Rich, nourishing hand cream with shea butter and essential oils in elegant packaging.",
  },
  {
    id: 48,
    name: "Premium Shaving Kit",
    price: 850,
    unit: "1 set",
    image: "/placeholder.svg?height=200&width=200&text=Shaving+Kit",
    category: "premium-care",
    slug: "premium-shaving-kit",
    description: "Complete shaving set with safety razor, brush, and organic shaving soap in a gift box.",
  },

  // Recipes Category
  {
    id: 49,
    name: "Meal Prep Cookbook",
    price: 350,
    unit: "1 book",
    image: "/placeholder.svg?height=200&width=200&text=Cookbook",
    category: "recipes",
    slug: "meal-prep-cookbook",
    description: "Comprehensive guide to healthy meal preparation with 100+ easy recipes and shopping lists.",
  },
  {
    id: 50,
    name: "Spice Blend Kit",
    price: 420,
    unit: "Set of 6",
    image: "/placeholder.svg?height=200&width=200&text=Spice+Kit",
    category: "recipes",
    slug: "spice-blend-kit",
    description: "Collection of premium spice blends for different cuisines with recipe cards included.",
  },

  // Electronics Category
  {
    id: 51,
    name: "Wireless Earbuds",
    price: 1200,
    originalPrice: 1500,
    unit: "1 pair",
    image: "/placeholder.svg?height=200&width=200&text=Earbuds",
    category: "electronics",
    slug: "wireless-earbuds",
    description: "High-quality wireless earbuds with noise cancellation and long battery life.",
  },
  {
    id: 52,
    name: "Smart Kitchen Scale",
    price: 850,
    unit: "1 piece",
    image: "/placeholder.svg?height=200&width=200&text=Kitchen+Scale",
    category: "electronics",
    slug: "smart-kitchen-scale",
    description: "Digital kitchen scale with nutritional tracking and smartphone connectivity.",
  },
]

export const getProductsByCategory = (category: string) => {
  return allProducts.filter((product) => product.category?.toLowerCase() === category.toLowerCase())
}

export const getProductById = (id: number) => {
  return allProducts.find((product) => product.id === id)
}

export const getProductBySlug = (slug: string) => {
  return allProducts.find((product) => product.slug === slug)
}

export const getRelatedProducts = (categoryOrId: string | number, excludeId?: number) => {
  if (typeof categoryOrId === "string") {
    return allProducts
      .filter((product) => product.category?.toLowerCase() === categoryOrId.toLowerCase() && product.id !== excludeId)
      .slice(0, 4)
  } else {
    const product = getProductById(categoryOrId)
    if (!product) return []

    return allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
  }
}

