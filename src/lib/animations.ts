import { animate, stagger, type AnimationParams } from "animejs";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function fadeUpIn(
  targets: Parameters<typeof animate>[0],
  opts: { delay?: number; duration?: number; distance?: number } = {},
) {
  if (prefersReducedMotion()) {
    return animate(targets, { opacity: 1, translateY: 0, duration: 1 });
  }
  return animate(targets, {
    opacity: [0, 1],
    translateY: [opts.distance ?? 24, 0],
    duration: opts.duration ?? 700,
    delay: opts.delay ?? 0,
    ease: "outQuart",
  });
}

export function staggerIn(
  targets: Parameters<typeof animate>[0],
  opts: { delayEach?: number; duration?: number; distance?: number } = {},
) {
  if (prefersReducedMotion()) {
    return animate(targets, { opacity: 1, translateY: 0, duration: 1 });
  }
  return animate(targets, {
    opacity: [0, 1],
    translateY: [opts.distance ?? 20, 0],
    duration: opts.duration ?? 600,
    delay: stagger(opts.delayEach ?? 80),
    ease: "outQuart",
  });
}

export function countUp(
  target: { value: number },
  to: number,
  opts: { duration?: number; onUpdate: (value: number) => void },
) {
  if (prefersReducedMotion()) {
    opts.onUpdate(to);
    return null;
  }
  return animate(target, {
    value: to,
    duration: opts.duration ?? 1600,
    ease: "outCubic",
    onUpdate: () => opts.onUpdate(target.value),
  });
}

export function crossFadeSection(
  el: Parameters<typeof animate>[0],
  opts: { onComplete?: () => void } = {},
) {
  if (prefersReducedMotion()) {
    opts.onComplete?.();
    return null;
  }
  return animate(el, {
    opacity: [0, 1],
    scale: [0.98, 1],
    duration: 550,
    ease: "outQuad",
    ...(opts.onComplete ? { onComplete: opts.onComplete } : {}),
  });
}

export type { AnimationParams };
