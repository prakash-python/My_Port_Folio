import { SectionHeader } from "@/components/SectionHeader";

const groups: { title: string; items: string[] }[] = [
  { title: "Backend & API", items: ["Python", "Django", "Django REST Framework", "Node.js"] },
  { title: "Async & Systems", items: ["Celery", "Redis", "Webhooks", "JWT Auth", "Uvicorn / ASGI"] },
  { title: "AI & Processing", items: ["OpenAI API", "Groq API", "PaddleOCR", "PyMuPDF", "Prompt Engineering"] },
  { title: "Database & Data Layer", items: ["PostgreSQL", "MySQL", "Prisma ORM", "Django ORM"] },
  { title: "Frontend", items: ["HTML & CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { title: "Infrastructure", items: ["Git & GitHub", "Azure Blob Storage", "Linux / Bash", "Supervisor"] },
  { title: "Soft Skills", items: ["Communication", "Problem Solving", "Analytical Reasoning", "Aptitude"] },
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
      <SectionHeader
        eyebrow="Technical arsenal"
        title="Tools I use to ship reliable systems"
        description="A working knowledge across the backend stack — from data layer to deployed API."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g) => (
          <div key={g.title} className="card-elevated rounded-2xl p-6">
            <h3 className="font-semibold mb-4 text-sm font-mono uppercase tracking-wider text-primary">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg text-sm bg-secondary/60 border border-[var(--hairline)] hover:border-primary/40 hover:text-primary transition-colors">{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}