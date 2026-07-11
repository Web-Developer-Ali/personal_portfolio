"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity group flex-shrink-0"
          >
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-cyan/20 border border-primary/30 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.webp"
                alt="AH Logo"
                width={32}
                height={32}
                className="w-6 h-6 object-contain"
                priority
              />
            </div>
            <span className="whitespace-nowrap text-sm sm:text-base font-semibold bg-gradient-to-r from-foreground via-primary/80 to-cyan/80 bg-clip-text text-transparent group-hover:via-primary group-hover:to-cyan transition-all">
              Ali Hamza
            </span>
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeLink"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-cyan to-primary"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
