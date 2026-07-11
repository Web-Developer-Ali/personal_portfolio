'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { itemVariants, containerVariants } from '@/lib/animations'

const projects = [
  {
    id: 1,
    title: 'Enterprise CRM Platform',
    description: 'Built a comprehensive CRM system handling 50K+ users with real-time collaboration features.',
    tags: ['Next.js', 'PostgreSQL', 'WebSockets'],
    metrics: ['50K+ users', '99.9% uptime', '< 200ms response time'],
    slug: 'crm-platform',
  },
  {
    id: 2,
    title: 'Real-time Analytics Dashboard',
    description: 'Designed and implemented a high-performance analytics dashboard processing millions of events daily.',
    tags: ['React', 'Node.js', 'Redis'],
    metrics: ['1M+ events/day', 'Live dashboards', 'Custom visualizations'],
    slug: 'analytics-dashboard',
  },
  {
    id: 3,
    title: 'AI-Powered Content Platform',
    description: 'Created a platform leveraging generative AI for content creation with seamless UX.',
    tags: ['Next.js', 'OpenAI', 'Stripe'],
    metrics: ['10K+ active users', '$500K ARR', 'Multi-tenant'],
    slug: 'ai-content',
  },
]

export function SelectedWork() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="space-y-16"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Selected Work</h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Showcasing projects that have delivered measurable impact and technical excellence.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              <Link
                href={`/case-studies/${project.slug}`}
                className="block p-6 md:p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-primary/15 hover:to-cyan/10 transition-all duration-300 backdrop-blur-sm hover:border-primary/40 hover:shadow-xl hover:premium-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-foreground/70 mt-2">{project.description}</p>
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-foreground/40 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      {project.metrics.map((metric) => (
                        <div key={metric} className="text-sm font-medium text-primary">
                          {metric}
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-cyan/10 text-sm font-medium text-foreground border border-primary/30 hover:border-primary/50 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div variants={itemVariants}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 bg-gradient-to-r from-primary/10 to-cyan/5 text-foreground font-medium hover:from-primary/20 hover:to-cyan/15 hover:border-primary/60 transition-all backdrop-blur-sm"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
