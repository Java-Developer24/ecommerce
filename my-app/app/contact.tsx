'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ShoppingCart, Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
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
                  Contact Us
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We're here to help. Reach out to us for any questions or concerns.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Email" type="email" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>support@techstore.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>123 Tech Street, San Francisco, CA 94105</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Business Hours</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Monday - Friday: 9am - 5pm<br />
                    Saturday: 10am - 4pm<br />
                    Sunday: Closed
                  </p>
                </div>
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