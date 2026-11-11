import React, { useState } from "react";
import {
  ArrowRight,
  BadgeIndianRupee,
  Briefcase,
  CheckCircle2,
  Quote,
  Sparkles,
} from "lucide-react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { AnimateOnScroll } from "./AnimateOnScroll";

type AboutTab = "director" | "mission" | "vision" | "why" | "bscc";

export const AboutSection: React.FC = () => {
  const { config, applyToAdmission } = useSiteConfig();
  const { director, tabs } = config.aboutSection;
  const courses = config.coursesSection.items;

  const [activeTab, setActiveTab] = useState<AboutTab>("director");
  const [bsccCourse, setBsccCourse] = useState(courses[0]?.title ?? "B.Ed");
  const [biharResident, setBiharResident] = useState(true);

  const selectedMissionTab = tabs.find((t) => t.id === activeTab);
  const selectedCourseInfo = courses.find((c) => c.title === bsccCourse) ?? courses[0];

  return (
    <section
      id="about"
      className="scroll-mt-28 lg:scroll-mt-20 py-14 sm:py-18 bg-gradient-to-br from-brand-deep via-brand-via to-brand-deep text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Side: Director Portrait + Horizontal Key Stats */}
          <AnimateOnScroll variant="fade-right" className="lg:col-span-5 min-w-0 space-y-4">
            <div className="relative overflow-hidden rounded-3xl border-2 border-accent/40 bg-brand-deep shadow-2xl group">
              <img
                src={director.image}
                alt={director.name}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="bg-gradient-to-r from-brand-deep via-brand to-brand-deep px-5 py-4 border-t border-accent/30">
                <h3 className="text-lg sm:text-xl font-extrabold text-white">{director.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-accent">
                  {director.role}
                </p>
              </div>
            </div>

            {/* Horizontal Stats Strip */}
            <div className="grid grid-cols-3 gap-2.5">
              {director.stats.map((st, idx) => (
                <AnimateOnScroll key={st.label} variant="scale-in" delay={idx * 80}>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-3 text-center backdrop-blur-sm hover:bg-white/15 hover:-translate-y-0.5 hover:border-accent/40 transition-all duration-300">
                    <div className="text-lg sm:text-2xl font-extrabold text-accent">{st.value}</div>
                    <div className="mt-0.5 text-[11px] font-bold text-white leading-tight">
                      {st.label}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Right Side: Horizontal Tab Switcher (Director + Mission + Vision + Interactive BSCC Aid Checker) */}
          <AnimateOnScroll variant="fade-left" delay={100} className="lg:col-span-7 min-w-0 space-y-5">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                {director.sectionLabel}
              </span>
              <h2 className="mt-1.5 text-3xl sm:text-4xl font-extrabold leading-tight">
                {director.headline}
              </h2>
            </div>

            {/* Horizontal Tab Controls */}
            <div className="horizontal-rail flex gap-2 overflow-x-auto pb-1">
              <button
                type="button"
                onClick={() => setActiveTab("director")}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all active:scale-95 ${
                  activeTab === "director"
                    ? "bg-accent text-accent-ink shadow-md"
                    : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Director&apos;s Desk
              </button>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all active:scale-95 ${
                    activeTab === tab.id
                      ? "bg-accent text-accent-ink shadow-md"
                      : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {tab.tabLabel}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setActiveTab("bscc")}
                className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all active:scale-95 ${
                  activeTab === "bscc"
                    ? "bg-accent text-accent-ink shadow-md"
                    : "border border-accent/40 bg-brand text-accent-soft hover:bg-white/20"
                }`}
              >
                <BadgeIndianRupee className="h-3.5 w-3.5" />
                <span>BSCC Aid Checker</span>
              </button>
            </div>

            {/* Dynamic Tab Content Panel */}
            <div key={activeTab} className="animate-content-in rounded-3xl border border-white/15 bg-white/10 p-5 sm:p-7 backdrop-blur-md">
              {activeTab === "director" && (
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Quote className="h-6 w-6 shrink-0 text-accent" />
                    <p className="text-base sm:text-lg font-medium text-accent-soft leading-relaxed">
                      &ldquo;{director.paragraphs[0]}&rdquo;
                    </p>
                  </div>
                  {director.paragraphs.slice(1).map((p, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {activeTab !== "director" && activeTab !== "bscc" && selectedMissionTab && (
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-accent">
                    {selectedMissionTab.heading}
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
                    &ldquo;{selectedMissionTab.statement}&rdquo;
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {selectedMissionTab.points.map((pt) => (
                      <div
                        key={pt}
                        className="rounded-2xl border border-white/15 bg-brand-deep/60 p-3 text-xs text-slate-200 flex items-start gap-2"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "bscc" && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-accent">
                      Bihar Student Credit Card &amp; Aid Guidance
                    </h3>
                    <span className="rounded-full bg-white/15 px-3 py-0.5 text-[11px] font-bold text-accent-soft">
                      Interactive Helper
                    </span>
                  </div>

                  {/* Horizontal Inputs Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-200 mb-1">
                        Choose Your Program
                      </label>
                      <select
                        value={bsccCourse}
                        onChange={(e) => setBsccCourse(e.target.value)}
                        className="w-full rounded-xl border border-white/25 bg-brand-deep px-3 py-2 text-xs sm:text-sm font-bold text-white focus:border-accent focus:outline-none"
                      >
                        {courses.map((c) => (
                          <option key={`bscc-${c.id}`} value={c.title}>
                            {c.title} ({c.duration})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <span className="block text-[11px] font-bold text-slate-200 mb-1">
                        Permanent Residence Status
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setBiharResident(true)}
                          className={`rounded-xl py-2 text-xs font-extrabold transition-colors ${
                            biharResident
                              ? "bg-accent text-accent-ink"
                              : "border border-white/20 bg-white/5 text-white"
                          }`}
                        >
                          Bihar Resident
                        </button>
                        <button
                          type="button"
                          onClick={() => setBiharResident(false)}
                          className={`rounded-xl py-2 text-xs font-extrabold transition-colors ${
                            !biharResident
                              ? "bg-accent text-accent-ink"
                              : "border border-white/20 bg-white/5 text-white"
                          }`}
                        >
                          Other State
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-accent/35 bg-brand-deep/70 p-4 space-y-2.5">
                    <div className="text-xs sm:text-sm font-extrabold text-accent-soft">
                      {biharResident
                        ? `Eligible for Campus BSCC / DRCC Documentation Guidance (${selectedCourseInfo?.title})`
                        : `Eligible for Campus Merit Aid & Fee Installment Counseling (${selectedCourseInfo?.title})`}
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {biharResident
                        ? "Our campus helpdesk provides bonafide certificates, fee structure letters, and DRCC Muzaffarpur guidance for eligible higher & professional courses under Bihar Student Credit Card norms (up to ₹4 Lakh scheme limit, subject to govt. course list approval)."
                        : "Students from outside Bihar receive institutional counseling for fee schedule planning and merit scholarships directly at our Susta Madhopur admission desk."}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <span className="text-[11px] text-slate-300">
                        Required: 10th/12th Marksheet, Aadhaar, Residential Cert
                      </span>
                      <button
                        type="button"
                        onClick={() => applyToAdmission({ course: bsccCourse })}
                        className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-extrabold text-accent-ink hover:bg-accent-soft transition-colors"
                      >
                        <span>Book Free Counseling</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </AnimateOnScroll>
        </div>

        {/* Parul-Style Horizontal Career Sectors & Placement Readiness Strip */}
        <div className="border-t border-white/15 pt-10 space-y-5">
          <AnimateOnScroll variant="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-accent">
                  <Briefcase className="h-3.5 w-3.5" />
                  Career Pathways &amp; Outcomes
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">
                  {config.careerTracks.heading}
                </h3>
              </div>
              <p className="max-w-xl text-xs sm:text-sm text-slate-300">
                {config.careerTracks.subtitle}
              </p>
            </div>
          </AnimateOnScroll>

          <div className="horizontal-rail flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
            {config.careerTracks.items.map((track, idx) => (
              <AnimateOnScroll
                key={track.id}
                variant="fade-up"
                delay={idx * 85}
                className="snap-start shrink-0 w-[78vw] sm:w-[290px] lg:w-auto flex"
              >
                <div className="w-full rounded-2xl border border-white/15 bg-white/8 p-4 backdrop-blur-sm hover:border-accent/60 hover:bg-white/12 hover:-translate-y-1 transition-all duration-300 space-y-2">
                  <span className="inline-block rounded-full bg-accent/20 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-accent">
                    {track.wing}
                  </span>
                  <h4 className="text-base font-extrabold text-white">{track.sector}</h4>
                  <p className="text-xs font-semibold text-accent-soft">{track.roles}</p>
                  <p className="text-[11px] text-slate-300 pt-1 border-t border-white/10">
                    {track.highlights}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
