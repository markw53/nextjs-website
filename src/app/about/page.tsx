'use client'

import { motion } from 'framer-motion'
import { Users, Lightbulb, Rocket, Heart } from 'lucide-react'
import { Card } from '@/components/ui/card'

const values = [
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: 'Client-Focused',
    description: 'We put our clients first, ensuring their needs and goals drive every decision.'
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-primary" />,
    title: 'Innovation',
    description: 'We stay at the forefront of technology to deliver cutting-edge solutions.'
  },
  {
    icon: <Rocket className="h-12 w-12 text-primary" />,
    title: 'Excellence',
    description: 'We strive for excellence in every project we undertake.'
  },
  {
    icon: <Heart className="h-12 w-12 text-primary" />,
    title: 'Passion',
    description: 'We are passionate about creating solutions that make a difference.'
  }
]

const team = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: '/team/john-doe.jpg'
  },
  {
    name: 'Jane Smith',
    role: 'Lead Developer',
    image: '/team/jane-smith.jpg'
  },
  {
    name: 'Mike Johnson',
    role: 'UI/UX Designer',
    image: '/team/mike-johnson.jpg'
  }
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-28 overflow-hidden">
        <div className="container px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground">
              We're a team of passionate developers, designers, and digital experts
              dedicated to creating exceptional web experiences.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the people who make it all happen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 sm:px-6">
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how we can help bring your ideas to life.
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
    </div>
  )
}