import { useEffect, useRef, useState } from "react";
import type { JSAnimation } from "animejs";
import { countUp, prefersReducedMotion } from "../lib/animations";

export function useAnimeCounter(to: number, opts: { duration?: number } = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const instanceRef = useRef<JSAnimation | null>(null);
  const [value, setValue] = useState(prefersReducedMotion() ? to : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const proxy = { value: 0 };
        instanceRef.current = countUp(proxy, to, {
          duration: opts.duration,
          onUpdate: (v) => setValue(Math.round(v)),
        }) as JSAnimation | null;
        io.disconnect();
      },
      { threshold: 0.5 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      instanceRef.current?.pause();
      instanceRef.current = null;
    };
  }, [to, opts.duration]);

  return { ref, value };
}
