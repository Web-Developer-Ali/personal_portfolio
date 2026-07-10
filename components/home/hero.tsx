"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerContainer, itemVariants } from "@/lib/animations";
import { GradientText } from "@/components/ui/gradient-text";

export function Hero() {
  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
  ];

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Availability Badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center md:justify-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald/40 bg-gradient-to-r from-emerald/15 to-cyan/15 hover:from-emerald/25 hover:to-cyan/25 transition-all glow-accent">
            <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-sm text-foreground/90">
              Available for select projects
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            I build custom CRM and{" "}
            <GradientText>operations systems</GradientText> for performance
            marketing agencies
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            If your agency is tracking deals in spreadsheets and getting updates
            on WhatsApp, I build the system that replaces all of that —
            role-based dashboards for every level of your team.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-cyan text-primary-foreground font-medium hover:opacity-90 transition-all hover:gap-3 glow-primary shadow-lg"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-primary/40 bg-white/5 text-foreground font-medium hover:bg-white/10 hover:border-primary/60 transition-all backdrop-blur-sm"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="pt-8 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
            Technologies I work with
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="inline-flex px-3 py-1.5 rounded-lg bg-gradient-to-br from-white/10 to-white/5 text-sm font-medium text-foreground/90 border border-white/15 hover:border-primary/40 hover:from-primary/15 hover:to-primary/10 transition-all backdrop-blur-sm">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Credibility Section */}
        <motion.div
          variants={itemVariants}
          className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-8"
        >
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary">4+</p>
            <p className="text-sm text-foreground/70">Systems deployed</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary">Live</p>
            <p className="text-sm text-foreground/70">Demo available</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary">
              Next.js
            </p>
            <p className="text-sm text-foreground/70">Primary stack</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary">
              PostgreSQL
            </p>
            <p className="text-sm text-foreground/70">Database layer</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
