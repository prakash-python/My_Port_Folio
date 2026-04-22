import { Link } from "react-router-dom";
import { ArrowRight, Database, Cog, BrainCircuit, Workflow, Sparkles, Rocket, ShieldCheck } from "lucide-react";
import portrait from "@/assets/prakash_img.jpeg";
const highlights = [
  { icon: Workflow, title: "Real-World Systems", body: "Multi-role architectures serving distinct operational hierarchies on a unified data model." },
  { icon: Cog, title: "Async Processing", body: "Celery + Redis pipelines that offload heavy OCR and LLM work, keeping APIs blazing fast." },
  { icon: BrainCircuit, title: "AI Integration", body: "Turning unstructured documents into reliable, structured JSON via prompt engineering." },
  { icon: ShieldCheck, title: "End-to-End Ownership", body: "From schema design and JWT-secured endpoints to React dashboards rendering the data." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-28 grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <div>
            <span className="chip mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for engineering roles
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Backend Engineer <br />
              <span className="text-gradient">building AI-powered systems</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Hi, I'm <span className="text-foreground font-medium">Prakash Kumar Daram</span>. I design and ship scalable, production-ready backend architectures — specializing in async task processing and LLM integration.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                { icon: Database, text: "Django backend architecture & robust REST APIs" },
                { icon: Cog, text: "Background processing pipelines using Celery & Redis" },
                { icon: BrainCircuit, text: "Integrating OCR & LLMs for automated data validation" },
              ].map((f) => (
                <li key={f.text} className="flex items-start gap-3 text-sm md:text-base">
                  <span className="mt-0.5 grid place-items-center h-7 w-7 rounded-md bg-primary/10 text-primary border border-primary/20">
                    <f.icon size={14} />
                  </span>
                  <span className="text-muted-foreground">{f.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/case-studies" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-[var(--shadow-elegant)] hover:opacity-90 transition">
                View case studies <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[var(--hairline)] hover:border-primary/50 hover:bg-secondary/40 font-medium transition">
                Get in touch
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl opacity-70" />
            <div className="relative rounded-[1.75rem] overflow-hidden border border-[var(--hairline)] shadow-[var(--shadow-elegant)] aspect-[4/5]">
              <img src={portrait} alt="Prakash Kumar Daram" className="h-full w-full object-cover" width={896} height={1152} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                <span className="px-3 py-1.5 rounded-full bg-background/70 backdrop-blur border border-[var(--hairline)]">Hyderabad, IN</span>
                <span className="px-3 py-1.5 rounded-full bg-background/70 backdrop-blur border border-[var(--hairline)] flex items-center gap-1.5">
                  <Sparkles size={12} className="text-primary" /> Open to work
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl mb-12">
          <span className="chip mb-4">What makes me different</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            I don't just build <span className="text-gradient">CRUD apps</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            I engineer real-world systems that handle complex workflows, asynchronous operations and AI intelligence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div key={h.title} className="card-elevated rounded-2xl p-6">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary border border-primary/20 mb-5">
                <h.icon size={20} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-4">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--hairline)] p-10 md:p-14 card-elevated">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Have a system to engineer?</h3>
              <p className="mt-2 text-muted-foreground max-w-xl">Let's talk about backend architecture, async pipelines or AI workflows that ship to production.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-[var(--shadow-glow)] hover:opacity-90 transition whitespace-nowrap">
              Start a conversation <Rocket size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
