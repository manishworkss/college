import React, { useState } from "react";
import { ArrowRight, Bell, MessageCircleHeart, Star, X } from "lucide-react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { CampusNoticeItem } from "../types/siteConfig";
import { HorizontalRail } from "./HorizontalRail";
import { AnimateOnScroll } from "./AnimateOnScroll";

export const TestimonialsSection: React.FC = () => {
  const { config } = useSiteConfig();
  const [activeNotice, setActiveNotice] = useState<CampusNoticeItem | null>(null);

  return (
    <section id="testimonials" className="scroll-mt-28 lg:scroll-mt-20 py-14 sm:py-18 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Horizontal "Student Corner & Latest Campus Buzz" */}
        <div className="space-y-6">
          <AnimateOnScroll variant="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-brand">
                  <Bell className="h-3.5 w-3.5" />
                  Notices, Events &amp; Student Corner
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-brand-deep">
                  {config.campusNotices.heading}
                </h2>
              </div>
              <p className="max-w-xl text-xs sm:text-sm text-slate-600">
                {config.campusNotices.subtitle}
              </p>
            </div>
          </AnimateOnScroll>

          <HorizontalRail
            ariaLabel="Campus Notices and Events"
            showControlsOnDesktop={false}
            className="lg:grid lg:grid-cols-4 lg:overflow-visible lg:gap-4 lg:pb-0"
          >
            {config.campusNotices.items.map((notice, idx) => (
              <AnimateOnScroll
                key={notice.id}
                variant="fade-up"
                delay={idx * 75}
                className="snap-start shrink-0 w-[80vw] sm:w-[300px] lg:w-auto flex"
              >
                <button
                  type="button"
                  onClick={() => setActiveNotice(notice)}
                  className="w-full text-left flex flex-col justify-between rounded-2xl border border-slate-200 bg-surface p-4 shadow-sm hover:border-brand hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-extrabold text-white">
                        {notice.tag}
                      </span>
                      <span className="text-[11px] font-bold text-gold-text">
                        {notice.dateLabel}
                      </span>
                    </div>
                    <h3 className="text-sm font-extrabold text-brand-deep leading-snug group-hover:text-brand transition-colors">
                      {notice.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">{notice.summary}</p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-200/70 inline-flex items-center gap-1 text-[11px] font-extrabold text-brand">
                    <span>View Update</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              </AnimateOnScroll>
            ))}
          </HorizontalRail>
        </div>

        {/* Horizontal Carousel of Student Testimonials */}
        <div className="space-y-6 border-t border-slate-200/80 pt-10">
          <AnimateOnScroll variant="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-gold-text">
                  <MessageCircleHeart className="h-3.5 w-3.5" />
                  Alumni &amp; Student Testimonials
                </span>
                <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-brand-deep">
                  {config.testimonialsSection.heading}
                </h2>
              </div>
              <p className="max-w-xl text-sm sm:text-base text-slate-600">
                {config.testimonialsSection.subtitle}
              </p>
            </div>
          </AnimateOnScroll>

          <HorizontalRail ariaLabel="Student Testimonials">
            {config.testimonialsSection.items.map((item, idx) => (
              <AnimateOnScroll
                key={item.id}
                variant="fade-up"
                delay={(idx % 4) * 80}
                className="snap-start shrink-0 w-[84vw] sm:w-[360px] lg:w-[375px] flex"
              >
                <article className="w-full flex flex-col justify-between rounded-3xl border border-slate-200 bg-surface p-6 shadow-sm hover:border-brand/50 hover:bg-white hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div
                        className="flex items-center gap-0.5"
                        aria-label={`${item.rating} out of 5 stars`}
                      >
                        {Array.from({ length: item.rating }).map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className="h-4 w-4 fill-accent text-accent"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-extrabold text-brand">
                        {item.course}
                      </span>
                    </div>

                    <p className="mt-4 text-sm sm:text-base italic text-slate-700 leading-relaxed">
                      &ldquo;{item.review}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3.5 border-t border-slate-200/80 pt-4">
                    {item.photo ? (
                      <img
                        src={item.photo}
                        alt={item.name}
                        loading="lazy"
                        className="h-11 w-11 rounded-full object-cover ring-2 ring-accent"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-deep text-xs font-extrabold text-accent ring-2 ring-accent/40"
                      >
                        {item.initials}
                      </div>
                    )}
                    <div className="min-w-0">
                      <h3 className="text-sm font-extrabold text-brand-deep truncate">{item.name}</h3>
                      <p className="text-xs font-medium text-slate-500 truncate">{item.batch}</p>
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </HorizontalRail>
        </div>
      </div>

      {/* Campus Notice Detail Modal */}
      {activeNotice && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeNotice.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setActiveNotice(null)}
        >
          <div
            className="animate-modal-in w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="inline-block rounded-full bg-brand px-3 py-0.5 text-[11px] font-extrabold text-white">
                  {activeNotice.tag} • {activeNotice.dateLabel}
                </span>
                <h3 className="mt-2 text-lg font-extrabold text-brand-deep">
                  {activeNotice.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveNotice(null)}
                aria-label="Close notice modal"
                className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{activeNotice.summary}</p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setActiveNotice(null)}
                className="rounded-full border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600"
              >
                Close
              </button>
              <a
                href={activeNotice.targetHref}
                onClick={() => setActiveNotice(null)}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2 text-xs font-extrabold text-white hover:bg-brand-deep"
              >
                <span>Open Section</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
