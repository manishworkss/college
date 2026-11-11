import React, { useEffect, useMemo, useState } from "react";
import { Camera, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { GalleryCategory } from "../types/siteConfig";
import { AnimateOnScroll } from "./AnimateOnScroll";

export const GallerySection: React.FC = () => {
  const { config } = useSiteConfig();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const categories: GalleryCategory[] = [
    "All",
    "Academics & Labs",
    "Nursing & Health",
    "Events & Samaroh",
  ];

  const items = useMemo(() => {
    if (activeCategory === "All") return config.gallerySection.items;
    return config.gallerySection.items.filter((g) => g.category === activeCategory);
  }, [config.gallerySection.items, activeCategory]);

  // Repeat base items if sparse (e.g. filtered to 3 items) so each half exceeds viewport width,
  // then duplicate once for exact 50% seamless CSS translateX(-50%) looping.
  const baseTrackItems = useMemo(() => {
    if (items.length === 0) return [];
    const reps = items.length < 5 ? Math.ceil(6 / items.length) : 1;
    return Array.from({ length: reps }, () => items).flat();
  }, [items]);

  const marqueeItems = useMemo(() => [...baseTrackItems, ...baseTrackItems], [baseTrackItems]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight") setLightboxIdx((i) => (i === null ? 0 : (i + 1) % items.length));
      if (e.key === "ArrowLeft")
        setLightboxIdx((i) => (i === null ? 0 : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, items.length]);

  const activePhoto = lightboxIdx !== null ? items[lightboxIdx] : null;

  return (
    <section id="gallery" className="scroll-mt-28 lg:scroll-mt-20 py-14 sm:py-18 bg-white border-b border-slate-200/70 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header + Horizontal Filter Bar */}
        <AnimateOnScroll variant="fade-up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-gold-text">
                <Camera className="h-3.5 w-3.5" />
                Life at Campus
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-brand-deep">
                {config.gallerySection.heading}
              </h2>
              <p className="mt-1.5 max-w-xl text-sm sm:text-base text-slate-600">
                {config.gallerySection.subtitle}
              </p>
            </div>

            <div className="horizontal-rail shrink-0 flex gap-2 overflow-x-auto pb-1 pr-1">
              {categories.map((cat) => {
                const count =
                  cat === "All"
                    ? config.gallerySection.items.length
                    : config.gallerySection.items.filter((i) => i.category === cat).length;
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat);
                      setLightboxIdx(null);
                    }}
                    className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold transition-all active:scale-95 ${
                      active
                        ? "bg-brand text-white shadow-sm"
                        : "border border-slate-200 bg-surface text-slate-700 hover:border-brand/40"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] font-extrabold ${
                        active ? "bg-accent text-accent-ink" : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Full-Width Continuous Seamless Marquee Showcase */}
      <AnimateOnScroll variant="fade" delay={100} className="mt-6">
        <div className="marquee-wrapper overflow-hidden w-full">
          <div
            key={activeCategory}
            className="marquee-track-gallery py-2"
            style={{ animationDuration: `${Math.max(26, baseTrackItems.length * 4.5)}s` }}
          >
            {marqueeItems.map((photo, idx) => (
              <div key={`${photo.id}-${idx}`} className="shrink-0 pr-4">
                <button
                  type="button"
                  onClick={() => setLightboxIdx(idx % items.length)}
                  className="w-[78vw] sm:w-[330px] lg:w-[350px] text-left overflow-hidden rounded-3xl border border-slate-200 bg-surface shadow-sm hover:border-brand/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-brand-deep/85 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                      {photo.category}
                    </span>
                    <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-brand-deep opacity-90 group-hover:bg-accent group-hover:scale-110 transition-all shadow">
                      <Maximize2 className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-extrabold text-brand-deep truncate group-hover:text-brand transition-colors">
                      {photo.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 line-clamp-2">{photo.caption}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Keyboard-Accessible Lightbox */}
      {activePhoto && lightboxIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={() => setLightboxIdx(null)}
        >
          <div
            className="animate-modal-in relative w-full max-w-4xl overflow-hidden rounded-3xl bg-brand-deep text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxIdx(null)}
              aria-label="Close lightbox"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-accent hover:text-accent-ink transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative flex items-center justify-center bg-black">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="max-h-[70vh] w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => setLightboxIdx((lightboxIdx - 1 + items.length) % items.length)}
                aria-label="Previous photo"
                className="absolute left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-accent hover:text-accent-ink transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIdx((lightboxIdx + 1) % items.length)}
                aria-label="Next photo"
                className="absolute right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-accent hover:text-accent-ink transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 p-5">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent">
                  {activePhoto.category} • {lightboxIdx + 1} / {items.length}
                </span>
                <h3 className="text-lg font-extrabold">{activePhoto.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300">{activePhoto.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
