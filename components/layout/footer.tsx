"use client";

import Link from "next/link";
import { GitBranch, Briefcase, Share2, Mail, Download } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: GitBranch,
      href: "https://github.com/Web-Developer-Ali",
      label: "GitHub",
    },
    {
      icon: Briefcase,
      href: "https://www.linkedin.com/in/ali-hamza-shoaib",
      label: "LinkedIn",
    },
    { icon: Share2, href: "https://x.com/AliHamzaShoaib", label: "Twitter" },
    {
      icon: Mail,
      href: "mailto:alihamzashoaibahmed@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent mt-32 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/work", label: "Work" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">
              Social
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-2"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">
              Info
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/Ali_Hamza_Resume.pdf"
                  download="Ali_Hamza_Resume.pdf"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">
              Tech
            </h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Next.js 16</li>
              <li>React 19</li>
              <li>Tailwind CSS</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50">
            &copy; {currentYear} Premium Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-foreground/50">
            Crafted with precision and attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
}
