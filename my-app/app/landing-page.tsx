'use client'

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Search, Menu, X, Facebook, Twitter, Instagram } from 'lucide-react'
import { Products } from "./products"

const products = [
  { id: 1, name: "Stylish Backpack", price: 79.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Wireless Earbuds", price: 129.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Smart Watch", price: 199.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Portable Charger", price: 49.99, image: "/placeholder.svg?height=200&width=200" },
]

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
          <Link className="flex items-center space-x-2" href="/">
            <ShoppingCart className="w-6 h-6" />
            <span className="text-xl font-bold">TechStore</span>
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link className="text-sm font-medium transition-colors hover:text-primary" href="/">
              Home
            </Link>
            <Link className="text-sm font-medium transition-colors hover:text-primary" href="/products">
              Products
            </Link>
            <Link className="text-sm font-medium transition-colors hover:text-primary" href="/about">
              About
            </Link>
            <Link className="text-sm font-medium transition-colors hover:text-primary" href="/contact">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <form className="hidden sm:flex">
              <Input
                className="w-[200px] sm:w-[300px]"
                placeholder="Search products..."
                type="search"
              />
            </form>
            <Button size="icon" variant="ghost">
              <Search className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button size="icon" variant="ghost">
              <ShoppingCart className="w-5 h-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button className="md:hidden" size="icon" variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex flex-col items-center justify-center h-full space-y-6">
            <Link className="text-2xl font-medium" href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link className="text-2xl font-medium" href="/products" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link className="text-2xl font-medium" href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link className="text-2xl font-medium" href="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Button size="icon" variant="ghost" onClick={() => setIsMenuOpen(false)}>
              <X className="w-8 h-8" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to TechStore
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Discover the latest tech gadgets and accessories for your digital lifestyle.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Shop Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Newsletter</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Stay updated with our latest products and exclusive offers.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Shop</h3>
              <ul className="space-y-1">
                <li><Link className="hover:underline" href="/products">All Products</Link></li>
                <li><Link className="hover:underline" href="/featured">Featured</Link></li>
                <li><Link className="hover:underline" href="/new-arrivals">New Arrivals</Link></li>
                <li><Link className="hover:underline" href="/sale">Sale</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">About</h3>
              <ul className="space-y-1">
                <li><Link className="hover:underline" href="/about">Our Story</Link></li>
                <li><Link className="hover:underline" href="/careers">Careers</Link></li>
                <li><Link className="hover:underline" href="/press">Press</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="space-y-1">
                <li><Link className="hover:underline" href="/faq">FAQ</Link></li>
                <li><Link className="hover:underline" href="/shipping">Shipping</Link></li>
                <li><Link className="hover:underline" href="/returns">Returns</Link></li>
                <li><Link className="hover:underline" href="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-gray-300">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center">
            <p className="text-sm">© 2024 TechStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}