'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'

export function About() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About TechStore
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover our story and mission to provide the best tech products for our customers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  At TechStore, our mission is to provide high-quality tech products that enhance our customers' lives.
                  We strive to offer a curated selection of innovative gadgets and accessories, coupled with exceptional
                  customer service.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Founded in 2010, TechStore began as a small online retailer with a passion for technology. Over the
                  years, we've grown into a trusted destination for tech enthusiasts, always staying at the forefront of
                  the latest innovations in the industry.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <ShoppingCart className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Quality Products</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  We carefully select each product to ensure the highest quality for our customers.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <ShoppingCart className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Customer Satisfaction</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Our customers' satisfaction is our top priority, and we strive to exceed expectations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <ShoppingCart className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  We're always on the lookout for the latest tech innovations to bring to our customers.
                </p>
              </div>
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