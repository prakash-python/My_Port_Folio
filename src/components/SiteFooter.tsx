import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--hairline)]">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Prakash Kumar Daram. Crafted with care.
        </p>
        <div className="flex items-center gap-2">
          <a href="https://github.com/prakash-python" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-secondary/60 transition-colors text-muted-foreground hover:text-foreground"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/prakash-kumar-daram-891191298/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-secondary/60 transition-colors text-muted-foreground hover:text-foreground"><Linkedin size={18} /></a>
          <a href="mailto:daramprakashkumar587@gmail.com" aria-label="Email" className="p-2 rounded-md hover:bg-secondary/60 transition-colors text-muted-foreground hover:text-foreground"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}