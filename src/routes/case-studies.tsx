import { SectionHeader } from "@/components/SectionHeader";
import { ExternalLink, Github } from "lucide-react";
const studies = [
  {
    n: "01",
    title: "MMPortal Enterprise Modernization & Cron Orchestration",
    sub: "Internal Operations Platform • MediaMint",
    stack: ["Python 3.12", "Django 5.2", "MySQL 8.4", "GitLab CI", "Snipe-IT", "Google Sheets API"],
    problem: "A high-traffic legacy Python 2.7 / Django 1.8 internal enterprise portal suffered from deprecated syntax, broken cron jobs, and unpatched security vulnerabilities following environment upgrades.",
    solution: "Modernized the core platform to Python 3.12 and Django 5.2 with zero operational downtime, engineered an isolated Cron Manager backend with execution guards, and built automated third-party sync pipelines.",
    contributions: [
      ["Framework Modernization", "Delivered 49 peer-reviewed PRs and 111 commits in 16 days, resolving critical regressions across 15+ business modules."],
      ["Cron Manager Engine", "Architected dedicated models, services, and REST APIs for scheduled jobs with once-a-day guards and safe retry policies."],
      ["Asset Management Integration", "Integrated Snipe-IT API to automatically synchronize employee lifecycle changes and user inactivation."],
      ["Sub-Billing-Type Architecture", "Engineered end-to-end sub-billing types with dynamic options APIs, data exports, and audit validation."],
    ],
  },
  {
    n: "02",
    title: "AI-Powered Document Intelligence Microservice",
    sub: "AutoDoc-Validator",
    stack: ["Python", "Django DRF", "Celery", "Redis", "PaddleOCR", "OpenAI"],
    problem: "Manual verification of loan documents is slow and error-prone. Rule-based parsers fail because every bank (SBI, HDFC, ICICI) formats statements differently.",
    solution: "A standalone microservice that asynchronously ingests documents, runs OCR, and uses LLMs to normalize transactions across any bank format into structured JSON, firing a webhook callback on completion.",
    contributions: [
      ["Async Pipeline", "Engineered Celery worker queues to prevent 1-2 minute OCR jobs from blocking API requests."],
      ["LLM Normalization", "Integrated OpenAI to bypass complex regex parsing — high accuracy on extracting transaction tables from raw OCR markdown."],
      ["Webhook Callback", "Robust background delivery with exponential backoff retries to guarantee result delivery to the main LOS."],
      ["Concurrency Locks", "PostgreSQL select_for_update locks prevent duplicate Celery workers from racing on the same job."],
    ],
    githubUrl: "https://github.com/prakash-python/AutoDoc-Validator", // Assuming standard naming
  },
  {
    n: "03",
    title: "Insta EMI Core Backend",
    sub: "Loan Origination System",
    stack: ["Django", "PostgreSQL", "Celery", "JWT", "AES-256", "Groq API"],
    problem: "Lending involves 9 different employee roles. A monolithic schema without strict boundaries leads to data leaks. Financial data (PAN, income) must be encrypted at rest per compliance.",
    solution: "A highly modular Django REST API with 14 apps segregating namespaces by role. JWT claims power stateless role verification, and PyCryptodome provides transparent field-level AES encryption.",
    contributions: [
      ["9-Tier Role Architecture", "Rigorous data isolation — a Process Associate and Regional Sales Manager access entirely different views of the same application."],
      ["Data Security", "Transparent AES-256 encryption on Django model fields safeguarding PAN, Aadhaar and income figures."],
      ["Integrations", "API boundaries to live CIBIL bureau APIs, AWS/Azure Blob storage, and the standalone AutoDoc Validator service."],
      ["Fuzzy Matching", "FuzzyWuzzy for intelligent matching of entered company names against the employer master list."],
    ],
    githubUrl: "https://github.com/prakash-python/Insta-EMI-Backend", // Assuming standard naming
  },
  {
    n: "04",
    title: "HireLoop AI - Enterprise Job Board Platform",
    sub: "Full-Stack Job Portal",
    stack: ["React", "Django DRF", "PostgreSQL", "JWT", "Vercel", "Render"],
    problem: "Modern job boards need to handle complex dual-role workflows (seekers vs employers) while maintaining high performance and security for sensitive data like resumes.",
    solution: "A production-ready platform with dual-role RBAC, secure PDF resume viewing, and background processing for heavy operations like automated email status updates.",
    contributions: [
      ["Dual-Role RBAC", "Implemented sophisticated role-based access control to distinguish seeker workflows from employer ATS dashboards."],
      ["Secure Resume Vault", "Engineered authenticated media endpoints with iframe-safe embedding for secure, in-browser PDF viewing."],
      ["Performance Tuning", "Resolved API registration bottlenecks by transitioning synchronous operations to background thread execution."],
      ["CI/CD Orchestration", "Established a dual-platform deployment pipeline with automated builds for both React and Django services."],
    ],
    liveUrl: "https://job-board-ai-assessment.vercel.app",
    githubUrl: "https://github.com/prakash-python/job-board-ai-assessment",
  },
];

