import { useEffect, useRef, useState, type RefObject } from "react";

interface ScrollAnimationOptions {
  /** Intersection threshold (0–1). Default 0.08 */
  threshold?: number;
  /** Root margin. Default "0px 0px -24px 0px" */
  rootMargin?: string;
  /** Only trigger once. Default true */
  triggerOnce?: boolean;
}

/**
 * Attaches an IntersectionObserver to track when an element enters the viewport.
 * Falls back to visible when IntersectionObserver is unavailable.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.08, rootMargin = "0px 0px -24px 0px", triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(
    () => typeof window !== "undefined" && typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(el);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}
