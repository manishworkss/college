import React, { useState } from "react";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Navigation,
  Phone,
  SlidersHorizontal,
} from "lucide-react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { AnimateOnScroll } from "./AnimateOnScroll";

export const ContactFooterSection: React.FC = () => {
  const { config, setConfigDrawerOpen, isCustomized } = useSiteConfig();
  const { contactSection, socialLinks, departments, institutions, navigation, branding } = config;

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribedEmail, setSubscribedEmail] = useState<string | null>(() => {
    try {
      return localStorage.getItem("sp_newsletter_email");
    } catch {
      return null;
    }
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newsletterEmail.trim();
    if (!trimmed) return;
    setSubscribedEmail(trimmed);
    setNewsletterEmail("");
    try {
      localStorage.setItem("sp_newsletter_email", trimmed);
    } catch {
      // Ignore storage errors
    }
  };

  const mapQuery = encodeURIComponent(
    `${contactSection.coordinates.lat},${contactSection.coordinates.lng}`
  );
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <>
      {/* Contact & Campus Map Section */}
      <section id="contact" className="scroll-mt-28 lg:scroll-mt-20 py-14 sm:py-18 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <AnimateOnScroll variant="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-gold-text">
                  <MapPin className="h-3.5 w-3.5" />
                  Campus Helpdesk &amp; Directions
                </span>
                <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-brand-deep">
                  {contactSection.heading}
                </h2>
              </div>
              <p className="max-w-xl text-sm sm:text-base text-slate-600">
                {contactSection.subtitle}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Horizontal 3-Column Contact Strip */}
          <div className="horizontal-rail flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            <AnimateOnScroll variant="fade-up" delay={0} className="snap-start shrink-0 w-[82vw] sm:w-[320px] md:w-auto flex">
              <div className="w-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold text-brand-deep">Campus Address</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {contactSection.address} - {contactSection.pinCode}
                  </p>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-brand hover:text-brand-deep"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={90} className="snap-start shrink-0 w-[82vw] sm:w-[320px] md:w-auto flex">
              <div className="w-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold text-brand-deep">Campus Helplines</h3>
                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm font-semibold text-slate-700">
                    {contactSection.phones.map((ph) => (
                      <a
                        key={ph}
                        href={`tel:${ph.replace(/\s+/g, "")}`}
                        className="hover:text-brand underline-offset-2 hover:underline"
                      >
                        {ph}
                      </a>
                    ))}
                  </div>
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="h-3.5 w-3.5 text-brand" />
                    <span>{contactSection.officeHours}</span>
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={180} className="snap-start shrink-0 w-[82vw] sm:w-[320px] md:w-auto flex">
              <div className="w-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold text-brand-deep">Official Email &amp; Socials</h3>
                  <a
                    href={`mailto:${contactSection.email}`}
                    className="mt-1 block truncate text-sm font-semibold text-slate-700 hover:text-brand"
                  >
                    {contactSection.email}
                  </a>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {socialLinks.map((soc) => (
                      <a
                        key={soc.id}
                        href={soc.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-surface border border-slate-200 px-3 py-1 text-[11px] font-bold text-brand-deep hover:bg-brand hover:border-brand hover:text-white transition-colors"
                      >
                        <span>{soc.label}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Horizontal Map + Department Direct Desk Split */}
          <AnimateOnScroll variant="fade-up" delay={120}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-7 min-w-0 overflow-hidden rounded-3xl border-4 border-white shadow-xl min-h-[320px] bg-slate-200">
                <iframe
                  title="SHAHEED PRAMOD Group of Education Location Map"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  className="min-h-[320px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="lg:col-span-5 min-w-0 rounded-3xl bg-brand-deep p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between gap-4">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-accent">
                    Departmental Direct Contacts
                  </span>
                  <h3 className="mt-1 text-xl font-extrabold">
                    Reach the Right College Wing Instantly
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {departments.map((dept) => (
                    <div
                      key={dept.key}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 hover:bg-white/15 hover:border-accent/40 transition-all"
                    >
                      <div className="min-w-0">
                        <div className="text-xs font-extrabold text-white truncate">{dept.name}</div>
                        <div className="text-[11px] text-accent-soft truncate">
                          {dept.coursesCovered.join(" • ")}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={`tel:${dept.phoneRaw}`}
                          className="rounded-lg bg-white/15 px-2.5 py-1.5 text-[11px] font-bold hover:bg-white hover:text-brand-deep transition-colors"
                        >
                          Call
                        </a>
                        <a
                          href={`https://wa.me/${dept.whatsappRaw}`}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg bg-accent px-2.5 py-1.5 text-[11px] font-extrabold text-accent-ink hover:bg-accent-soft transition-colors"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Flagship University Footer */}
      <footer className="bg-brand-deep text-white pt-14 pb-8 border-t-4 border-brand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Brand Overview */}
            <div className="lg:col-span-4 min-w-0 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={branding.logoUrl}
                  alt={branding.logoAlt}
                  className="h-12 w-12 rounded-full bg-white object-cover ring-2 ring-accent"
                />
                <div>
                  <div className="text-lg font-extrabold">{branding.groupName}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                    {branding.groupSubtitle}
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {branding.tagline}
              </p>
              <div className="flex flex-wrap gap-2">
                {config.accreditations.slice(0, 4).map((acc) => (
                  <span
                    key={acc.code}
                    className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-extrabold tracking-wider text-accent-soft"
                  >
                    {acc.code}
                  </span>
                ))}
              </div>
            </div>

            {/* Working Anchor Navigation */}
            <div className="lg:col-span-2 min-w-0 space-y-3">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-accent">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 text-xs text-slate-300">
                {navigation.map((item) => (
                  <a
                    key={`foot-${item.href}`}
                    href={item.href}
                    className="hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Our Colleges Portals */}
            <div className="lg:col-span-3 min-w-0 space-y-3">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-accent">
                Our Colleges
              </h4>
              <div className="space-y-2.5 text-xs text-slate-300">
                {institutions.items.map((inst) => (
                  <a
                    key={`finst-${inst.id}`}
                    href={inst.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:border-accent/60 hover:text-white transition-colors"
                  >
                    <span className="font-semibold truncate">{inst.name}</span>
                    <ExternalLink className="h-3.5 w-3.5 shrink-0 text-accent" />
                  </a>
                ))}
              </div>
            </div>

            {/* Working Newsletter Form */}
            <div className="lg:col-span-3 min-w-0 space-y-3">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-accent">
                Admissions Updates
              </h4>
              <p className="text-xs text-slate-300">
                Subscribe for 2026 admission dates, scholarship alerts &amp; campus notices.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email address"
                  aria-label="Newsletter email address"
                  className="min-w-0 flex-1 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-slate-400 focus:border-accent focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-xl bg-accent px-4 py-2 text-xs font-extrabold text-accent-ink hover:bg-accent-soft transition-colors"
                >
                  Join
                </button>
              </form>
              {subscribedEmail && (
                <p className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  <span>Subscribed: {subscribedEmail}</span>
                </p>
              )}
            </div>
          </div>

          {/* Bottom Copyright + Live Config Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400">
            <p>
              &copy; {branding.copyrightYear} {branding.groupName} {branding.groupSubtitle}. All
              Rights Reserved.
            </p>
            <button
              type="button"
              onClick={() => setConfigDrawerOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[11px] font-bold text-accent-soft hover:bg-white/15 transition-colors"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>
                {isCustomized ? "Customize Site Config (Modified)" : "Configure Homepage Live"}
              </span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};
