import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in ms before the reveal starts (for stagger). */
  delay?: number;
  /** Once visible, stay revealed. Default true. */
  once?: boolean;
  as?: "div" | "section" | "article" | "header" | "span" | "li" | "figure";
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < vh * 0.95 && rect.bottom > vh * 0.05;
}

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Enable hide-until-reveal only after mount (avoids blank SSR/hydration)
    setReady(true);

    if (prefersReducedMotion() || isInViewport(el)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(el);

    const fallback = window.setTimeout(() => setVisible(true), 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [once]);

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "reveal",
        ready && !visible && "reveal-pending",
        visible && "reveal-visible",
        className,
      )}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

type CountUpProps = {
  end: number;
  suffix?: string;
  prefix?: string;
  /** Animation length in ms. */
  duration?: number;
  /** Wait before starting (e.g. after hero fade-in). */
  delay?: number;
  className?: string;
};

export function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  delay = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setValue(end);
      setStarted(true);
      return;
    }

    let startTimeout: number | undefined;
    let observer: IntersectionObserver | undefined;

    const begin = () => {
      startTimeout = window.setTimeout(() => setStarted(true), delay);
    };

    if (isInViewport(el)) {
      begin();
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            begin();
            observer?.disconnect();
          }
        },
        { threshold: 0.35 },
      );
      observer.observe(el);
    }

    return () => {
      observer?.disconnect();
      if (startTimeout) window.clearTimeout(startTimeout);
    };
  }, [end, delay]);

  useEffect(() => {
    if (!started) return;
    if (prefersReducedMotion()) {
      setValue(end);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out expo — starts fast, settles on the final number
      const eased = 1 - Math.pow(1 - t, 4);
      setValue(Math.round(end * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
      else setValue(end);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
