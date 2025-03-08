'use client'

import { motion } from 'framer-motion'
import { Code, Palette, ShoppingBag, Smartphone } from 'lucide-react'
import { Card } from '@/components/ui/card'

const services = [
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: "Web Development",
    description: "Custom websites built with modern technologies and best practices."
  },
  {
    icon: <Palette className="h-12 w-12 text-primary" />,
    title: "UI/UX Design",
    description: "Beautiful and intuitive interfaces that users love."
  },
  {
    icon: <ShoppingBag className="h-12 w-12 text-primary" />,
    title: "E-commerce",
    description: "Online stores that drive sales and growth."
  },
  {
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications."
  }
]

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-16 md:py-24 lg:py-28 overflow-hidden">
        <div className="container px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          >
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground">
              We offer a comprehensive range of digital services to help your business thrive online.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="rounded-xl border text-card-foreground shadow">
                <div className="p-6 pt-6">
                  {service.icon}
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 sm:px-6">
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let's work together to create something amazing. Contact us today to discuss your project.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-10 rounded-md px-8"
            >
              Get in Touch
            </motion.a>
          </div>
        </div>
      </section>
    </>
  )
}