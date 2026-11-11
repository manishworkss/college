import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useSiteConfig } from "../context/SiteConfigContext";

export const HeroSection: React.FC = () => {
  const { config, applyToAdmission } = useSiteConfig();
  const slides = config.heroSlides;
  const courses = config.coursesSection.items;

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  // Quick-Enquiry modal state synced cleanly to main Admission desk
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadStream, setLeadStream] = useState<"All" | "Education" | "Nursing" | "Higher Education">("All");
  const [leadCourse, setLeadCourse] = useState(courses[0]?.title ?? "B.Ed");

  useEffect(() => {
    if (paused || enquiryOpen || slides.length <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [paused, enquiryOpen, slides.length]);

  useEffect(() => {
    if (!enquiryOpen) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setEnquiryOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [enquiryOpen]);

  const filteredLeadCourses = useMemo(() => {
    if (leadStream === "All") return courses;
    return courses.filter((c) => c.category === leadStream);
  }, [courses, leadStream]);

  useEffect(() => {
    if (!filteredLeadCourses.some((c) => c.title === leadCourse) && filteredLeadCourses[0]) {
      setLeadCourse(filteredLeadCourses[0].title);
    }
  }, [filteredLeadCourses, leadCourse]);

  const matchedCourseObj = courses.find((c) => c.title === leadCourse) ?? courses[0];
  const matchedDept =
    config.departments.find((d) => d.key === matchedCourseObj?.departmentKey) ??
    config.departments[0];

  const current = slides[activeIndex] ?? slides[0];
  if (!current) return null;

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  const handleQuickProceed = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquiryOpen(false);
    applyToAdmission({
      name: leadName.trim(),
      phone: leadPhone.trim(),
      course: leadCourse,
    });
  };

  const quickWhatsappHref = `https://wa.me/${matchedDept?.whatsappRaw ?? "918877612728"}?text=${encodeURIComponent(
    `Hello ${matchedDept?.name ?? "Admission Desk"}, I would like admission & fee details for ${leadCourse}.${
      leadName ? ` Name: ${leadName}` : ""
    }${leadPhone ? `, Phone: ${leadPhone}` : ""}`
  )}`;

  return (
    <section
      id="home"
      className="relative flex flex-col justify-between min-h-[100svh] w-full overflow-hidden bg-brand-deep text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Full-Bleed Architectural Campus Fold (`100svh`) */}
      <div className="relative flex flex-col justify-between min-h-[100svh] w-full overflow-hidden">
        {/* Orientation-Aware Full-Bleed Hero Photography: Landscape on Desktop/Windows, Portrait on Mobile */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <img
            key={`desk-${current.id}`}
            src={current.image}
            alt={current.highlight}
            className="hidden md:block h-full w-full object-cover object-center animate-ken-burns"
          />
          <img
            key={`mob-${current.id}`}
            src={current.mobileImage ?? current.image}
            alt={current.highlight}
            className="block md:hidden h-full w-full object-cover object-center animate-ken-burns"
          />
          {/* Clear top/middle framing for unobstructed campus photography + strong bottom vignette for Hero Footer contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85" />
        </div>

        {/* Prev / Next edge controls on larger viewports */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous hero campus slide"
          className="hidden sm:inline-flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md hover:bg-brand hover:border-white/50 hover:scale-110 active:scale-95 transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next hero campus slide"
          className="hidden sm:inline-flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md hover:bg-brand hover:border-white/50 hover:scale-110 active:scale-95 transition-all"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Top Spacer to clear the transparent fixed Header cleanly */}
        <div className="h-28 lg:h-20 shrink-0" aria-hidden="true" />

        {/* Centered Hero Footer Focal Block (leaves upper & center campus photography clean and unobstructed) */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-end text-center px-4 sm:px-6 lg:px-8 pt-6 pb-20 sm:pb-10 lg:pb-12">
          <div key={current.id} className="max-w-3xl mx-auto">
            <div className="animate-hero-up inline-flex flex-wrap items-center justify-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/35 px-3.5 py-1 text-[11px] sm:text-xs font-bold tracking-wider text-accent-soft backdrop-blur-md shadow">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                <span>{current.badge}</span>
              </span>
            </div>

            <h1 className="animate-hero-up-delay-1 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
              {current.title}
            </h1>

            {/* Horizontal Dual Pill CTAs (side-by-side on both Mobile & Desktop) */}
            <div className="animate-hero-up-delay-2 mt-4 sm:mt-5 flex flex-nowrap items-center justify-center gap-2.5 sm:gap-3">
              <a
                href={current.targetHref}
                className="group/cta inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-brand px-4 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-extrabold text-white shadow-xl border border-white/20 hover:bg-accent hover:text-accent-ink hover:-translate-y-0.5 active:scale-95 transition-all whitespace-nowrap"
              >
                <span>{current.ctaLabel}</span>
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover/cta:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={() => setEnquiryOpen(true)}
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/60 bg-black/35 px-4 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-extrabold text-white backdrop-blur-md shadow-lg hover:bg-white hover:text-brand-deep hover:-translate-y-0.5 active:scale-95 transition-all whitespace-nowrap"
              >
                <GraduationCap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" />
                <span>
                  Quick Enquiry<span className="hidden sm:inline"> 2026</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal 5-Card "At a Glance" Achievements Strip + BSCC Announcements immediately below Hero Fold */}
      <div className="bg-brand-deep border-t border-white/15">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-4">
          <div className="horizontal-rail flex gap-2.5 overflow-x-auto snap-x snap-mandatory pb-0.5 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
            {config.heroStats.map((stat) => (
              <div
                key={stat.label}
                className="snap-start shrink-0 min-w-[175px] lg:min-w-0 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 flex items-center gap-3 backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/15 hover:border-accent/40 transition-all duration-300"
              >
                <span className="text-xl font-extrabold text-accent shrink-0">
                  {stat.value}
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-extrabold text-white truncate">{stat.label}</div>
                  <div className="text-[11px] text-white/75 truncate">{stat.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-accent/25 bg-black/25">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
            <div className="marquee-wrapper overflow-hidden">
              <div className="marquee-track py-2 text-[11px] sm:text-xs font-medium text-white">
                {[...config.announcements, ...config.announcements].map((item, idx) => (
                  <a
                    key={`${item.id}-${idx}`}
                    href={item.targetHref}
                    className="inline-flex items-center gap-2 px-5 hover:text-accent-soft transition-colors whitespace-nowrap"
                  >
                    {item.badge && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-accent-ink">
                        <Sparkles className="h-2.5 w-2.5" />
                        {item.badge}
                      </span>
                    )}
                    <span>{item.text}</span>
                    <span className="text-accent/60" aria-hidden="true">
                      •
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* On-Demand Interactive Quick Admission Enquiry Modal (keeps Hero photo edge-to-edge on load) */}
      {enquiryOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="hero-enquiry-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm p-4"
          onClick={() => setEnquiryOpen(false)}
        >
          <div
            className="animate-modal-in w-full max-w-lg rounded-3xl border border-white/20 bg-white text-slate-900 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-brand px-5 py-4 text-white flex items-center justify-between gap-2">
              <div className="min-w-0">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-accent-soft">
                  Direct Counseling • No Broker
                </div>
                <h2 id="hero-enquiry-modal-title" className="text-lg font-extrabold truncate">
                  Quick Admission Enquiry 2026
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setEnquiryOpen(false)}
                aria-label="Close Quick Enquiry"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleQuickProceed} className="p-5 space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="hero-lead-name"
                    className="block text-[11px] font-bold text-slate-700 mb-1"
                  >
                    Student Name
                  </label>
                  <input
                    id="hero-lead-name"
                    type="text"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs sm:text-sm focus:border-brand focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="hero-lead-phone"
                    className="block text-[11px] font-bold text-slate-700 mb-1"
                  >
                    Mobile Number
                  </label>
                  <input
                    id="hero-lead-phone"
                    type="tel"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="10-digit WhatsApp No."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs sm:text-sm focus:border-brand focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <span className="block text-[11px] font-bold text-slate-700 mb-1.5">
                  Select Academic Wing
                </span>
                <div className="horizontal-rail flex items-center gap-1.5 overflow-x-auto pb-0.5">
                  {(["All", "Education", "Nursing", "Higher Education"] as const).map((wing) => {
                    const active = leadStream === wing;
                    return (
                      <button
                        key={wing}
                        type="button"
                        onClick={() => setLeadStream(wing)}
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold transition-colors ${
                          active
                            ? "bg-brand text-white"
                            : "border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {wing === "Higher Education" ? "IT & Mgmt" : wing}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="hero-lead-course"
                  className="block text-[11px] font-bold text-slate-700 mb-1"
                >
                  Target Degree / Diploma
                </label>
                <select
                  id="hero-lead-course"
                  value={leadCourse}
                  onChange={(e) => setLeadCourse(e.target.value)}
                  className="w-full rounded-xl border border-brand/30 bg-surface px-3 py-2 text-xs sm:text-sm font-extrabold text-brand-deep focus:border-brand focus:outline-none"
                >
                  {filteredLeadCourses.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title} — {c.fullName} ({c.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div className="rounded-2xl border border-brand/15 bg-surface px-3.5 py-2.5 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-brand">
                    Matched Desk • {matchedCourseObj?.affiliation}
                  </div>
                  <div className="text-xs font-extrabold text-brand-deep truncate">
                    {matchedDept?.name} ({matchedDept?.phoneDisplay})
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-accent/25 px-2 py-0.5 text-[10px] font-extrabold text-gold-text">
                  BSCC Ready
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-xs font-extrabold text-white shadow hover:bg-brand-deep transition-colors"
                >
                  <span>Complete Full Form</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href={quickWhatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-extrabold text-white shadow hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
