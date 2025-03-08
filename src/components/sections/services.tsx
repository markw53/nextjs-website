'use client'

import { motion } from 'framer-motion'
import { Code, Palette, ShoppingBag, Smartphone } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: <Code className="h-12 w-12 text-primary mb-4" />,
    title: "Web Development",
    description: "Custom websites built with modern technologies and best practices."
  },
  {
    icon: <Palette className="h-12 w-12 text-primary mb-4" />,
    title: "UI/UX Design",
    description: "Beautiful and intuitive interfaces that users love."
  },
  {
    icon: <ShoppingBag className="h-12 w-12 text-primary mb-4" />,
    title: "E-commerce",
    description: "Online stores that drive sales and growth."
  },
  {
    icon: <Smartphone className="h-12 w-12 text-primary mb-4" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications."
  }
]

const ServiceCard = ({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) => (
  <Card className="rounded-xl border text-card-foreground shadow">
    <div className="p-6 pt-6">
      {icon}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </Card>
)

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            We offer a comprehensive range of digital services to help your business thrive online.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="/services">View All Services</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}