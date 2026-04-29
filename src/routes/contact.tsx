import { SectionHeader } from "@/components/SectionHeader";
import { Mail, Linkedin, Github, MessageCircle, FileText, Briefcase, Download } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "daramprakashkumar587@gmail.com",
    href: "mailto:daramprakashkumar587@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/prakash-kumar-daram-891191298/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/prakash-python",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 6302 581 405",
    href: "https://wa.me/916302581405",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download PDF",
    href: "/Prakash_Kumar_resume.pdf",
  },
];

/** Roles that match Prakash's skills & experience */
const openRoles = [
  { label: "Backend Engineer", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { label: "Python Developer", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  { label: "Django / DRF Developer", color: "bg-green-500/10 text-green-400 border-green-500/20" },
  { label: "AI & LLM Integration Engineer", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  { label: "Full-Stack Developer", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
  { label: "API & Microservices Engineer", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  { label: "Async / Task-Queue Engineer (Celery)", color: "bg-red-500/10 text-red-400 border-red-500/20" },
  { label: "Data Pipeline Developer", color: "bg-teal-500/10 text-teal-400 border-teal-500/20" },
];

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 space-y-12">
      <SectionHeader
        eyebrow="Let's connect"
        title="Open to the right engineering role"
        description="I'm actively looking for backend-heavy roles where I can build scalable systems, integrate AI/LLMs, and ship production-ready code. Here are the kinds of roles I'm best suited for:"
      />

      {/* ── Open Roles ─────────────────────────────────────── */}
      <div className="card-elevated rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-2 mb-5">
          <Briefcase size={18} className="text-primary" />
          <p className="text-sm font-semibold font-mono uppercase tracking-wider text-muted-foreground">
            Roles I'm open to
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {openRoles.map((role) => (
            <span
              key={role.label}
              className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border ${role.color} transition-transform hover:scale-105`}
            >
              {role.label}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
          I specialise in <strong className="text-foreground">Django REST Framework</strong> backends,{" "}
          <strong className="text-foreground">Celery + Redis</strong> async pipelines, and{" "}
          <strong className="text-foreground">LLM / OCR integration</strong>. I'm comfortable owning
          end-to-end features — from database schema to React dashboards. Based in India, open to remote
          or hybrid roles.
        </p>
      </div>

      {/* ── Contact Channels ────────────────────────────────── */}
      <div>
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
          Reach me via
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {channels.map((c) => 
            c.label === "Resume" ? (
              <Dialog key={c.label}>
                <DialogTrigger asChild>
                  <button className="card-elevated rounded-2xl p-6 flex items-center cursor-pointer gap-4 group min-w-0 text-left w-full">
                    <span className="shrink-0 grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                      <c.icon size={20} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors break-all">
                        View Resume (PDF)
                      </p>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-[95vw] h-[90vh] flex flex-col p-0 overflow-hidden sm:rounded-xl">
                  <DialogHeader className="px-6 py-4 flex flex-row items-center justify-between border-b border-[var(--hairline)] bg-card">
                    <div className="space-y-1 text-left">
                      <DialogTitle className="text-xl">Resume - Prakash Kumar Daram</DialogTitle>
                      <DialogDescription>Review my qualifications and experience.</DialogDescription>
                    </div>
                    <a 
                      href={c.href} 
                      download
                      title="Download Resume"
                      className="hidden sm:flex items-center justify-center p-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors mr-6"
                    >
                      <Download size={18} /> 
                    </a>
                  </DialogHeader>
                  <div className="flex-1 bg-muted/10 relative">
                    <iframe 
                      src={`${c.href}#toolbar=0`} 
                      className="absolute inset-0 w-full h-full border-0"
                      title="Prakash Kumar Daram Resume"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="card-elevated rounded-2xl p-6 flex items-center gap-4 group min-w-0"
              >
                <span className="shrink-0 grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                  <c.icon size={20} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors break-all">
                    {c.value}
                  </p>
                </div>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
