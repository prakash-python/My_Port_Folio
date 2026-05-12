import { SectionHeader } from "@/components/SectionHeader";
import { ExternalLink, Github } from "lucide-react";
const studies = [
  {
    n: "01",
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
    n: "02",
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
    n: "03",
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
        description="Two deep dives into the platforms behind the scenes — and a few side projects worth showing."
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
        <h3 className="text-2xl font-bold mb-6">Other featured projects</h3>
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