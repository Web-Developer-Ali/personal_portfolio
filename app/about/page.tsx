import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about my approach to software engineering and product development.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">About Me</h1>
            <p className="text-lg text-foreground/70">
              Building systems that make a difference through thoughtful
              engineering and design.
            </p>
          </div>

          <div className="space-y-8 text-lg text-foreground/80 leading-relaxed prose-invert">
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Philosophy</h2>
              <p>
                I believe in building software that matters. Not just
                technically sound, but software that genuinely solves problems
                and improves people&apos;s lives. Every decision—from
                architecture to pixel placement—should serve this purpose.
              </p>
              <p>
                Throughout my career, I&apos;ve learned that the best outcomes
                come from deep collaboration, clear communication, and an
                unwavering commitment to quality. I take pride in writing code
                that not only works but is a pleasure to maintain and extend.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Experience</h2>
              <p>
                I&apos;ve spent 8+ years building everything from startup MVPs
                to enterprise platforms. I&apos;ve led teams, mentored junior
                developers, and architected systems that scale. But more
                importantly, I&apos;ve learned that technical excellence is just
                the baseline—what truly matters is understanding the business
                context and user needs.
              </p>
              <p>
                My expertise spans full-stack development, system design,
                performance optimization, and product thinking. I&apos;m
                particularly passionate about operational software—tools that
                enable teams to work more effectively and scale their impact.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Approach</h2>
              <p>
                I believe in taking time to understand problems deeply before
                jumping to solutions. This means asking the right questions,
                studying the domain, and considering edge cases from day one.
              </p>
              <p>I&apos;m a strong believer in:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Writing code for humans first, machines second</li>
                <li>Making accessibility and performance non-negotiable</li>
                <li>
                  Building with sustainability and maintainability in mind
                </li>
                <li>Testing thoroughly and measuring what matters</li>
                <li>Collaborating closely with designers and product teams</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Currently</h2>
              <p>
                I&apos;m available for select projects and partnerships where I
                can make a meaningful impact. I&apos;m particularly interested
                in working on problems that require thoughtful engineering,
                where quality matters, and where I can contribute to something
                larger than myself.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Beyond Code
              </h2>
              <p>
                When I&apos;m not building, you&apos;ll find me writing about
                engineering, architecture, and product development. I believe in
                sharing knowledge and helping others grow—whether through
                mentoring, open source contributions, or technical writing.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
