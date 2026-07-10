'use client'

import { motion } from 'framer-motion'
import { itemVariants, containerVariants } from '@/lib/animations'
import { techStack } from '@/lib/config'

export function TechStack() {
  // Group technologies by category
  const grouped = techStack.reduce(
    (acc, tech) => {
      const category = tech.category
      if (!acc[category]) acc[category] = []
      acc[category].push(tech)
      return acc
    },
    {} as Record<string, typeof techStack>
  )

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto border-t border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="space-y-12"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Tech Stack</h2>
          <p className="text-lg text-foreground/70">
            A curated selection of tools and technologies I actively use and have mastered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(grouped).map(([category, techs]) => (
            <motion.div key={category} variants={itemVariants} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
                {category}
              </h3>
              <ul className="space-y-3">
                {techs.map((tech) => (
                  <li
                    key={tech.name}
                    className="text-base text-foreground/80 hover:text-foreground transition-colors cursor-default"
                  >
                    {tech.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