const others = [
  { name: "Veg Mart Inventory", url: "https://python-veg-inventory.onrender.com/", external: true },
  { name: "Bank Management", url: "https://github.com/prakash-python/python_mysql_bank_project", external: false },
  { name: "Mail Sending System", url: "https://github.com/prakash-python/Mail_Sending_System", external: false },
  { name: "Simple Calculator", url: "https://github.com/prakash-python/My_Simple_Calculater", external: false },
];

export default function CaseStudies() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
      <SectionHeader
        eyebrow="Case studies"
        title="Production systems I've engineered"
        description="Deep dives into production platforms — along with independent systems and side projects engineered outside company work."
      />

      <div className="space-y-8">
        {studies.map((s) => (
          <article key={s.n} className="card-elevated rounded-3xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <span className="font-mono text-xs text-primary">CASE {s.n}</span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-1">{s.title}</h3>
                <p className="text-muted-foreground mt-1">{s.sub}</p>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                {s.stack.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 border border-[var(--hairline)] text-muted-foreground">{t}</span>
                ))}
                <div className="flex items-center gap-2 ml-2 pl-2 border-l border-[var(--hairline)]">
                  {s.liveUrl && (
                    <a href={s.liveUrl} target="_blank" rel="noreferrer" className="p-1.5 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-primary transition" title="Live Demo">
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {s.githubUrl && (
                    <a href={s.githubUrl} target="_blank" rel="noreferrer" className="p-1.5 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-primary transition" title="GitHub Repository">
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-2">The Problem</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{s.problem}</p>
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-2">The Solution</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{s.solution}</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-4">My Contributions</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {s.contributions.map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-[var(--hairline)] bg-background/40 p-4">
                    <p className="font-semibold text-sm">{k}</p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <div className="mb-8">
          <span className="chip mb-3">Self Project / Independent System</span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Other featured projects</h3>
          <p className="text-sm md:text-base text-muted-foreground mt-1">
            Personal vault and side projects engineered outside of company work.
          </p>
        </div>

        {/* Featured Self-Project Card: Life OS */}
        <article className="card-elevated rounded-3xl p-8 md:p-10 mb-8 border border-primary/20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30 font-semibold">
                  SELF PROJECT
                </span>
                <span className="text-xs font-mono text-muted-foreground">Personal Vault &amp; Tracker</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-2">
                Life OS — Personal Vault
              </h3>
              <p className="text-muted-foreground mt-1">
                Full-Stack Personal Life, Finance &amp; Asset Management Platform
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Django DRF",
                "PostgreSQL",
                "SimpleJWT",
                "Vercel",
                "Render",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 border border-[var(--hairline)] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
              <div className="flex items-center gap-2 ml-2 pl-2 border-l border-[var(--hairline)]">
                <a
                  href="https://life-os-personal-vault.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition shadow-sm"
                  title="Live App"
                >
                  <span>Live App</span>
                  <ExternalLink size={14} />
                </a>
                <a
                  href="https://github.com/prakash-python/life-os"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-primary transition"
                  title="GitHub Repository"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-2">The Motivation</h4>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Off-the-shelf finance trackers are fragmented, rigid, and often compromise data privacy. I needed a centralized, private system to manage day-to-day cash flows, assets, financial goals, and net worth calculations with full control over the data layer.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-2">The Solution</h4>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Architected and deployed a multi-app Django REST backend paired with a responsive React (Vite + TypeScript) interface. Features JWT authentication, categorized income/expense records, goal milestone tracking, asset valuation, and a resilient soft-delete audit vault.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-4">Key Features &amp; Implementation</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                ["Modular Domain Separation", "Segregated into 6 independent Django apps (finances, assets, goals, analytics, trash, authentication) keeping API endpoints clean and maintainable."],
                ["Financial & Asset Management", "Real-time calculation of net worth, categorized expenses, and income logs with date filters and summaries."],
                ["Goal Milestones & Targets", "Interactive goal tracking with target amounts, contribution history, and progress visualizations."],
                ["Soft-Delete & Trash Vault", "Reversible soft-delete architecture ensuring accidental removals can be audited and restored effortlessly."],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-[var(--hairline)] bg-background/40 p-4">
                  <p className="font-semibold text-sm">{k}</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">More side projects &amp; utilities</h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {others.map((o) => (
            <a key={o.name} href={o.url} target="_blank" rel="noreferrer" className="card-elevated rounded-xl p-5 group flex items-center justify-between">
              <span className="font-medium text-sm">{o.name}</span>
              {o.external ? <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition" /> : <Github size={14} className="text-muted-foreground group-hover:text-primary transition" />}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}