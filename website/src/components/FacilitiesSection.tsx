import React, { useEffect, useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, Layers, Pause, Play } from "lucide-react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { AnimateOnScroll } from "./AnimateOnScroll";

export const FacilitiesSection: React.FC = () => {
  const { config } = useSiteConfig();
  const facilities = config.facilitiesSection.items;
  const [activeIdx, setActiveIdx] = useState(0);
  const [autoTour, setAutoTour] = useState(false);

  useEffect(() => {
    if (!autoTour || facilities.length <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIdx((i) => (i + 1) % facilities.length);
    }, 3800);
    return () => window.clearInterval(timer);
  }, [autoTour, facilities.length]);

  const current = facilities[activeIdx] ?? facilities[0];
  if (!current) return null;

  const prev = () => setActiveIdx((i) => (i - 1 + facilities.length) % facilities.length);
  const next = () => setActiveIdx((i) => (i + 1) % facilities.length);

  return (
    <section id="facilities" className="scroll-mt-28 lg:scroll-mt-20 py-14 sm:py-18 bg-surface border-b border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header + Auto-Tour & Arrows */}
        <AnimateOnScroll variant="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-gold-text">
                <Layers className="h-3.5 w-3.5" />
                Campus Virtual Showcase
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-brand-deep">
                {config.facilitiesSection.heading}
              </h2>
              <p className="mt-1.5 max-w-2xl text-sm sm:text-base text-slate-600">
                {config.facilitiesSection.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setAutoTour((v) => !v)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-extrabold transition-all active:scale-95 ${
                  autoTour
                    ? "bg-brand text-white shadow"
                    : "border border-brand/20 bg-white text-brand-deep hover:bg-brand/5"
                }`}
              >
                {autoTour ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                <span>{autoTour ? "Pause Tour" : "Auto-Tour"}</span>
              </button>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous facility"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-white text-brand-deep shadow-sm hover:bg-brand hover:text-white hover:scale-105 active:scale-95 transition-all"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next facility"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-white text-brand-deep shadow-sm hover:bg-brand hover:text-white hover:scale-105 active:scale-95 transition-all"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Horizontal Facility Tabs */}
        <AnimateOnScroll variant="fade-up" delay={75}>
          <div className="horizontal-rail flex gap-2 overflow-x-auto pb-1">
            {facilities.map((fac, idx) => {
              const active = idx === activeIdx;
              return (
                <button
                  key={fac.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all active:scale-95 ${
                    active
                      ? "bg-brand text-white shadow-md"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-brand/40"
                  }`}
                >
                  0{idx + 1}. {fac.name}
                </button>
              );
            })}
          </div>
        </AnimateOnScroll>

        {/* Horizontal Split Showcase Card */}
        <AnimateOnScroll variant="scale-in" delay={120}>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 min-w-0 relative aspect-[16/10] bg-slate-100 overflow-hidden">
              <img
                key={current.id}
                src={current.image}
                alt={current.name}
                className="h-full w-full object-cover animate-content-in"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-brand-deep/90 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                Facility 0{activeIdx + 1} of 0{facilities.length}
              </div>
            </div>

            <div className="lg:col-span-5 min-w-0 p-6 sm:p-8 flex flex-col justify-between space-y-5">
              <div key={`info-${current.id}`} className="animate-content-in">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold-text">
                  {current.tagline}
                </span>
                <h3 className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-brand-deep">
                  {current.name}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {current.description}
                </p>

                {/* Horizontal Metrics Chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {current.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-brand/15 bg-surface px-3 py-1.5 text-xs font-bold text-brand-deep"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand" />
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Horizontal Mini Thumbnail Switcher Strip */}
              <div className="border-t border-slate-100 pt-4">
                <div className="horizontal-rail flex gap-2 overflow-x-auto pb-1">
                  {facilities.map((fac, idx) => (
                    <button
                      key={`thumb-${fac.id}`}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      aria-label={`View ${fac.name}`}
                      className={`shrink-0 h-14 w-20 overflow-hidden rounded-xl border-2 transition-all ${
                        idx === activeIdx
                          ? "border-accent ring-2 ring-accent/40 scale-105"
                          : "border-transparent opacity-65 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={fac.image}
                        alt={fac.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
