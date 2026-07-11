"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { itemVariants, containerVariants } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto border-t border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center space-y-8"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto"
        >
          Let&apos;s build something{" "}
          <span className="bg-gradient-to-r from-primary via-cyan to-emerald bg-clip-text text-transparent">
            exceptional
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-foreground/70 max-w-2xl mx-auto"
        >
          I&apos;m always interested in hearing about new projects and
          opportunities. Whether you have a specific project in mind or just
          want to connect, feel free to reach out.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-cyan text-primary-foreground font-medium hover:opacity-90 transition-all hover:gap-3 glow-primary shadow-lg"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:alihamzashoaibahmed@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-primary/40 bg-gradient-to-r from-primary/10 to-cyan/5 text-foreground font-medium hover:from-primary/20 hover:to-cyan/15 hover:border-primary/60 transition-all backdrop-blur-sm"
          >
            alihamzashoaibahmed@gmail.com
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
