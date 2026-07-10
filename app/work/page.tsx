import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
  },
  {
    id: 2,
    title: "WorkSpan",
    description:
      "A unified workspace for distributed teams combining project management, communication, and documentation. Async-first design eliminates tool sprawl.",
    tags: ["Next.js", "WebSockets", "PostgreSQL"],
    metrics: ["Unified workspace", "Async-first", "Permission engine"],
    slug: "workspan",
  },
  {
    id: 3,
    title: "SkillSphere",
    description:
      "A modern learning management system bringing structure to online education. Secure video streaming, progress tracking, and rich content support for students and instructors.",
    tags: ["Next.js", "Azure Blob Storage", "HLS Streaming"],
    metrics: ["Video transcoding", "Progress tracking", "Rich content support"],
    slug: "skillsphere",
  },
  {
    id: 4,
    title: "JobOrd",
    description:
      "A modern job platform connecting top talent with meaningful opportunities through smart matching, direct communication, and transparent application tracking.",
    tags: ["Next.js", "PostgreSQL", "Real-time messaging"],
    metrics: [
      "Smart matching algorithm",
      "Direct communication",
      "Application tracking",
    ],
    slug: "jobord",
  },
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
              <Link
                key={project.id}
                href={`/case-studies/${project.slug}`}
                className="group block p-6 md:p-8 rounded-xl border border-border hover:border-primary/30 bg-card/50 hover:bg-card transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-foreground/70 mt-2">
                          {project.description}
                        </p>
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-foreground/40 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="text-sm font-medium text-primary"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
