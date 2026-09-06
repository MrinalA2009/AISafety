import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { crossFadeSection, prefersReducedMotion } from "../lib/animations";

function isWolfPath(pathname: string) {
  return pathname === "/wolf" || pathname.startsWith("/wolf/");
}

export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const prevPathRef = useRef(pathname);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const crossedSection = isWolfPath(prevPathRef.current) !== isWolfPath(pathname);

  useEffect(() => {
    const el = wrapperRef.current;
    if (el && crossedSection && !prefersReducedMotion()) {
      crossFadeSection(el);
    }
    prevPathRef.current = pathname;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const hideForCrossfade = crossedSection && !prefersReducedMotion();

  return (
    <div
      ref={wrapperRef}
      key={pathname}
      className={hideForCrossfade ? "" : "animate-route-in"}
      style={hideForCrossfade ? { opacity: 0 } : undefined}
    >
      {children}
    </div>
  );
}
