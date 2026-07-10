import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

// Blog posts data - replace with real MDX files
const posts: Record<string, any> = {
  'scaling-postgres': {
    title: 'Scaling PostgreSQL: Lessons from 1B+ Rows',
    excerpt: 'Deep dive into horizontal and vertical scaling strategies for PostgreSQL databases handling massive datasets.',
    author: 'Your Name',
    date: '2024-12-15',
    readTime: 12,
    tags: ['Database', 'Performance', 'PostgreSQL'],
    content: `
# Scaling PostgreSQL: Lessons from 1B+ Rows

Building and scaling databases is one of the most critical challenges in modern software engineering. In this article, I'll share lessons from scaling PostgreSQL to handle over 1 billion rows efficiently.

## The Challenge

As your application grows and data accumulates, queries that once ran in milliseconds start taking seconds. At a certain point, traditional vertical scaling (more RAM, bigger CPU) hits diminishing returns.

## Strategy 1: Indexing

The first step is always proper indexing. Most performance issues stem from missing or poorly designed indexes.

\`\`\`sql
-- Good index for filtering
CREATE INDEX idx_users_status_created ON users(status, created_at DESC);

-- Covering index to avoid table lookup
CREATE INDEX idx_orders_user_id_total 
  ON orders(user_id) INCLUDE (total_amount);
\`\`\`

## Strategy 2: Partitioning

For very large tables, partitioning can dramatically improve performance:

\`\`\`sql
-- Range partitioning by date
CREATE TABLE events (
  id BIGINT,
  user_id BIGINT,
  event_type TEXT,
  created_at TIMESTAMP
) PARTITION BY RANGE (YEAR(created_at));

CREATE TABLE events_2024 PARTITION OF events
  FOR VALUES FROM (2024) TO (2025);
\`\`\`

## Strategy 3: Connection Pooling

Never connect directly to PostgreSQL in production. Use a connection pooler like PgBouncer.

## Key Takeaways

1. Measure before optimizing
2. Indexes are your best friend
3. Partitioning is powerful but complex
4. Monitor continuously
5. Plan for growth from the start

The journey to scaling databases is ongoing. What matters most is understanding your data patterns and making informed decisions early.
    `,
  },
  'real-time-sync': {
    title: 'Building Real-time Collaboration at Scale',
    excerpt: 'Exploring operational transformation, CRDTs, and WebSocket strategies for building collaborative tools.',
    author: 'Your Name',
    date: '2024-11-20',
    readTime: 15,
    tags: ['Architecture', 'Real-time', 'WebSockets'],
    content: `
# Building Real-time Collaboration at Scale

Real-time collaboration is increasingly expected in modern applications. This article explores the technical challenges and solutions for building systems where multiple users can edit simultaneously.

## The Fundamental Problem

When multiple users edit the same document simultaneously, conflicts arise:
- User A changes line 5
- User B also changes line 5
- Which version wins?

## Approach 1: Operational Transformation (OT)

Operational Transformation solves this by transforming operations based on concurrent edits. When User A and User B both edit, the system transforms their operations to maintain consistency.

## Approach 2: Conflict-Free Replicated Data Types (CRDTs)

CRDTs are data structures designed for distributed systems. They guarantee consistency without central coordination.

## Implementation Considerations

1. **Latency**: Aim for < 100ms round-trip
2. **Scalability**: Design for thousands of concurrent connections
3. **Persistence**: Ensure durability of all changes
4. **Recovery**: Handle disconnections gracefully

## Best Practices

- Start simple, add complexity only when needed
- Test edge cases thoroughly
- Monitor network conditions
- Implement graceful degradation

Real-time collaboration is achievable with the right architecture and careful implementation.
    `,
  },
  'nextjs-performance': {
    title: 'Next.js Performance: From 5s to 500ms Load Time',
    excerpt: 'Practical techniques for optimizing Next.js applications—bundling, caching, and Core Web Vitals.',
    author: 'Your Name',
    date: '2024-10-10',
    readTime: 10,
    tags: ['Performance', 'Next.js', 'Frontend'],
    content: `
# Next.js Performance: From 5s to 500ms Load Time

Performance is a feature. In this article, I'll walk through concrete techniques that reduced a Next.js application's load time from 5 seconds to 500ms.

## Starting Point

The initial app had several issues:
- Huge JavaScript bundle (450KB)
- No code splitting
- No image optimization
- Missing caching strategies

## Solution 1: Code Splitting

Automatically split code by route using dynamic imports:

\`\`\`tsx
const DynamicComponent = dynamic(() => import('./heavy-component'), {
  loading: () => <p>Loading...</p>,
});
\`\`\`

## Solution 2: Image Optimization

Use Next.js Image component for automatic optimization:

\`\`\`tsx
import Image from 'next/image';

<Image 
  src="/photo.jpg"
  alt="Description"
  width={800}
  height={600}
  priority
/>
\`\`\`

## Solution 3: Caching Strategy

Implement proper caching headers for static and dynamic content.

## Results

- Bundle size: 450KB → 120KB (73% reduction)
- First Contentful Paint: 3.2s → 600ms
- Largest Contentful Paint: 5.1s → 1.2s

Performance improvements compound. Each optimization stacks on top of others.
    `,
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug
  const post = posts[slug]

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default async function BlogPost({ params }: Props) {
  const slug = (await params).slug
  const post = posts[slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 lg:px-8 max-w-3xl mx-auto">
          <p className="text-foreground/70">Post not found.</p>
          <Link href="/blog" className="text-primary hover:opacity-70">
            Back to blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:opacity-70 transition-opacity">
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">{post.title}</h1>
              <p className="text-xl text-foreground/70">{post.excerpt}</p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-foreground/60 pt-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex px-2 py-1 rounded text-xs font-medium text-primary/80 bg-primary/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {/* Simple markdown rendering - in production, use a markdown parser */}
            <div 
              className="space-y-6 text-lg text-foreground/80 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split('\n\n')
                  .map((line: string) => {
                    if (line.startsWith('# ')) {
                      return `<h2 class="text-3xl font-bold mt-8 mb-4">${line.slice(2)}</h2>`;
                    }
                    if (line.startsWith('## ')) {
                      return `<h3 class="text-2xl font-bold mt-6 mb-3">${line.slice(3)}</h3>`;
                    }
                    if (line.startsWith('```')) {
                      return `<pre class="bg-card border border-border rounded-lg p-4 overflow-x-auto my-4"><code class="text-sm text-foreground/80">${line.slice(3, -3)}</code></pre>`;
                    }
                    return `<p>${line}</p>`;
                  })
                  .join('')
              }}
            />
          </div>

          {/* CTA */}
          <div className="space-y-6 py-12 border-t border-border">
            <p className="text-foreground/70">
              Interested in discussing these topics further?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
            >
              Get in touch
            </Link>
          </div>

          {/* Related Posts Suggestion */}
          <div className="space-y-4 py-12 border-t border-border">
            <h3 className="text-xl font-bold">More Articles</h3>
            <p className="text-foreground/70">
              Check out <Link href="/blog" className="text-primary hover:opacity-70">other posts</Link> on the blog.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}
