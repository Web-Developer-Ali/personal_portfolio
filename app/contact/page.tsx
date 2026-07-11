"use client";

import { useState } from "react";
import { Mail, Briefcase, GitBranch, Share2, Loader } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to send message");
        setLoading(false);
        return;
      }

      setSuccessMessage(
        "Message sent successfully! I will get back to you soon.",
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitted(false);
        setSuccessMessage("");
      }, 5000);
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Contact form error:", err);
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:alihamzashoaibahmed@gmail.com",
      label: "Email",
    },
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
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">Get in Touch</h1>
            <p className="text-lg text-foreground/70">
              I&apos;m always interested in hearing about new projects and
              opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Let&apos;s talk</h2>
                <p className="text-foreground/70">
                  Feel free to reach out using any of these methods. I typically
                  respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold uppercase tracking-widest text-sm text-foreground/50">
                  Direct Contact
                </h3>
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Email</p>
                  <a
                    href="mailto:alihamzashoaibahmed@gmail.com"
                    className="text-lg font-medium text-primary hover:opacity-70 transition-opacity"
                  >
                    alihamzashoaibahmed@gmail.com
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
                  Available for select full-time roles, consulting projects, and
                  collaborations. Currently booking projects for Q1 2025
                  onwards.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
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
                  disabled={loading}
                  className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : submitted ? (
                    "Message Sent!"
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>

              {error && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  {error}
                </div>
              )}

              {successMessage && (
                <div className="p-4 rounded-lg bg-emerald/10 border border-emerald/30 text-emerald-400 text-sm">
                  {successMessage}
                </div>
              )}

              <p className="text-xs text-foreground/50 text-center">
                I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
