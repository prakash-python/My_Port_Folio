import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight } from "lucide-react";
const stages = [
  { tag: "Client", name: "React SPA", body: "User uploads a financial document. UI is never blocked." },
  { tag: "API", name: "Django REST", body: "Validates, persists job, returns a job_id immediately." },
  { tag: "Broker", name: "Redis Queue", body: "Decouples ingest from heavy work via reliable queues." },
  { tag: "Worker", name: "Celery", body: "Picks up jobs concurrently with worker-level isolation." },
  { tag: "OCR", name: "PaddleOCR", body: "Extracts text from scanned PDFs into clean markdown." },
  { tag: "AI", name: "LLM Parse", body: "Normalizes unstructured text into strict JSON transactions." },
];

export default function Architecture() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
      <SectionHeader
        eyebrow="Under the hood"
        title="Architecture I design for production"
        description="How I decouple long-running AI tasks from fast API responses — so users see instant feedback while the heavy lifting happens behind the scenes."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stages.map((s, i) => (
          <div key={s.name} className="relative card-elevated rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="chip">{s.tag}</span>
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 card-elevated rounded-2xl p-8 md:p-10">
        <div className="flex items-center gap-2 text-primary text-xs font-mono mb-3">
          <ArrowRight size={14} /> THE PIPELINE
        </div>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          When a user uploads a financial document (e.g. a PDF bank statement), the Django API immediately returns a{" "}
          <code className="font-mono text-primary">job_id</code> so the UI isn't blocked. Redis queues the task. A Celery worker picks it up, runs it through PaddleOCR for text extraction, then pushes the markdown to an LLM (OpenAI / Groq). The LLM parses the unstructured text into a structured JSON array of exact transactions. Finally, the worker fires a webhook callback to update the main database, and the React UI receives the completed status to render the analysis dashboard.
        </p>
      </div>
    </section>
  );
}