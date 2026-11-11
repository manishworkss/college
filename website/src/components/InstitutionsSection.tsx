import React from "react";
import { ArrowRight, Building2, ExternalLink, Phone } from "lucide-react";
import { CourseFilterSelection, useSiteConfig } from "../context/SiteConfigContext";
import { AccreditationSeals } from "./AccreditationSeals";
import { HorizontalRail } from "./HorizontalRail";
import { AnimateOnScroll } from "./AnimateOnScroll";

const INSTITUTION_TO_CATEGORY: Record<string, CourseFilterSelection> = {
  "bed-college": "Education",
  "higher-education": "Higher Education",
  "nursing-institute": "Nursing",
};

export const InstitutionsSection: React.FC = () => {
  const { config, setCourseCategoryFilter } = useSiteConfig();

  const handleViewWingCourses = (instId: string) => {
    const cat = INSTITUTION_TO_CATEGORY[instId] ?? "All";
    setCourseCategoryFilter(cat);
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="institutions" className="scroll-mt-28 lg:scroll-mt-20 py-14 sm:py-18 bg-surface border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-9">
        {/* Horizontal Regulatory & Accreditation Ribbon */}
        <AnimateOnScroll variant="fade-up">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand">
                Recognitions & Academic Affiliations
              </span>
              <span className="text-xs font-medium text-slate-500">
                Statutory approvals across Teacher Education, Nursing & Higher Education
              </span>
            </div>
            <AccreditationSeals seals={config.accreditations} />
          </div>
        </AnimateOnScroll>

        {/* Section Heading */}
        <AnimateOnScroll variant="fade-up" delay={100}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-gold-text">
                <Building2 className="h-3.5 w-3.5" />
                Constituent Academic Wings
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-brand-deep">
                {config.institutions.heading}
              </h2>
            </div>
            <p className="max-w-xl text-sm sm:text-base text-slate-600">
              {config.institutions.subtitle}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Horizontal Institution Cards (3-col Desktop, Horizontal Snap Rail on Mobile) */}
        <HorizontalRail
          ariaLabel="Our Institutions"
          showControlsOnDesktop={false}
          className="lg:grid lg:grid-cols-3 lg:overflow-visible lg:gap-6 lg:pb-0"
        >
          {config.institutions.items.map((inst, idx) => (
            <AnimateOnScroll
              key={inst.id}
              variant="fade-up"
              delay={idx * 100}
              className="snap-start shrink-0 w-[86vw] sm:w-[420px] lg:w-auto flex"
            >
              <article className="w-full flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-brand/40 transition-all duration-300 group">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={inst.image}
                    alt={inst.name}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
                    <span className="rounded-full bg-brand px-3 py-1 text-[11px] font-bold text-white shadow">
                      {inst.badge}
                    </span>
                    <span className="rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-brand-deep backdrop-blur-sm">
                      {inst.established}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-extrabold text-brand-deep group-hover:text-brand transition-colors">
                    {inst.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{inst.affiliation}</p>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                    {inst.description}
                  </p>

                  {/* Horizontal Clickable Programs Strip (jumps & filters Courses) */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {inst.programs.map((prog) => (
                      <button
                        key={prog}
                        type="button"
                        onClick={() => handleViewWingCourses(inst.id)}
                        className="rounded-lg bg-brand/8 px-2.5 py-1 text-[11px] font-bold text-brand-deep hover:bg-brand hover:text-white transition-colors active:scale-95"
                      >
                        {prog}
                      </button>
                    ))}
                  </div>

                  {/* Horizontal Card Footer Actions */}
                  <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-4">
                    <a
                      href={`tel:${inst.helpline.replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-brand whitespace-nowrap"
                    >
                      <Phone className="h-3.5 w-3.5 text-brand" />
                      <span>{inst.helpline}</span>
                    </a>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleViewWingCourses(inst.id)}
                        className="inline-flex items-center gap-1 rounded-full border border-brand/20 bg-white px-3 py-1.5 text-[11px] font-extrabold text-brand hover:bg-brand hover:text-white transition-colors whitespace-nowrap group/btn active:scale-95"
                      >
                        <span>Courses</span>
                        <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                      </button>
                      <a
                        href={inst.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${inst.name} official portal`}
                        className="inline-flex items-center gap-1 rounded-full bg-brand-deep/8 px-3 py-1.5 text-[11px] font-extrabold text-brand-deep hover:bg-brand-deep hover:text-white transition-colors whitespace-nowrap"
                      >
                        <span>Portal</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </HorizontalRail>
      </div>
    </section>
  );
};
