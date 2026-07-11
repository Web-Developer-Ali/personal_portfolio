"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { itemVariants, containerVariants } from "@/lib/animations";

const projects = [
  {
    id: 1,
    title: "Scales Flow",
    description:
      "A role-based CRM built for performance marketing agencies that have outgrown spreadsheets. Real-time pipeline visibility, team oversight, and clean data scoping.",
    tags: ["Next.js", "PostgreSQL", "Role-based auth"],
    metrics: [
      "Multi-tenant architecture",
      "Real-time pipeline",
      "Three-role system",
    ],
    slug: "scales-flow",
    liveUrl: "https://scales-flow.vercel.app",
  },
  {
    id: 2,
    title: "WorkSpan",
    description:
      "A unified workspace for distributed teams combining project management, communication, and documentation. Async-first design eliminates tool sprawl.",
    tags: ["Next.js", "WebSockets", "PostgreSQL"],
    metrics: ["Unified workspace", "Async-first", "Permission engine"],
    slug: "workspan",
    liveUrl: "https://workspan.io/",
  },
];

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
            Showcasing projects that have delivered measurable impact and
            technical excellence.
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
              <div className="block p-6 md:p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-primary/15 hover:to-cyan/10 transition-all duration-300 backdrop-blur-sm hover:border-primary/40">
                <div className="flex flex-col gap-6">
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-foreground/70 mt-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="text-sm font-medium text-primary"
                        >
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

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                    <Link
                      href={`/case-studies/${project.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-primary/40 bg-gradient-to-r from-primary/10 to-cyan/5 text-foreground font-medium hover:from-primary/20 hover:to-cyan/15 hover:border-primary/60 transition-all backdrop-blur-sm"
                    >
                      View Case Study
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-cyan text-primary-foreground font-medium hover:opacity-90 transition-all glow-primary shadow-lg"
                    >
                      View Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
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
  );
}
