import React from "react";
import { ShieldCheck } from "lucide-react";
import { AccreditationSeal } from "../types/siteConfig";
import { AnimateOnScroll } from "./AnimateOnScroll";

interface Props {
  seals: AccreditationSeal[];
}

export const AccreditationSeals: React.FC<Props> = ({ seals }) => {
  return (
    <div className="horizontal-rail flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
      {seals.map((seal, idx) => (
        <AnimateOnScroll
          key={seal.code}
          variant="scale-in"
          delay={idx * 65}
          className="snap-start shrink-0 min-w-[215px] lg:min-w-0 flex"
        >
          <div className="w-full flex items-center gap-3 rounded-2xl border border-brand/15 bg-white px-4 py-3 shadow-sm hover:border-accent hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-accent ring-2 ring-accent/35 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-extrabold tracking-wider text-brand-deep">
                {seal.name}
              </div>
              <p className="truncate text-[11px] text-slate-600" title={seal.subtitle}>
                {seal.subtitle}
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
};
