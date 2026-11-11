import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalRailProps {
  children: React.ReactNode;
  ariaLabel: string;
  className?: string;
  showControlsOnDesktop?: boolean;
}

export const HorizontalRail: React.FC<HorizontalRailProps> = ({
  children,
  ariaLabel,
  className = "",
  showControlsOnDesktop = true,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.max(280, Math.round(el.clientWidth * 0.8));
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="relative w-full max-w-full min-w-0 group/rail">
      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        className={`horizontal-rail flex w-full max-w-full gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 ${className}`}
      >
        {children}
      </div>

      <div
        className={`mt-2 flex items-center justify-end gap-2 ${
          showControlsOnDesktop ? "" : "lg:hidden"
        }`}
      >
        <span className="mr-auto text-xs font-medium text-slate-500">
          Swipe or use arrows to browse horizontally
        </span>
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          aria-label={`Scroll ${ariaLabel} left`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand/20 bg-white text-brand-deep shadow-sm hover:bg-brand hover:text-white transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          aria-label={`Scroll ${ariaLabel} right`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand/20 bg-white text-brand-deep shadow-sm hover:bg-brand hover:text-white transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
