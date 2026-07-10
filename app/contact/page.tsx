'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { Mail, Briefcase, GitBranch, Share2 } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

// Note: This is a placeholder. For a real implementation, add form handling
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add form submission logic here
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const socialLinks = [
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
    { icon: GitBranch, href: '#', label: 'GitHub' },
    { icon: Briefcase, href: '#', label: 'LinkedIn' },
    { icon: Share2, href: '#', label: 'Twitter' },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">Get in Touch</h1>
            <p className="text-lg text-foreground/70">
              I&apos;m always interested in hearing about new projects and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Let&apos;s talk</h2>
                <p className="text-foreground/70">
                  Feel free to reach out using any of these methods. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold uppercase tracking-widest text-sm text-foreground/50">
                  Direct Contact
                </h3>
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Email</p>
                  <a
                    href="mailto:contact@example.com"
                    className="text-lg font-medium text-primary hover:opacity-70 transition-opacity"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold uppercase tracking-widest text-sm text-foreground/50">
                  Social
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/30 text-foreground hover:text-primary transition-colors"
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold uppercase tracking-widest text-sm text-foreground/50">
                  Availability
                </h3>
                <p className="text-foreground/70">
                  Available for select full-time roles, consulting projects, and collaborations. Currently booking projects for Q1 2025 onwards.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card hover:border-primary/30 focus:border-primary outline-none transition-colors"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card hover:border-primary/30 focus:border-primary outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card hover:border-primary/30 focus:border-primary outline-none transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </button>
              </form>

              <p className="text-xs text-foreground/50 text-center">
                I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
