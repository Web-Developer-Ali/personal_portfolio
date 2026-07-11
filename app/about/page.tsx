import type { Metadata } from "next";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { itemVariants, containerVariants } from "@/lib/animations";

export const metadata: Metadata = {
  title: "About Ali Hamza | CRM Developer & Full-Stack Engineer",
  description:
    "Full-stack developer with expertise in CRM tools, MERN stack, and Next.js. Learn about my skills, experience, and approach to building scalable SaaS platforms.",
};

export default function About() {
  const skills = {
    languages: ["JavaScript (ES6+)", "TypeScript", "SQL"],
    frontend: ["React.js", "Next.js", "HTML5", "CSS3", "TailwindCSS"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    database: ["PostgreSQL", "MongoDB", "Supabase"],
    tools: ["Git", "GitHub", "Postman", "VSCode", "Vercel", "Azure"],
  };

  const experience = [
    {
      role: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      duration: "2025 – Present",
      highlights: [
        "Developing modern, production-grade web applications using MERN stack and Next.js",
        "Building responsive dashboards, authentication systems, and RESTful APIs",
        "Designing and optimizing scalable PostgreSQL and MongoDB database schemas",
        "Deploying and maintaining applications on modern cloud platforms (Vercel, Azure)",
      ],
    },
  ];

  const projects = [
    {
      title: "CRM for Marketing Agencies",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "NextAuth"],
      description:
        "Built a production-ready CRM featuring authentication, pipeline management, dashboards, and client management. Designed a scalable PostgreSQL database architecture with role-based workflows and responsive UI.",
    },
    {
      title: "WorkSpan.io - Agency Workspace (SaaS)",
      tech: ["Next.js", "TypeScript", "NextAuth", "PostgreSQL", "Tailwind CSS"],
      description:
        "Built a SaaS platform streamlining communication between agencies, freelancers, and clients. Developed modules for client onboarding, project collaboration, feedback management, and live chat with role-based access control.",
    },
    {
      title: "Job Portal",
      tech: ["MongoDB", "Next.js"],
      description:
        "Built a full-stack recruitment platform with authentication, job posting, search, and application management.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">Ali Hamza</h1>
              <p className="text-xl text-foreground/80">
                Full-Stack Developer | CRM Tool Specialist | MERN & Next.js
              </p>
              <p className="text-lg text-foreground/70">
                Building scalable solutions for marketing agencies and SaaS
                platforms with a focus on clean code and user experience.
              </p>
            </div>
            <a
              href="/Ali_Hamza_Resume.pdf"
              download="Ali_Hamza_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-cyan text-primary-foreground font-medium hover:opacity-90 transition-all glow-primary shadow-lg w-fit"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          {/* Technical Skills */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <h2 className="text-3xl font-bold text-foreground">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-gradient-to-r from-primary/20 to-cyan/10 text-sm text-foreground border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-gradient-to-r from-primary/20 to-cyan/10 text-sm text-foreground border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Backend & Database
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-gradient-to-r from-primary/20 to-cyan/10 text-sm text-foreground border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                    {skills.database.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-gradient-to-r from-primary/20 to-cyan/10 text-sm text-foreground border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Tools & Cloud
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-gradient-to-r from-primary/20 to-cyan/10 text-sm text-foreground border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <h2 className="text-3xl font-bold text-foreground">
              Professional Experience
            </h2>
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="space-y-3 pb-8 border-b border-white/10 last:border-b-0"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-foreground/70">{exp.company}</p>
                  </div>
                  <span className="text-sm text-foreground/60">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-foreground/80 flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Notable Projects */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <h2 className="text-3xl font-bold text-foreground">
              Notable Projects
            </h2>
            <div className="space-y-4">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] space-y-3"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs bg-white/5 text-foreground/70 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

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
              <h2 className="text-3xl font-bold text-foreground">My Journey</h2>
              <p>
                I specialize in building CRM tools and SaaS platforms that help
                marketing agencies and businesses scale. Currently pursuing a
                Bachelor&apos;s degree in Computer Science at the University of
                Lahore (Expected Spring 2028), I bring hands-on experience in
                full-stack development with modern technologies.
              </p>
              <p>
                My expertise spans the entire MERN stack and Next.js ecosystem,
                with deep experience in building scalable databases, REST APIs,
                and responsive user interfaces. I&apos;m particularly passionate
                about creating tools that enable teams to work more effectively
                and make data-driven decisions.
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
