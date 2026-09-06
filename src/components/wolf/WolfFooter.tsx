import { Link } from "@tanstack/react-router";

export function WolfFooter() {
  return (
    <footer className="dark relative mt-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_12px_var(--gold)]" />
            <span className="font-display tracking-[0.2em] text-sm">WOLF</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            Werewolf-based Observations for LLM Deception and Falsehoods — a research platform
            for studying deception, trust, and social reasoning in artificial intelligence.
          </p>
          <p className="mt-6 text-xs text-muted-foreground/70">
            arXiv 2512.09187 · Mrinal Agarwal
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/wolf" className="hover:text-gold">Overview</Link></li>
            <li><Link to="/wolf/research" className="hover:text-gold">Research</Link></li>
            <li><Link to="/wolf/experience" className="hover:text-gold">Experience WOLF</Link></li>
            <li><Link to="/wolf/citations" className="hover:text-gold">Citations</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">Exit</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold">Back to Main Site</Link></li>
            <li><Link to="/workshops" className="hover:text-gold">Workshops &amp; Resources</Link></li>
          </ul>
        </div>
      </div>
      <div className="hairline" />
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between text-xs text-muted-foreground/70">
        <span>© {new Date().getFullYear()} WOLF Research</span>
        <span className="font-mono">arXiv · 2512.09187</span>
      </div>
    </footer>
  );
}
