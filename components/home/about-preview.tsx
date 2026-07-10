'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { itemVariants, containerVariants } from '@/lib/animations'

export function AboutPreview() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto border-t border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="space-y-8"
      >
        <div className="max-w-3xl space-y-6">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold">
            How I Think
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-4 text-lg text-foreground/70 leading-relaxed">
            <p>
              I believe great software is built at the intersection of technical excellence and deep business understanding. Every line of code should serve a purpose, every design decision should improve the user experience, and every system should be built for scale and maintainability.
            </p>
            <p>
              Over the years, I&apos;ve learned that the most impactful work happens when we slow down to understand the problem deeply, before rushing to solutions. This philosophy guides my approach to every project.
            </p>
            <p>
              I&apos;m particularly passionate about building operational software—systems that enable teams to work more effectively, make better decisions, and scale their impact without proportional increases in complexity.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:gap-3"
            >
              Read Full Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
