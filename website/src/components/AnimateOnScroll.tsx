import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "scale-in"
  | "slide-up";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  /** Delay in ms for staggered animations. */
  delay?: number;
  /** Duration in ms. Default 550. */
  duration?: number;
  className?: string;
}

const VARIANT_STYLES: Record<AnimationVariant, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-6",
    visible: "opacity-100 translate-y-0",
  },
  "fade-down": {
    hidden: "opacity-0 -translate-y-6",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 translate-x-6",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 -translate-x-6",
    visible: "opacity-100 translate-x-0",
  },
  fade: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  "scale-in": {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  "slide-up": {
    hidden: "opacity-0 translate-y-10",
    visible: "opacity-100 translate-y-0",
  },
};

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 550,
  className = "",
}) => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  const styles = VARIANT_STYLES[variant];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out will-change-transform ${
        isVisible ? styles.visible : styles.hidden
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
