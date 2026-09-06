import { useEffect, useRef } from "react";
import type { JSAnimation } from "animejs";
import { fadeUpIn, staggerIn } from "../lib/animations";

export function useAnimeReveal<T extends HTMLElement>(
  opts: { stagger?: boolean; delay?: number; delayEach?: number } = {},
) {
  const ref = useRef<T | null>(null);
  const instanceRef = useRef<JSAnimation | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const targets = opts.stagger ? el.children : el;
        instanceRef.current = (
          opts.stagger
            ? staggerIn(targets, { delayEach: opts.delayEach })
            : fadeUpIn(targets, { delay: opts.delay })
        ) as JSAnimation;
        io.disconnect();
      },
      { threshold: 0.15 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      instanceRef.current?.pause();
      instanceRef.current = null;
    };
  }, [opts.stagger, opts.delay, opts.delayEach]);

  return ref;
}
