import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  GraduationCap,
  PhoneCall,
  X,
} from "lucide-react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { CourseCategory } from "../types/siteConfig";

export const Header: React.FC = () => {
  const {
    config,
    setCourseCategoryFilter,
    applyToAdmission,
  } = useSiteConfig();

  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", onOutside);
    window.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      window.removeEventListener("keydown", onEsc);
    };
  }, []);

  const isSolid = scrolled || megaOpen;

  const categories: { category: CourseCategory; wingTitle: string; phone: string }[] = [
    { category: "Education", wingTitle: "Teacher Education Wing", phone: "+91 88776 12728" },
    { category: "Nursing", wingTitle: "Nursing & Health Sciences", phone: "+91 62027 92816" },
    { category: "Higher Education", wingTitle: "IT, Mgmt & Library Science", phone: "+91 99556 57050" },
  ];

  const handleMegaCoursePick = (courseTitle: string) => {
    setMegaOpen(false);
    applyToAdmission({ course: courseTitle });
  };

  const handleMegaWingPick = (category: CourseCategory) => {
    setMegaOpen(false);
    setCourseCategoryFilter(category);
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header ref={headerRef} className="fixed top-0 inset-x-0 z-50 w-full">
      {/* Main Horizontal Navbar */}
      <nav
        aria-label="Primary navigation"
        className={`w-full transition-all duration-300 ${
          isSolid
            ? "bg-white/96 backdrop-blur-md border-b border-slate-200 shadow-lg text-slate-900"
            : "bg-gradient-to-b from-black/75 via-black/40 to-transparent text-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-[72px] items-center justify-between gap-2">
            {/* Brand Crest */}
            <a href="#home" className="flex items-center gap-2 sm:gap-2.5 min-w-0 shrink-0 group">
              <img
                src={config.branding.logoUrl}
                alt={config.branding.logoAlt}
                className={`h-8 w-8 sm:h-10 sm:w-10 shrink-0 rounded-full object-cover bg-white shadow-sm group-hover:scale-105 transition-transform ${
                  isSolid ? "ring-2 ring-brand/60" : "ring-2 ring-white/75"
                }`}
              />
              <div className="min-w-0">
                <div
                  className={`whitespace-nowrap text-[13px] sm:text-base font-extrabold tracking-tight leading-none ${
                    isSolid ? "text-brand-deep" : "text-white drop-shadow"
                  }`}
                >
                  {config.branding.groupName}
                </div>
                <div
                  className={`mt-0.5 whitespace-nowrap text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.09em] sm:tracking-[0.14em] ${
                    isSolid ? "text-brand" : "text-accent-soft"
                  }`}
                >
                  {config.branding.groupSubtitle}
                </div>
              </div>
            </a>

            {/* Desktop Horizontal Nav Links + Interactive Programs Mega-Menu Trigger */}
            <div className="hidden lg:flex items-center gap-0.5">
              <button
                type="button"
                onClick={() => setMegaOpen((v) => !v)}
                aria-expanded={megaOpen}
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wide transition-all whitespace-nowrap ${
                  megaOpen
                    ? "bg-brand text-white"
                    : isSolid
                    ? "text-brand bg-brand/8 hover:bg-brand/15"
                    : "border border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25"
                }`}
              >
                <GraduationCap className="h-3.5 w-3.5" />
                <span>Explore Programs</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                />
              </button>

              {config.navigation
                .filter((l) => l.href !== "#courses")
                .map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMegaOpen(false)}
                    className={`rounded-lg px-2 py-1.5 text-[11px] font-bold uppercase tracking-wide transition-colors whitespace-nowrap ${
                      link.href === "#home"
                        ? isSolid
                          ? "text-brand underline underline-offset-8 decoration-2"
                          : "text-white underline underline-offset-8 decoration-accent decoration-2"
                        : isSolid
                        ? "text-slate-700 hover:bg-brand/8 hover:text-brand"
                        : "text-white/90 hover:text-accent-soft hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
            </div>

            {/* Right Horizontal Quick Actions: Call + Apply Now */}
            <div className="relative flex items-center gap-1.5 shrink-0">
              <a
                href={`tel:${config.departments[0]?.phoneRaw ?? "+918877612728"}`}
                aria-label={`Call admission desk ${config.departments[0]?.phoneDisplay ?? "+91 88776 12728"}`}
                title={`Call ${config.departments[0]?.phoneDisplay ?? "+91 88776 12728"}`}
                className={`hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                  isSolid
                    ? "border border-brand/20 bg-surface text-brand-deep hover:border-brand"
                    : "border border-white/30 bg-white/15 text-white backdrop-blur-md hover:bg-white/25"
                }`}
              >
                <PhoneCall className="h-3.5 w-3.5 text-accent" />
              </a>

              <a
                href="#admission"
                className={`inline-flex items-center gap-1 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-extrabold shadow-sm transition-colors whitespace-nowrap ${
                  isSolid
                    ? "bg-brand text-white hover:bg-accent hover:text-accent-ink"
                    : "bg-brand text-white border border-white/25 hover:bg-accent hover:text-accent-ink"
                }`}
              >
                <span>Apply Now</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Mobile & Tablet Horizontal Quick-Jump Strip */}
          <div
            className={`lg:hidden border-t py-2 ${
              isSolid ? "border-slate-100" : "border-white/15"
            }`}
          >
            <div className="horizontal-rail flex items-center gap-1.5 overflow-x-auto pb-0.5">
              <button
                type="button"
                onClick={() => setMegaOpen((v) => !v)}
                className={`shrink-0 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider transition-colors ${
                  megaOpen
                    ? "bg-brand text-white"
                    : isSolid
                    ? "border border-brand/30 bg-brand/5 text-brand"
                    : "border border-white/30 bg-white/15 text-white backdrop-blur-md"
                }`}
              >
                <span>Programs (8)</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                />
              </button>
              {config.navigation.map((link) => (
                <a
                  key={`mob-${link.href}`}
                  href={link.href}
                  className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors ${
                    isSolid
                      ? "border border-slate-200 bg-slate-50 text-brand-deep hover:bg-brand hover:text-white"
                      : "border border-white/25 bg-black/25 text-white backdrop-blur-md hover:bg-white hover:text-brand-deep"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Interactive Mega-Menu Bar */}
        {megaOpen && (
          <div className="border-t border-slate-200 bg-white text-slate-900 shadow-2xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-extrabold uppercase tracking-widest text-brand">
                  Explore Programs by Academic Wing — Click Any Course to Apply
                </div>
                <button
                  type="button"
                  onClick={() => setMegaOpen(false)}
                  className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600 hover:bg-slate-200"
                >
                  <X className="h-3 w-3" />
                  <span>Close</span>
                </button>
              </div>

              <div className="horizontal-rail flex gap-4 overflow-x-auto pb-1 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
                {categories.map((wing) => {
                  const wingCourses = config.coursesSection.items.filter(
                    (c) => c.category === wing.category
                  );
                  return (
                    <div
                      key={wing.category}
                      className="shrink-0 w-[80vw] sm:w-[300px] lg:w-auto rounded-2xl border border-slate-200 bg-surface p-3.5"
                    >
                      <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 pb-2 mb-2.5">
                        <button
                          type="button"
                          onClick={() => handleMegaWingPick(wing.category)}
                          className="text-xs font-extrabold text-brand-deep hover:text-brand text-left"
                        >
                          {wing.wingTitle} →
                        </button>
                        <span className="text-[10px] font-bold text-gold-text">{wing.phone}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {wingCourses.map((c) => (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => handleMegaCoursePick(c.title)}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-brand-deep hover:border-brand hover:bg-brand hover:text-white transition-colors"
                          >
                            <span>{c.title}</span>
                            <span className="text-[10px] opacity-75 font-semibold">
                              ({c.duration})
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
