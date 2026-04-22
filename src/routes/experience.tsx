import { SectionHeader } from "@/components/SectionHeader";
import { GraduationCap, Briefcase } from "lucide-react";
const jobs = [
  {
    role: "Backend Software Engineer",
    company: "Viprata Technologies",
    period: "Apr 2025 — Present",
    points: [
      "Designed and developed scalable Django REST architectures for financial platforms.",
      "Integrated CIBIL APIs, implemented JWT auth and built secure end-to-end workflows.",
      "Engineered a dynamic offer-matching decision engine based on rule parsing.",
      "Built large-scale Pandas data pipelines moving 2.3M+ relational records.",
    ],
  },
  {
    role: "Junior Python Developer",
    company: "V V Cube Consultancy Services",
    period: "Nov 2024 — Apr 2025",
    points: [
      "Mentored students in Python, Django, MySQL and full-stack development.",
      "Developed internal automation tools for student reporting and email notifications.",
      "Supported backend debugging, API logic design and database workflow optimization.",
    ],
  },
  {
    role: "Sales Associate",
    company: "DMart",
    period: "Oct 2023 — Jan 2025",
    points: ["Awarded Best Employee 2024 for outstanding performance in stock & inventory management."],
  },
  {
    role: "UI Development Intern",
    company: "REDCARPET Animation & Visual FX",
    period: "Apr 2023 — Jul 2023",
    points: ["Built static web pages using HTML, CSS, JavaScript and ReactJS."],
  },
];

const education = [
  { degree: "Master's of Computer Applications", school: "Pedanandipadu College of Arts & Sciences", year: "2025 • 81%" },
  { degree: "B.Sc. Statistics & Computer Science", school: "Jagarlamudi Kuppuswamy Choudary College", year: "2023 • 81%" },
];

export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
      <SectionHeader
        eyebrow="Experience"
        title="A timeline of shipping to production"
        description="From mentoring and inventory ops to engineering financial backend platforms."
      />

      <div className="relative pl-6 md:pl-8 border-l border-[var(--hairline)] space-y-8">
        {jobs.map((j) => (
          <div key={j.role + j.company} className="relative">
            <span className="absolute -left-[34px] md:-left-[42px] top-1.5 grid place-items-center h-7 w-7 rounded-full bg-background border border-primary/40 text-primary">
              <Briefcase size={12} />
            </span>
            <div className="card-elevated rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{j.role}</h3>
                <span className="text-xs font-mono text-muted-foreground">{j.period}</span>
              </div>
              <p className="text-primary text-sm mt-1">{j.company}</p>
              <ul className="mt-4 space-y-2">
                {j.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-1">▹</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary/10 text-primary border border-primary/20">
            <GraduationCap size={18} />
          </span>
          <h3 className="text-2xl font-bold">Education</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {education.map((e) => (
            <div key={e.degree} className="card-elevated rounded-2xl p-6">
              <h4 className="font-semibold">{e.degree}</h4>
              <p className="text-primary text-sm mt-1">{e.school}</p>
              <p className="text-xs font-mono text-muted-foreground mt-2">{e.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}