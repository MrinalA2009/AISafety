import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  target,
  rel,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
}) {
  const base =
    "relative inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground shadow-sm hover:shadow-md hover:-translate-y-0.5"
      : "bg-white border border-black/10 text-foreground hover:border-black/20 hover:-translate-y-0.5 hover:shadow-sm";

  const handlers = { onClick };

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//") || href.startsWith("mailto:");
    if (!isExternal) {
      return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Link to={href as any} className={`${base} ${styles} ${className}`} {...handlers}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target={target} rel={rel} className={`${base} ${styles} ${className}`} {...handlers}>
        {children}
      </a>
    );
  }
  return (
    <button className={`${base} ${styles} ${className}`} {...handlers}>
      {children}
    </button>
  );
}
