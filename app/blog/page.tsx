import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Calendar } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Engineering insights, technical deep dives, and thoughts on building great software.',
}

const posts = [
  {
    slug: 'scaling-postgres',
    title: 'Scaling PostgreSQL: Lessons from 1B+ Rows',
    excerpt: 'Deep dive into horizontal and vertical scaling strategies for PostgreSQL databases handling massive datasets.',
    date: '2024-12-15',
    readTime: '12 min read',
    tags: ['Database', 'Performance', 'PostgreSQL'],
  },
  {
    slug: 'real-time-sync',
    title: 'Building Real-time Collaboration at Scale',
    excerpt: 'Exploring operational transformation, CRDTs, and WebSocket strategies for building collaborative tools.',
    date: '2024-11-20',
    readTime: '15 min read',
    tags: ['Architecture', 'Real-time', 'WebSockets'],
  },
  {
    slug: 'nextjs-performance',
    title: 'Next.js Performance: From 5s to 500ms Load Time',
    excerpt: 'Practical techniques for optimizing Next.js applications—bundling, caching, and Core Web Vitals.',
    date: '2024-10-10',
    readTime: '10 min read',
    tags: ['Performance', 'Next.js', 'Frontend'],
  },
  {
    slug: 'api-design',
    title: 'Designing APIs for Developer Experience',
    excerpt: 'Principles for building intuitive, well-documented APIs that scale with your product.',
    date: '2024-09-05',
    readTime: '8 min read',
    tags: ['API Design', 'Backend'],
  },
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">Engineering Blog</h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Thoughts on building great software, system design, and the craft of engineering.
            </p>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-6 md:p-8 rounded-xl border border-border hover:border-primary/30 bg-card/50 hover:bg-card transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-foreground/70 mt-2">{post.excerpt}</p>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-foreground/40 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <span className="text-sm text-foreground/60">{post.readTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex px-2 py-1 rounded text-xs font-medium text-primary/80 bg-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
