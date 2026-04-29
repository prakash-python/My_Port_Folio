import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const links = [
  { to: "/", label: "Home" },
  { to: "/architecture", label: "Architecture" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-[var(--hairline)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground font-display font-bold shadow-[var(--shadow-glow)]">
            P
          </span>
          <span className="font-display font-semibold tracking-tight">
            Prakash<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? "text-foreground bg-secondary/60"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Dialog>
          <DialogTrigger asChild>
            <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]">
              Hire Me
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl w-[95vw] h-[90vh] flex flex-col p-0 overflow-hidden sm:rounded-xl">
            <DialogHeader className="px-6 py-4 flex flex-row items-center justify-between border-b border-[var(--hairline)] bg-card">
              <div className="space-y-1 text-left">
                <DialogTitle className="text-xl">Resume - Prakash Kumar Daram</DialogTitle>
                <DialogDescription>Review my qualifications and experience.</DialogDescription>
              </div>
              <a 
                href="/Prakash_Kumar_resume.pdf" 
                download
                title="Download Resume"
                className="hidden sm:flex items-center justify-center p-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors mr-6"
              >
                <Download size={18} /> 
              </a>
            </DialogHeader>
            <div className="flex-1 bg-muted/10 relative">
              <iframe 
                src="/Prakash_Kumar_resume.pdf#toolbar=0" 
                className="absolute inset-0 w-full h-full border-0"
                title="Prakash Kumar Daram Resume"
              />
            </div>
          </DialogContent>
        </Dialog>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md hover:bg-secondary/40"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--hairline)] bg-background/95 backdrop-blur-xl">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? "text-foreground bg-secondary/60"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}