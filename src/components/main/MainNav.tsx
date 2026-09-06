import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const items = [
  { to: "/", label: "Home" },
  { to: "/workshops", label: "Workshops" },
  { to: "/resources", label: "Resources" },
  { to: "/blog", label: "Blog" },
  { to: "/research", label: "Research" },
  { to: "/about", label: "About" },
] as const;

export function MainNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[min(1040px,calc(100vw-1.25rem))]">
      <nav
        className={`bg-white/90 backdrop-blur-md border border-black/5 rounded-full flex items-center justify-between pl-3 pr-2 transition-all duration-500 ${
          scrolled ? "py-1.5 shadow-md" : "py-2 shadow-sm"
        }`}
      >
        <Link to="/" className="flex items-center pl-3 pr-3 group">
          <span className="font-display font-semibold tracking-tight text-[15px]">Ethos.AI</span>
        </Link>

        <ul className="hidden md:flex items-center gap-0.5 relative">
          {items.map((it) => {
            const active = pathname === it.to;
            return (
              <li key={it.to}>
                <Link
                  to={it.to}
                  className={`relative inline-flex items-center px-3.5 py-1.5 rounded-full text-[12.5px] tracking-wide transition-colors duration-300 ${
                    active ? "text-primary-foreground" : "text-foreground/65 hover:text-foreground"
                  }`}
                >
                  {active && <span className="absolute inset-0 -z-10 rounded-full bg-primary" />}
                  {it.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          <Link
            to="/wolf"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-black/10 px-3.5 py-1.5 text-[12px] font-medium tracking-wide text-foreground/80 hover:border-black/20 hover:text-foreground transition"
          >
            Explore WOLF Research
            <span className="opacity-70">↗</span>
          </Link>
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden h-9 w-9 inline-flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-black/5"
            aria-label="Toggle menu"
          >
            <span className={`h-px w-4 bg-foreground transition-transform ${mobileOpen ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-foreground transition-transform ${mobileOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden mt-2 bg-white border border-black/5 rounded-3xl overflow-hidden shadow-lg transition-all duration-400 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="py-2">
          {items.map((it) => {
            const active = pathname === it.to;
            return (
              <li key={it.to}>
                <Link
                  to={it.to}
                  className={`flex items-center justify-between px-5 py-3 text-sm ${
                    active ? "text-primary font-medium" : "text-foreground/80"
                  }`}
                >
                  <span>{it.label}</span>
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                </Link>
              </li>
            );
          })}
          <li className="border-t border-black/5 mt-1 pt-1">
            <Link to="/wolf" className="flex items-center justify-between px-5 py-3 text-sm text-primary font-medium">
              Explore WOLF Research ↗
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
