import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Case study data
const caseStudies: Record<string, any> = {
  "scales-flow": {
    title: "Scales Flow — CRM Case Study",
    badge: "Product case study",
    status: "Live MVP",
    hero: "A CRM built for performance marketing agencies that have outgrown spreadsheets",
    heroDescription:
      "Most 10–30 person marketing agencies track deals in Google Sheets, send updates on WhatsApp, and give their admin zero real-time visibility. Scales Flow was built to fix exactly that.",
    meta: [
      ["Role", "Full-stack developer"],
      ["Stack", "Next.js + PostgreSQL"],
      ["Deployed on", "AWS S3"],
      ["Target user", "Performance marketing agencies"],
    ],
    problems: [
      {
        title: "No shared pipeline",
        body: "Each rep keeps their own spreadsheet. The manager has no live view of what's moving or stalling.",
        icon: "📊",
      },
      {
        title: "Zero visibility for the admin",
        body: "The agency owner finds out about lost deals in the weekly meeting — not when it happens.",
        icon: "👁️",
      },
      {
        title: "Updates lost in WhatsApp",
        body: "Deal updates live in chat threads. No audit trail, no accountability, no single source of truth.",
        icon: "💬",
      },
    ],
    roles: [
      {
        label: "Admin",
        color: "text-violet-400",
        border: "border-violet-500/25",
        bg: "bg-violet-500/8",
        title: "Full agency view",
        features: [
          "All deals across the entire team",
          "Team performance dashboard",
          "Create, block, and manage users",
          "Revenue pipeline metrics",
        ],
      },
      {
        label: "Manager",
        color: "text-blue-400",
        border: "border-blue-500/25",
        bg: "bg-blue-500/8",
        title: "Team oversight",
        features: [
          "Every rep's deal pipeline",
          "Rep-level performance view",
          "Recent team activity feed",
          "Deals needing attention",
        ],
      },
      {
        label: "Sales rep",
        color: "text-emerald-400",
        border: "border-emerald-500/25",
        bg: "bg-emerald-500/8",
        title: "Personal pipeline",
        features: [
          "Own deals only — no clutter",
          "Stage-by-stage breakdown",
          "6-month performance trend",
          "Add and edit deals",
        ],
      },
    ],
    pipelineStages: [
      {
        label: "Prospect",
        style: "bg-blue-500/15 text-blue-400 border-blue-500/30",
      },
      { label: "Qualified", style: "bg-white/5 text-white/50 border-white/10" },
      { label: "Proposal", style: "bg-white/5 text-white/50 border-white/10" },
      {
        label: "Negotiation",
        style: "bg-white/5 text-white/50 border-white/10",
      },
      {
        label: "Closed won",
        style: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      },
    ],
    capabilities: [
      {
        title: "Live pipeline visibility",
        body: "The admin knows deal status at any moment — without asking anyone.",
        icon: "🔍",
      },
      {
        title: "Manager oversight without micromanaging",
        body: "Managers see every rep's pipeline in one view. Reps work independently.",
        icon: "👥",
      },
      {
        title: "Clean, scoped data",
        body: "Sales reps only see their own deals. No cross-team exposure, no noise.",
        icon: "🔒",
      },
    ],
    stack: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "NextAuth",
      "REST API",
      "Role-based auth",
      "Vercel",
    ],
  },
  skillsphere: {
    title: "SkillSphere — Learning Management System",
    badge: "Product case study",
    status: "MVP Complete",
    hero: "Building a modern LMS that brings structure to online education",
    heroDescription:
      "SkillSphere solves the core problem facing online educators: students need a structured learning environment with progress tracking, engagement tools, and secure content delivery. We built a platform that makes it simple for instructors to create courses and for students to learn at their own pace.",
    meta: [
      ["Role", "Full-stack developer"],
      ["Stack", "Next.js + PostgreSQL"],
      ["Storage", "Azure Blob Storage"],
      ["Target user", "Online educators and learners"],
    ],
    problems: [
      {
        title: "Fragmented learning experience",
        body: "Students juggle multiple platforms—videos on YouTube, materials on Google Drive, quizzes scattered elsewhere.",
        icon: "📚",
      },
      {
        title: "No progress visibility",
        body: "Instructors can't see who's watching, who's stuck, or what needs clarification without manual follow-ups.",
        icon: "📈",
      },
      {
        title: "Video delivery at scale is complex",
        body: "Streaming large video files reliably requires transcoding, adaptive bitrate, and secure delivery infrastructure.",
        icon: "🎬",
      },
    ],
    roles: [
      {
        label: "Student",
        color: "text-blue-400",
        border: "border-blue-500/25",
        bg: "bg-blue-500/8",
        title: "Self-paced learning",
        features: [
          "Watch course videos with playback controls",
          "Track progress through modules",
          "Download course materials",
          "Submit assignments and get feedback",
        ],
      },
      {
        label: "Instructor",
        color: "text-emerald-400",
        border: "border-emerald-500/25",
        bg: "bg-emerald-500/8",
        title: "Course management",
        features: [
          "Create structured courses with modules",
          "Upload and manage video content",
          "Set assignments and grade work",
          "View real-time student progress",
        ],
      },
      {
        label: "Admin",
        color: "text-amber-400",
        border: "border-amber-500/25",
        bg: "bg-amber-500/8",
        title: "System oversight",
        features: [
          "Manage users and enrollments",
          "View platform analytics",
          "Configure storage and streaming",
          "Monitor system performance",
        ],
      },
    ],
    capabilities: [
      {
        title: "Secure video streaming with adaptive bitrate",
        body: "HLS streaming delivers optimal quality for every connection speed. Videos are transcoded and protected.",
        icon: "🎥",
      },
      {
        title: "Real-time progress tracking",
        body: "Students see their completion percentage. Instructors know exactly where each student is in the course.",
        icon: "✓",
      },
      {
        title: "Rich content support",
        body: "Videos, downloadable materials, quizzes, and assignments—everything in one platform.",
        icon: "📦",
      },
    ],
    stack: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Azure Blob Storage",
      "HLS Streaming",
      "Video Transcoding",
      "Tailwind CSS",
    ],
  },
  jobord: {
    title: "JobOrd — Modern Job Platform",
    badge: "Product case study",
    status: "MVP Complete",
    hero: "A job platform that connects top talent with meaningful opportunities",
    heroDescription:
      "JobOrd rethinks the job search experience. Instead of applying to hundreds of jobs and hearing nothing back, job seekers create a profile once, employers find them when there's a real fit, and the hiring process moves at human speed.",
    meta: [
      ["Role", "Full-stack developer"],
      ["Stack", "Next.js + PostgreSQL"],
      ["Focus", "Candidate and employer experience"],
      ["Target", "Tech industry professionals"],
    ],
    problems: [
      {
        title: "Application black hole",
        body: "Job seekers apply to positions and never hear back. Employers get overwhelmed with unqualified applications.",
        icon: "🕳️",
      },
      {
        title: "Job boards are outdated",
        body: "Search and filtering haven't fundamentally changed in 20 years. Finding the right job is painful.",
        icon: "🔍",
      },
      {
        title: "Mismatch between candidate and employer needs",
        body: "Employers don't know what candidates actually want. Candidates don't know if a role is right for them.",
        icon: "⚖️",
      },
    ],
    roles: [
      {
        label: "Job Seeker",
        color: "text-green-400",
        border: "border-green-500/25",
        bg: "bg-green-500/8",
        title: "Discovery and application",
        features: [
          "Create a rich professional profile once",
          "Get matched with relevant opportunities",
          "See application status in real-time",
          "Direct messaging with hiring teams",
        ],
      },
      {
        label: "Employer",
        color: "text-purple-400",
        border: "border-purple-500/25",
        bg: "bg-purple-500/8",
        title: "Talent discovery",
        features: [
          "Post jobs with detailed descriptions",
          "Search and filter candidate profiles",
          "Review applications and manage pipeline",
          "Communicate directly with candidates",
        ],
      },
      {
        label: "Admin",
        color: "text-cyan-400",
        border: "border-cyan-500/25",
        bg: "bg-cyan-500/8",
        title: "Platform management",
        features: [
          "Moderate jobs and profiles",
          "Monitor platform health",
          "Manage categories and skill tags",
          "View usage analytics",
        ],
      },
    ],
    capabilities: [
      {
        title: "Smart job matching",
        body: "Algorithms match candidates with jobs based on skills, experience, and preferences. Less noise, more signal.",
        icon: "🎯",
      },
      {
        title: "Direct communication channels",
        body: "Candidates and employers talk directly through the platform. Every interaction is tracked for accountability.",
        icon: "💬",
      },
      {
        title: "Transparent application tracking",
        body: "Job seekers always know the status of their applications. Employers can update candidates about next steps.",
        icon: "📊",
      },
    ],
    stack: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Real-time notifications",
      "Search indexing",
      "Email service",
    ],
  },
  workspan: {
    title: "WorkSpan — Team Collaboration Platform",
    badge: "Product case study",
    status: "MVP Complete",
    hero: "A workspace designed for distributed teams to collaborate without losing context",
    heroDescription:
      "WorkSpan brings together the best parts of project management, communication, and documentation into one unified platform. Teams spend less time context-switching between tools and more time doing focused work.",
    meta: [
      ["Role", "Full-stack developer"],
      ["Stack", "Next.js + PostgreSQL"],
      ["Focus", "Distributed team collaboration"],
      ["Target", "Remote-first teams"],
    ],
    problems: [
      {
        title: "Tool sprawl kills productivity",
        body: "Teams use Slack for chat, Jira for tasks, Notion for docs, and GitHub for code. Context is everywhere and nowhere.",
        icon: "🔀",
      },
      {
        title: "Communication overload",
        body: "Important decisions get lost in Slack threads. Async communication is hard to structure and search.",
        icon: "📢",
      },
      {
        title: "No single source of truth",
        body: "Documentation lives in multiple places. Team members can't find what they need or create conflicting information.",
        icon: "❓",
      },
    ],
    roles: [
      {
        label: "Team Member",
        color: "text-blue-400",
        border: "border-blue-500/25",
        bg: "bg-blue-500/8",
        title: "Focused collaboration",
        features: [
          "View assigned tasks and deadlines",
          "Participate in project discussions",
          "Access shared documentation",
          "Get async updates without notifications overload",
        ],
      },
      {
        label: "Project Lead",
        color: "text-orange-400",
        border: "border-orange-500/25",
        bg: "bg-orange-500/8",
        title: "Project oversight",
        features: [
          "Create and manage projects",
          "Organize team members into project groups",
          "Track progress and milestones",
          "Make decisions visible to the team",
        ],
      },
      {
        label: "Workspace Admin",
        color: "text-red-400",
        border: "border-red-500/25",
        bg: "bg-red-500/8",
        title: "Workspace governance",
        features: [
          "Manage team members and permissions",
          "Configure workspace settings",
          "Archive completed projects",
          "View team activity and analytics",
        ],
      },
    ],
    capabilities: [
      {
        title: "Unified workspace for all work",
        body: "Tasks, conversations, files, and documentation live together. No more context switching between tools.",
        icon: "🎯",
      },
      {
        title: "Async-first communication",
        body: "Comments are threaded, decisions are documented, and the context is always preserved. Perfect for distributed teams.",
        icon: "💭",
      },
      {
        title: "Flexible permission structure",
        body: "Control access at the workspace, project, and document level. Teams stay organized and secure.",
        icon: "🔐",
      },
    ],
    stack: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Real-time WebSockets",
      "Full-text search",
      "Permission engine",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.subtitle,
  };
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudy({ params }: Props) {
  const slug = (await params).slug;
  const study = caseStudies[slug];

  if (!study) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 lg:px-8 max-w-3xl mx-auto">
          <p className="text-foreground/70">Case study not found.</p>
          <Link href="/work" className="text-primary hover:opacity-70">
            Back to work
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        {/* Breadcrumb */}
        <nav className="flex items-center mt-6 gap-2 text-sm text-white/30">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/work" className="hover:text-white transition-colors">
            Work
          </Link>
          <span>/</span>
          <span className="text-white/60">
            {study.title.split(" — ")[1] || study.title}
          </span>
        </nav>

        {/* Hero */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-emerald-400">
              {study.badge}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 ml-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {study.status}
            </span>
          </div>

          <div className="border-l-2 border-emerald-500 pl-6 mb-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-4">
              {study.hero}
            </h1>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
              {study.heroDescription}
            </p>
          </div>

          {/* Meta strip */}
          <div className="flex flex-wrap gap-8 text-sm text-white/40">
            {study.meta.map(([label, value]: [string, string]) => (
              <div key={label}>
                <span className="block text-[10px] text-white/25 uppercase tracking-wider font-semibold mb-1">
                  {label}
                </span>
                {value}
              </div>
            ))}
          </div>
        </section>

        {/* The problem */}
        <section>
          <p className="text-[11px] font-semibold tracking-widest uppercase text-white/30 mb-2">
            The problem
          </p>
          <h2 className="text-2xl font-semibold text-white mb-3">
            {slug === "scales-flow"
              ? "Small agencies are running serious revenue operations on tools built for something else"
              : slug === "skillsphere"
                ? "Online education lacks the structure and tools learners need"
                : slug === "jobord"
                  ? "The hiring process is broken for both sides"
                  : "Distributed teams waste time context-switching between tools"}
          </h2>
          <p className="text-white/50 mb-10 max-w-2xl leading-relaxed">
            {slug === "scales-flow"
              ? "Google Sheets, WhatsApp threads, Notion boards — these were never CRM tools. For a 10–30 person agency with multiple sales reps and a manager, they create blind spots at every level of the team."
              : slug === "skillsphere"
                ? "Learning platforms often feel fragmented. Content is scattered across multiple services, progress tracking is manual, and video delivery is unreliable."
                : slug === "jobord"
                  ? "Job seekers apply to positions and disappear into a black hole. Employers get overwhelmed with unqualified applications. Neither side wins."
                  : "With Slack, Jira, Notion, and GitHub, teams are constantly switching contexts. Important work and decisions get buried in noise."}
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {study.problems.map((p: any) => (
              <div
                key={p.title}
                className="bg-white/[0.02] border border-red-500/15 rounded-xl p-5"
              >
                <div className="text-2xl mb-3" aria-hidden="true">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">
                  {p.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The solution */}
        <section>
          <p className="text-[11px] font-semibold tracking-widest uppercase text-white/30 mb-2">
            The solution
          </p>
          <h2 className="text-2xl font-semibold text-white mb-3">
            {slug === "scales-flow"
              ? "Three roles. One system. Everyone sees what they need."
              : slug === "skillsphere"
                ? "One platform. Complete learning experience."
                : slug === "jobord"
                  ? "A job platform built around real relationships."
                  : "One unified workspace for all team work."}
          </h2>
          <p className="text-white/50 mb-10 max-w-2xl leading-relaxed">
            {slug === "scales-flow"
              ? "Instead of building another generic CRM, Scales Flow is designed around how agency sales teams actually work. Each role gets a dashboard scoped to their responsibilities — nothing more, nothing less."
              : slug === "skillsphere"
                ? "SkillSphere brings all learning materials, progress tracking, and communication into one place. Students learn better. Instructors manage easier."
                : slug === "jobord"
                  ? "JobOrd creates a direct connection between candidates and employers. No endless applications. No automated rejections. Just meaningful matches and real conversations."
                  : "WorkSpan combines the best of project management, communication, and documentation. Teams get what they need in one place."}
          </p>

          {/* Role cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {study.roles.map((r: any) => (
              <div
                key={r.label}
                className={`rounded-xl p-5 border ${r.border} ${r.bg}`}
              >
                <span
                  className={`text-[10px] font-semibold tracking-widest uppercase ${r.color} block mb-3`}
                >
                  {r.label}
                </span>
                <h3 className="font-semibold text-white mb-3 text-sm">
                  {r.title}
                </h3>
                <ul className="space-y-1.5">
                  {r.features.map((f: string) => (
                    <li
                      key={f}
                      className={`text-sm text-white/45 flex items-start gap-2`}
                    >
                      <span className={`mt-0.5 ${r.color} text-xs`}>→</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Pipeline stages - only for Scales Flow */}
          {study.pipelineStages && (
            <div>
              <p className="text-[10px] text-white/25 uppercase tracking-wider font-semibold mb-3">
                Deal pipeline — tracked in real time
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {study.pipelineStages.map((s: any, i: number) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1.5 rounded-md text-xs font-medium border ${s.style}`}
                    >
                      {s.label}
                    </span>
                    {i < study.pipelineStages.length - 1 && (
                      <span className="text-white/20 text-sm">›</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* What this enables */}
        <section>
          <p className="text-[11px] font-semibold tracking-widest uppercase text-white/30 mb-2">
            What this enables
          </p>
          <h2 className="text-2xl font-semibold text-white mb-10">
            {slug === "scales-flow"
              ? "The capabilities a growing agency needs"
              : slug === "skillsphere"
                ? "Creating the ideal learning environment"
                : slug === "jobord"
                  ? "A better hiring experience for everyone"
                  : "The capabilities distributed teams need"}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {study.capabilities.map((c: any) => (
              <div key={c.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lg shrink-0">
                  {c.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">
                    {c.title}
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section>
          <p className="text-[11px] font-semibold tracking-widest uppercase text-white/30 mb-4">
            Built with
          </p>
          <div className="flex flex-wrap gap-2">
            {study.stack.map((s: string) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-sm text-white/60"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border border-emerald-500/25 bg-emerald-500/[0.04] rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Want to learn more?
          </h2>
          <p className="text-white/50 mb-6 max-w-lg leading-relaxed">
            I&apos;d love to discuss how these technologies and approaches could
            apply to your project. Let&apos;s talk about what&apos;s possible.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Get in touch →
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center text-white/35 hover:text-white/60 font-medium px-3 py-2.5 transition-colors text-sm"
            >
              ← Back to work
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
