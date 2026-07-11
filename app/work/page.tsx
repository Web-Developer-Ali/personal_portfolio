import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and case studies showcasing my work.",
};

const projects = [
  {
    id: 1,
    title: "Scales Flow",
    description:
      "A role-based CRM built for performance marketing agencies that have outgrown spreadsheets. Real-time pipeline visibility, team oversight, and clean data scoping.",
    tags: ["Next.js", "PostgreSQL", "Role-based auth"],
    metrics: [
      "Multi-tenant architecture",
      "Real-time pipeline",
      "Three-role system",
    ],
    slug: "scales-flow",
    liveUrl: "https://scales-flow.vercel.app",
  },
  {
    id: 2,
    title: "WorkSpan",
    description:
      "A unified workspace for distributed teams combining project management, communication, and documentation. Async-first design eliminates tool sprawl.",
    tags: ["Next.js", "WebSockets", "PostgreSQL"],
    metrics: ["Unified workspace", "Async-first", "Permission engine"],
    slug: "workspan",
    liveUrl: "https://workspan.io/",
  },
  {
    id: 3,
    title: "SkillSphere",
    description:
      "A modern learning management system bringing structure to online education. Secure video streaming, progress tracking, and rich content support for students and instructors.",
    tags: ["Next.js", "Azure Blob Storage", "HLS Streaming"],
    metrics: ["Video transcoding", "Progress tracking", "Rich content support"],
    slug: "skillsphere",
    liveUrl: "https://skillsphere-lms-pied.vercel.app",
  },
  {
    id: 4,
    title: "JobPortal",
    description:
      "A modern job platform connecting top talent with meaningful opportunities through smart matching, direct communication, and transparent application tracking.",
    tags: ["Next.js", "PostgreSQL", "Real-time messaging"],
    metrics: [
      "Smart matching algorithm",
      "Direct communication",
      "Application tracking",
    ],
    slug: "jobord",
    liveUrl: "https://job-board-application-two.vercel.app/",
  },
  ,
];

export default function Work() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">My Work</h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              A selection of projects that showcase my expertise in building
              scalable, performant systems.
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project?.id}
                className="group p-6 md:p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-primary/15 hover:to-cyan/10 transition-all duration-300 backdrop-blur-sm hover:border-primary/40"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {project?.title}
                        </h3>
                        <p className="text-foreground/70 mt-2">
                          {project?.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      {project?.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="text-sm font-medium text-primary"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project?.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-cyan/10 text-sm font-medium text-foreground border border-primary/30 hover:border-primary/50 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                    <Link
                      href={`/case-studies/${project?.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-primary/40 bg-gradient-to-r from-primary/10 to-cyan/5 text-foreground font-medium hover:from-primary/20 hover:to-cyan/15 hover:border-primary/60 transition-all backdrop-blur-sm"
                    >
                      View Case Study
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={project?.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-cyan text-primary-foreground font-medium hover:opacity-90 transition-all glow-primary shadow-lg"
                    >
                      View Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
