'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Search } from 'lucide-react'

const products = [
  { id: 1, name: "Stylish Backpack", price: 79.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Wireless Earbuds", price: 129.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Smart Watch", price: 199.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Portable Charger", price: 49.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "Bluetooth Speaker", price: 89.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: "Laptop Stand", price: 39.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 7, name: "Wireless Mouse", price: 29.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 8, name: "Phone Case", price: 19.99, image: "/placeholder.svg?height=200&width=200" },
]

export function Products() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">TechStore</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/products">
            Products
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Our Products
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover our wide range of tech products and accessories.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Search products" type="search" />
                  <Button type="submit" variant="outline">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {products.map((product) => (
                <div key={product.id} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
                  <img
                    alt={product.name}
                    className="object-cover w-full h-60"
                    height="300"
                    src={product.image}
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                    <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                    <p className="text-sm text-gray-300">${product.price.toFixed(2)}</p>
                    <Button className="mt-2" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 TechStore. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}