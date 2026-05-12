import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import ScrollToTop from "@/components/ScrollToTop";
import bgCode from "@/assets/bg_code.png";
import "./styles.css";

// Page Components
import Index from "./routes/index";
import Skills from "./routes/skills";
import Experience from "./routes/experience";
import Contact from "./routes/contact";
import CaseStudies from "./routes/case-studies";
import Architecture from "./routes/architecture";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div 
        className="fixed inset-0 z-[-2] pointer-events-none" 
        style={{ 
          backgroundImage: `url(${bgCode})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundAttachment: 'fixed',
          opacity: 0.15
        }} 
      />
      <SiteNav />
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
