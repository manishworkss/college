import React, { useEffect, useState } from "react";
import { Download, Palette, RotateCcw, Save, X } from "lucide-react";
import { THEME_PRESET_LIST } from "../config/themePresets";
import { useSiteConfig } from "../context/SiteConfigContext";
import { SiteConfig } from "../types/siteConfig";

export const ConfigDrawer: React.FC = () => {
  const {
    config,
    updateConfig,
    setThemePreset,
    resetConfig,
    isConfigDrawerOpen,
    setConfigDrawerOpen,
  } = useSiteConfig();

  const [groupName, setGroupName] = useState(config.branding.groupName);
  const [admissionsBadge, setAdmissionsBadge] = useState(config.branding.admissionsBadge);
  const [primaryTicker, setPrimaryTicker] = useState(config.announcements[0]?.text ?? "");
  const [contactEmail, setContactEmail] = useState(config.contactSection.email);
  const [jsonText, setJsonText] = useState(() => JSON.stringify(config, null, 2));
  const [error, setError] = useState("");
  const [savedNotice, setSavedNotice] = useState("");

  useEffect(() => {
    if (isConfigDrawerOpen) {
      setGroupName(config.branding.groupName);
      setAdmissionsBadge(config.branding.admissionsBadge);
      setPrimaryTicker(config.announcements[0]?.text ?? "");
      setContactEmail(config.contactSection.email);
      setJsonText(JSON.stringify(config, null, 2));
      setError("");
      setSavedNotice("");
    }
  }, [isConfigDrawerOpen, config]);

  if (!isConfigDrawerOpen) return null;

  const handleSaveQuickFields = (e: React.FormEvent) => {
    e.preventDefault();
    const next: SiteConfig = {
      ...config,
      branding: {
        ...config.branding,
        groupName,
        admissionsBadge,
      },
      announcements: config.announcements.map((item, idx) =>
        idx === 0 ? { ...item, text: primaryTicker } : item
      ),
      contactSection: {
        ...config.contactSection,
        email: contactEmail,
      },
    };
    updateConfig(next);
    setJsonText(JSON.stringify(next, null, 2));
    setError("");
    setSavedNotice("Live configuration updated!");
  };

  const handleApplyRawJson = () => {
    try {
      const parsed = JSON.parse(jsonText) as SiteConfig;
      if (!parsed.branding || !parsed.coursesSection || !parsed.institutions) {
        setError("JSON must include branding, institutions, and coursesSection keys.");
        return;
      }
      updateConfig(parsed);
      setError("");
      setSavedNotice("Full JSON configuration applied live!");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON syntax");
    }
  };

  const handleDownloadJson = () => {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "shaheed-pramod-site-config.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Live Website Configuration"
      className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm"
      onClick={() => setConfigDrawerOpen(false)}
    >
      <div
        className="h-full w-full max-w-xl overflow-y-auto bg-white p-6 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-gold-text">
              Dynamic Site &amp; Theme Engine
            </span>
            <h2 className="text-xl font-extrabold text-brand-deep">
              Configure Homepage Content Live
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setConfigDrawerOpen(false)}
            aria-label="Close config drawer"
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Live UI Theme Palette Selector */}
        <div className="rounded-2xl border border-slate-200 bg-surface p-4 space-y-2.5">
          <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-deep">
            <Palette className="h-4 w-4 text-brand" />
            <span>UI Color Theme Preset</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {THEME_PRESET_LIST.map((preset) => {
              const active = config.themePreset === preset.id;
              return (
                <button
                  key={`drawer-theme-${preset.id}`}
                  type="button"
                  onClick={() => setThemePreset(preset.id)}
                  className={`flex items-center gap-2 rounded-xl border p-2.5 text-left transition-all ${
                    active
                      ? "border-brand bg-white ring-2 ring-brand/25 shadow-sm"
                      : "border-slate-200 bg-white/70 hover:bg-white"
                  }`}
                >
                  <span className="flex -space-x-1 shrink-0">
                    <span
                      className="h-4 w-4 rounded-full border border-white"
                      style={{ backgroundColor: preset.swatchPrimary }}
                    />
                    <span
                      className="h-4 w-4 rounded-full border border-white"
                      style={{ backgroundColor: preset.swatchAccent }}
                    />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold text-brand-deep truncate">
                      {preset.label}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">{preset.tagline}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {savedNotice && (
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2.5 text-xs font-bold text-emerald-800">
            {savedNotice}
          </div>
        )}
        {error && (
          <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-2.5 text-xs font-bold text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSaveQuickFields} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Group Name</label>
              <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Admissions Badge
              </label>
              <input
                type="text"
                value={admissionsBadge}
                onChange={(e) => setAdmissionsBadge(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Primary Ticker Notice
            </label>
            <input
              type="text"
              value={primaryTicker}
              onChange={(e) => setPrimaryTicker(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Contact Email</label>
            <input
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-xs font-extrabold text-white hover:bg-accent hover:text-accent-ink transition-colors"
          >
            <Save className="h-4 w-4" />
            <span>Save Quick Changes</span>
          </button>
        </form>

        <div className="border-t border-slate-200 pt-5 space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-extrabold uppercase tracking-wider text-brand-deep">
              Full SiteConfig JSON
            </label>
            <button
              type="button"
              onClick={handleDownloadJson}
              className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:text-brand-deep"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Export JSON</span>
            </button>
          </div>
          <textarea
            rows={10}
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 font-mono text-[11px] text-slate-800 focus:border-brand focus:outline-none"
          />
          <div className="flex flex-wrap items-center justify-between gap-2">
            <button
              type="button"
              onClick={handleApplyRawJson}
              className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-xs font-extrabold text-accent-ink hover:bg-accent-soft transition-colors"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Apply JSON Live</span>
            </button>
            <button
              type="button"
              onClick={resetConfig}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset Default</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
