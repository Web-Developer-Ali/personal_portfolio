"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerContainer, itemVariants } from "@/lib/animations";
import { GradientText } from "@/components/ui/gradient-text";

const TECHNOLOGIES = [
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Supabase",
  "REST API",
];

const STATS = [
  { value: "3+", label: "Systems deployed" },
  { value: "Live", label: "Demo available" },
  { value: "Next.js", label: "Primary stack" },
];

export function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Availability badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center md:justify-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald/40 bg-gradient-to-r from-emerald/15 to-cyan/15 hover:from-emerald/25 hover:to-cyan/25 transition-all glow-accent">
            <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-sm text-foreground/90">
              Available for new projects
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants} className="space-y-5">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            I build <GradientText>custom CRM</GradientText> systems for
            performance marketing agencies
          </h1>
          <p className="text-lg md:text-xl text-foreground/65 max-w-2xl leading-relaxed">
            If your agency is tracking deals in spreadsheets and getting
            pipeline updates on WhatsApp. I build the system that replaces all
            of that. Role-based dashboards for every level of your team, built
            on Next.js and PostgreSQL.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 pt-2"
        >
          <Link
            href="/case-studies/scalesflow-sales-platform"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-cyan text-primary-foreground font-semibold hover:opacity-90 transition-all hover:gap-3 glow-primary shadow-lg"
          >
            See Scales Flow
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-primary/40 bg-white/5 text-foreground font-medium hover:bg-white/10 hover:border-primary/60 transition-all backdrop-blur-sm"
          >
            Book a 15-min call
          </Link>
        </motion.div>

        {/* Tech stack */}
        <motion.div variants={itemVariants} className="pt-6 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-foreground/40">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {TECHNOLOGIES.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08 }}
              >
                <span className="inline-flex px-3 py-1.5 rounded-lg bg-gradient-to-br from-white/10 to-white/5 text-sm font-medium text-foreground/80 border border-white/12 hover:border-primary/40 hover:from-primary/12 hover:to-primary/8 transition-all backdrop-blur-sm">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Honest stats — no fake numbers */}
        <motion.div
          variants={itemVariants}
          className="pt-10 grid grid-cols-3 gap-6 border-t border-border"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-foreground/55 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
