import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Check,
  CheckCircle2,
  Clock,
  GraduationCap,
  Phone,
  Scale,
  Search,
  X,
} from "lucide-react";
import { CourseFilterSelection, useSiteConfig } from "../context/SiteConfigContext";
import { CourseItem } from "../types/siteConfig";
import { HorizontalRail } from "./HorizontalRail";
import { AnimateOnScroll } from "./AnimateOnScroll";

type DurationFilter = "All" | "1 Year" | "2 Years" | "3 Years" | "4 Years";

export const CoursesSection: React.FC = () => {
  const {
    config,
    courseCategoryFilter,
    setCourseCategoryFilter,
    applyToAdmission,
  } = useSiteConfig();

  const [durationFilter, setDurationFilter] = useState<DurationFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [detailCourse, setDetailCourse] = useState<CourseItem | null>(null);
  const [compareIds, setCompareIds] = useState<string[]>([]);

  const categories: CourseFilterSelection[] = ["All", "Education", "Nursing", "Higher Education"];
  const durations: DurationFilter[] = ["All", "1 Year", "2 Years", "3 Years", "4 Years"];

  useEffect(() => {
    if (!detailCourse) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDetailCourse(null);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [detailCourse]);

  const filteredCourses = useMemo(() => {
    return config.coursesSection.items.filter((course) => {
      const matchesCat =
        courseCategoryFilter === "All" || course.category === courseCategoryFilter;
      const matchesDuration = durationFilter === "All" || course.duration === durationFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.fullName.toLowerCase().includes(q) ||
        course.scope.toLowerCase().includes(q) ||
        course.category.toLowerCase().includes(q);
      return matchesCat && matchesDuration && matchesSearch;
    });
  }, [config.coursesSection.items, courseCategoryFilter, durationFilter, searchQuery]);

  const comparedCourses = useMemo(
    () => config.coursesSection.items.filter((c) => compareIds.includes(c.id)),
    [config.coursesSection.items, compareIds]
  );

  const toggleCompare = (id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      if (prev.length >= 3) return [...prev.slice(1), id];
      return [...prev, id];
    });
  };

  const handleApplyForCourse = (courseTitle: string) => {
    setDetailCourse(null);
    applyToAdmission({ course: courseTitle });
  };

  const getDepartment = (deptKey: CourseItem["departmentKey"]) =>
    config.departments.find((d) => d.key === deptKey) ?? config.departments[0];

  return (
    <section id="courses" className="scroll-mt-28 lg:scroll-mt-20 py-14 sm:py-18 bg-white border-b border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Heading + Search Bar */}
        <AnimateOnScroll variant="fade-up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-gold-text">
                <BookOpen className="h-3.5 w-3.5" />
                Discover Career Programs
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-brand-deep">
                {config.coursesSection.heading}
              </h2>
              <p className="mt-1.5 max-w-2xl text-sm sm:text-base text-slate-600">
                {config.coursesSection.subtitle}
              </p>
            </div>

            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search B.Ed, Nursing, BCA, B.Lis..."
                aria-label="Search academic courses"
                className="w-full rounded-full border border-slate-200 bg-surface py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/15 transition-all"
              />
            </div>
          </div>
        </AnimateOnScroll>

        {/* Horizontal Two-Facet Filter Row: Wing + Duration + Compare Counter */}
        <AnimateOnScroll variant="fade-up" delay={80}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* Category / Wing Filter Strip */}
            <div className="horizontal-rail flex items-center gap-2 overflow-x-auto pb-1">
              {categories.map((cat) => {
                const count =
                  cat === "All"
                    ? config.coursesSection.items.length
                    : config.coursesSection.items.filter((c) => c.category === cat).length;
                const active = courseCategoryFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCourseCategoryFilter(cat)}
                    className={`shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all active:scale-95 ${
                      active
                        ? "bg-brand text-white shadow-md"
                        : "border border-slate-200 bg-surface text-slate-700 hover:border-brand/40 hover:bg-white"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-extrabold ${
                        active ? "bg-accent text-accent-ink" : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Duration Filter Pills */}
            <div className="horizontal-rail flex items-center gap-1.5 overflow-x-auto pb-1">
              <span className="shrink-0 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mr-1">
                Duration:
              </span>
              {durations.map((dur) => {
                const active = durationFilter === dur;
                return (
                  <button
                    key={dur}
                    type="button"
                    onClick={() => setDurationFilter(dur)}
                    className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-bold transition-all active:scale-95 ${
                      active
                        ? "bg-brand-deep text-white shadow-xs"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-brand/30"
                    }`}
                  >
                    {dur}
                  </button>
                );
              })}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Interactive Side-by-Side Horizontal Compare Drawer Tray (when >= 1 course pinned) */}
        {comparedCourses.length > 0 && (
          <div className="animate-content-in rounded-3xl border border-brand/25 bg-surface p-4 sm:p-5 shadow-md space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Scale className="h-4 w-4 text-brand" />
                <span className="text-xs sm:text-sm font-extrabold text-brand-deep">
                  Program Side-by-Side Comparison ({comparedCourses.length}/3 Selected)
                </span>
              </div>
              <button
                type="button"
                onClick={() => setCompareIds([])}
                className="rounded-full bg-white border border-slate-200 px-3 py-1 text-[11px] font-bold text-slate-600 hover:bg-slate-100"
              >
                Clear Compare
              </button>
            </div>

            <div className="horizontal-rail flex gap-3 overflow-x-auto pb-1 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
              {comparedCourses.map((c) => (
                <div
                  key={`cmp-${c.id}`}
                  className="shrink-0 w-[76vw] sm:w-[270px] lg:w-auto rounded-2xl border border-slate-200 bg-white p-3.5 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                    <div className="min-w-0">
                      <div className="text-sm font-extrabold text-brand-deep truncate">{c.title}</div>
                      <div className="text-[11px] text-slate-500 truncate">{c.fullName}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleCompare(c.id)}
                      aria-label={`Remove ${c.title} from comparison`}
                      className="rounded-full p-1 text-slate-400 hover:bg-slate-100"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                    <div>
                      <span className="text-slate-400 font-bold">Duration:</span>{" "}
                      <span className="font-extrabold text-slate-800">{c.duration}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold">Wing:</span>{" "}
                      <span className="font-extrabold text-slate-800">{c.category}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-400 font-bold">Eligibility:</span>{" "}
                      <span className="font-extrabold text-slate-800">{c.eligibility}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-400 font-bold">Career:</span>{" "}
                      <span className="font-extrabold text-brand">{c.scope}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleApplyForCourse(c.title)}
                    className="w-full rounded-xl bg-brand py-1.5 text-xs font-extrabold text-white hover:bg-brand-deep transition-colors"
                  >
                    Apply for {c.title}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Horizontal Split Course Cards */}
        {filteredCourses.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-surface p-10 text-center">
            <p className="text-base font-bold text-brand-deep">
              No programs match your current filter{searchQuery ? ` ("${searchQuery}")` : ""}.
            </p>
            <button
              type="button"
              onClick={() => {
                setCourseCategoryFilter("All");
                setDurationFilter("All");
                setSearchQuery("");
              }}
              className="mt-3 rounded-full bg-brand px-5 py-2 text-xs font-bold text-white"
            >
              Reset Filters & Show All Programs
            </button>
          </div>
        ) : (
          <HorizontalRail
            ariaLabel="Academic Programs"
            showControlsOnDesktop={false}
            className="lg:grid lg:grid-cols-2 lg:overflow-visible lg:gap-5 lg:pb-0"
          >
            {filteredCourses.map((course, idx) => {
              const isCompared = compareIds.includes(course.id);
              const isPortrait = course.posterAspect === "portrait";
              const isPurePhoto = course.id === "deled";
              return (
                <AnimateOnScroll
                  key={course.id}
                  variant="fade-up"
                  delay={(idx % 4) * 70}
                  className="snap-start shrink-0 w-[90vw] sm:w-[500px] lg:w-auto flex"
                >
                  <article
                    className={`w-full flex flex-row overflow-hidden rounded-3xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${
                      isCompared
                        ? "border-brand bg-white ring-2 ring-brand/20"
                        : "border-slate-200 bg-surface/80 hover:border-brand/50 hover:bg-white"
                    }`}
                  >
                    {/* Left Image Box — fits seamlessly edge-to-edge without forced square framing */}
                    <div
                      className={`shrink-0 bg-white border-r border-slate-100 flex items-center justify-center overflow-hidden ${
                        isPortrait ? "w-36 sm:w-[186px]" : "w-[172px] sm:w-[266px]"
                      }`}
                    >
                      <img
                        src={course.image}
                        alt={`${course.title} — ${course.fullName}`}
                        loading="lazy"
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-[1.03] ${
                          isPortrait || isPurePhoto
                            ? "object-cover object-center"
                            : "object-contain"
                        }`}
                      />
                    </div>

                    {/* Right Details Panel */}
                    <div className="flex flex-1 flex-col justify-between p-2.5 sm:p-5 min-w-0">
                      <div>
                        <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                          <span className="rounded-full bg-brand/10 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-brand">
                            {course.category}
                          </span>
                          <button
                            type="button"
                            onClick={() => toggleCompare(course.id)}
                            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-extrabold transition-all whitespace-nowrap active:scale-95 ${
                              isCompared
                                ? "bg-brand text-white"
                                : "bg-slate-200/70 text-slate-600 hover:bg-brand/15 hover:text-brand"
                            }`}
                          >
                            {isCompared ? (
                              <Check className="h-3 w-3" />
                            ) : (
                              <Scale className="h-3 w-3" />
                            )}
                            <span>{isCompared ? "Pinned" : "Compare"}</span>
                          </button>
                        </div>

                        <div className="mt-1.5 sm:mt-2 flex items-baseline justify-between gap-1.5 sm:gap-2">
                          <h3 className="text-base sm:text-xl font-extrabold text-brand-deep truncate group-hover:text-brand transition-colors">
                            {course.title}
                          </h3>
                          <span className="text-[9px] sm:text-[10px] font-bold text-gold-text truncate">
                            {course.affiliation}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs font-semibold text-slate-500 truncate">
                          {course.fullName}
                        </p>

                        {/* Horizontal Mini Info Grid */}
                        <div className="mt-2 sm:mt-3 grid grid-cols-2 gap-1 sm:gap-2 text-[10px] sm:text-xs">
                          <div className="rounded-xl bg-white border border-slate-200/70 px-2 sm:px-2.5 py-1 sm:py-2">
                            <div className="flex items-center gap-1 text-[8px] sm:text-[10px] font-bold uppercase text-slate-400">
                              <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brand" />
                              Duration
                            </div>
                            <div className="mt-0.5 font-extrabold text-slate-800">
                              {course.duration}
                            </div>
                          </div>
                          <div className="rounded-xl bg-white border border-slate-200/70 px-2 sm:px-2.5 py-1 sm:py-2 min-w-0">
                            <div className="flex items-center gap-1 text-[8px] sm:text-[10px] font-bold uppercase text-slate-400">
                              <Award className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brand" />
                              Eligibility
                            </div>
                            <div
                              className="mt-0.5 font-extrabold text-slate-800 truncate"
                              title={course.eligibility}
                            >
                              {course.eligibility}
                            </div>
                          </div>
                          <div className="col-span-2 rounded-xl bg-white border border-slate-200/70 px-2 sm:px-2.5 py-1 sm:py-2 min-w-0">
                            <div className="flex items-center gap-1 text-[8px] sm:text-[10px] font-bold uppercase text-slate-400">
                              <Briefcase className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brand" />
                              Career Scope
                            </div>
                            <div className="mt-0.5 font-extrabold text-slate-800 truncate">
                              {course.scope}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Horizontal Button Row (always single-line buttons!) */}
                      <div className="mt-2.5 sm:mt-3.5 flex items-center gap-1.5 sm:gap-2">
                        <button
                          type="button"
                          onClick={() => setDetailCourse(course)}
                          className="flex-1 whitespace-nowrap rounded-xl border border-brand/25 bg-white px-2 sm:px-2.5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-extrabold text-brand-deep hover:bg-brand/5 transition-colors active:scale-95"
                        >
                          Details
                        </button>
                        <button
                          type="button"
                          onClick={() => handleApplyForCourse(course.title)}
                          className="flex-1 whitespace-nowrap inline-flex items-center justify-center gap-1 rounded-xl bg-brand px-2 sm:px-2.5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-extrabold text-white hover:bg-accent hover:text-accent-ink transition-all active:scale-95 group/btn"
                        >
                          <span>Apply</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                        </button>
                      </div>
                    </div>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </HorizontalRail>
        )}
      </div>

      {/* Horizontal Split Course Details Modal */}
      {detailCourse && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="course-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
          onClick={() => setDetailCourse(null)}
        >
          <div
            className="animate-modal-in relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setDetailCourse(null)}
              aria-label="Close course modal"
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-brand hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12">
              <div className="sm:col-span-5 bg-surface p-4 flex items-center justify-center border-r border-slate-100">
                <img
                  src={detailCourse.image}
                  alt={detailCourse.fullName}
                  className="max-h-72 sm:max-h-96 w-auto rounded-2xl object-contain shadow-md"
                />
              </div>

              <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 pr-8">
                    <span className="rounded-full bg-brand px-3 py-0.5 text-[11px] font-bold text-white">
                      {detailCourse.category}
                    </span>
                    <span className="rounded-full bg-accent/25 px-3 py-0.5 text-[11px] font-bold text-brand-deep">
                      {detailCourse.affiliation}
                    </span>
                  </div>

                  <h3 id="course-modal-title" className="mt-3 text-2xl font-extrabold text-brand-deep">
                    {detailCourse.title} — {detailCourse.fullName}
                  </h3>

                  <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs">
                    <div className="rounded-xl bg-surface p-3">
                      <div className="font-bold text-slate-400 uppercase">Duration</div>
                      <div className="mt-0.5 font-extrabold text-brand-deep">
                        {detailCourse.duration}
                      </div>
                    </div>
                    <div className="rounded-xl bg-surface p-3">
                      <div className="font-bold text-slate-400 uppercase">Eligibility</div>
                      <div className="mt-0.5 font-extrabold text-brand-deep">
                        {detailCourse.eligibility}
                      </div>
                    </div>
                    <div className="col-span-2 rounded-xl bg-surface p-3">
                      <div className="font-bold text-slate-400 uppercase">Career Scope</div>
                      <div className="mt-0.5 font-extrabold text-brand-deep">
                        {detailCourse.scope}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      <GraduationCap className="h-3.5 w-3.5 text-brand" />
                      Program Highlights
                    </div>
                    {detailCourse.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  {(() => {
                    const dept = getDepartment(detailCourse.departmentKey);
                    return (
                      <a
                        href={`tel:${dept.phoneRaw}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-brand"
                      >
                        <Phone className="h-3.5 w-3.5 text-brand" />
                        <span>Dept: {dept.phoneDisplay}</span>
                      </a>
                    );
                  })()}
                  <button
                    type="button"
                    onClick={() => handleApplyForCourse(detailCourse.title)}
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-xs sm:text-sm font-extrabold text-white hover:bg-accent hover:text-accent-ink transition-colors"
                  >
                    <span>Apply for {detailCourse.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
