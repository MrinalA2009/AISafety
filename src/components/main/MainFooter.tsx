import { Link } from "@tanstack/react-router";

export function MainFooter() {
  return (
    <footer className="relative mt-32 border-t border-black/5 bg-surface-2">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="font-display tracking-tight text-base font-semibold">Ethos.AI</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            AI safety and literacy education — workshops, research, and public resources
            for understanding and using AI responsibly.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/workshops" className="hover:text-primary">Workshops</Link></li>
            <li><Link to="/resources" className="hover:text-primary">Resources</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link to="/research" className="hover:text-primary">Research</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">Contact</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><a href="mailto:smmrinal2009@gmail.com" className="hover:text-primary">smmrinal2009@gmail.com</a></li>
            <li><Link to="/wolf" className="hover:text-primary">Explore WOLF Research ↗</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5" />
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between text-xs text-muted-foreground/70">
        <span>© {new Date().getFullYear()} Ethos.AI</span>
        <span>AI Education &amp; Research</span>
      </div>
    </footer>
  );
}
