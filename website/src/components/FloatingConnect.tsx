import React, { useState } from "react";
import { ArrowUpRight, MessageCircle, Phone, X } from "lucide-react";
import { useSiteConfig } from "../context/SiteConfigContext";

export const FloatingConnect: React.FC = () => {
  const { config } = useSiteConfig();
  const [mode, setMode] = useState<"whatsapp" | "call" | null>(null);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5">
      {mode && (
        <div className="animate-modal-in w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-deep">
              {mode === "whatsapp" ? "WhatsApp Counseling" : "Call Department Desk"}
            </span>
            <button
              type="button"
              onClick={() => setMode(null)}
              aria-label="Close quick connect menu"
              className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="space-y-2">
            {config.departments.map((dept) => (
              <a
                key={dept.key}
                href={
                  mode === "whatsapp"
                    ? `https://wa.me/${dept.whatsappRaw}`
                    : `tel:${dept.phoneRaw}`
                }
                target={mode === "whatsapp" ? "_blank" : undefined}
                rel={mode === "whatsapp" ? "noreferrer" : undefined}
                onClick={() => setMode(null)}
                className={`flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-xs font-bold transition-colors ${
                  mode === "whatsapp"
                    ? "bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
                    : "bg-surface text-brand-deep hover:bg-brand/10"
                }`}
              >
                <div className="min-w-0">
                  <div className="truncate font-extrabold">{dept.name}</div>
                  <div className="text-[11px] opacity-80">{dept.phoneDisplay}</div>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Horizontal Floating Action Pill */}
      <div className="animate-float-subtle flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/95 p-1.5 shadow-xl backdrop-blur-md">
        <button
          type="button"
          onClick={() => setMode(mode === "whatsapp" ? null : "whatsapp")}
          aria-label="WhatsApp options"
          className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3.5 py-2 text-xs font-extrabold text-white hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </button>

        <button
          type="button"
          onClick={() => setMode(mode === "call" ? null : "call")}
          aria-label="Call options"
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-deep px-3.5 py-2 text-xs font-extrabold text-white hover:bg-brand hover:scale-105 active:scale-95 transition-all"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Call</span>
        </button>

        <a
          href="#admission"
          className="inline-flex items-center gap-1 rounded-full bg-accent px-3.5 py-2 text-xs font-extrabold text-accent-ink hover:bg-accent-soft hover:scale-105 active:scale-95 transition-all"
        >
          <span>Apply</span>
        </a>
      </div>
    </div>
  );
};
