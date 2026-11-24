import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { SLIDE_DECKS } from "../../../data/slideDecks";
import { SLIDE_ALT } from "../../../data/slideAlt";
import { assetUrl } from "../../../lib/assetUrl";

export const Route = createFileRoute("/_main/slides/$deck")({
  loader: ({ params }) => {
    const deck = SLIDE_DECKS.find((d) => d.id === params.deck);
    if (!deck) throw notFound();
    return deck;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} slides - Ethos.AI` },
          { name: "description", content: loaderData.blurb },
        ]
      : [],
  }),
  component: DeckPage,
});

const pad = (n: number) => String(n).padStart(2, "0");

function DeckPage() {
  const deck = Route.useLoaderData();
  const [index, setIndex] = useState(0); // 0-based
  const stage = useRef<HTMLDivElement>(null);
  const total = deck.pages;
  const alts = SLIDE_ALT[deck.id] ?? [];

  const go = useCallback((n: number) => setIndex(Math.min(total - 1, Math.max(0, n))), [total]);

  // Restore slide from the URL hash (#12) so a slide can be shared.
  useEffect(() => {
    const n = parseInt(window.location.hash.slice(1), 10);
    if (n >= 1 && n <= total) setIndex(n - 1);
  }, [total]);
  useEffect(() => {
    history.replaceState(null, "", `#${index + 1}`);
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === "SELECT" || t.tagName === "INPUT") return;
      if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); go(index + 1); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); go(index - 1); }
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(total - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, total]);

  // Preload neighbours so clicking through feels instant.
  useEffect(() => {
    [index + 1, index + 2, index - 1].forEach((i) => {
      if (i >= 0 && i < total) new Image().src = assetUrl(`/slides/${deck.id}/${pad(i + 1)}.jpg`);
    });
  }, [index, total, deck.id]);

  const fullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else stage.current?.requestFullscreen?.().catch(() => {});
  };

  const btn =
    "rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium transition hover:border-black/20 hover:shadow-sm disabled:opacity-40 disabled:hover:shadow-none";

  return (
    <div className="mx-auto max-w-5xl px-6 pt-32 pb-24">
      <Link to="/slides" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        ← All workshop slides
      </Link>
      <h1 className="mt-4 font-display text-2xl sm:text-3xl font-semibold tracking-tight">{deck.title}</h1>

      <div ref={stage} className="mt-6 bg-black rounded-2xl overflow-hidden">
        <img
          key={index}
          src={assetUrl(`/slides/${deck.id}/${pad(index + 1)}.jpg`)}
          alt={alts[index] ? `Slide ${index + 1}: ${alts[index]}` : `Slide ${index + 1} of ${total}`}
          className="block w-full aspect-video object-contain"
          onClick={() => go(index + 1)}
        />
      </div>

      <div
        className="mt-3 h-1 w-full overflow-hidden rounded-full bg-black/10"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={index + 1}
        aria-label="Slide progress"
      >
        <div className="h-full bg-primary transition-[width] duration-200" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <button type="button" className={btn} onClick={() => go(index - 1)} disabled={index === 0}>
          ← Previous
        </button>
        <div className="flex items-center gap-3 text-sm text-muted-foreground" aria-live="polite">
          <label htmlFor="slide-jump" className="sr-only">Jump to slide</label>
          <select
            id="slide-jump"
            value={index}
            onChange={(e) => go(Number(e.target.value))}
            className="rounded-full border border-black/10 bg-white px-3 py-2 text-sm text-foreground"
          >
            {Array.from({ length: total }, (_, i) => (
              <option key={i} value={i}>Slide {i + 1}</option>
            ))}
          </select>
          <span>of {total}</span>
          <button type="button" className="underline hover:text-primary" onClick={fullscreen}>
            Fullscreen
          </button>
        </div>
        <button type="button" className={btn} onClick={() => go(index + 1)} disabled={index === total - 1}>
          Next →
        </button>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">Tip: use the left and right arrow keys.</p>
    </div>
  );
}
