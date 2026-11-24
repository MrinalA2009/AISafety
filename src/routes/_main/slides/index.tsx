import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../../../components/Reveal";
import { SLIDE_DECKS } from "../../../data/slideDecks";
import { assetUrl } from "../../../lib/assetUrl";

export const Route = createFileRoute("/_main/slides/")({
  head: () => ({
    meta: [
      { title: "Workshop Slides - Ethos.AI" },
      { name: "description", content: "Click through the slides from each Can You Trust AI? workshop, right in your browser." },
    ],
  }),
  component: SlidesPage,
});

function SlidesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-36 pb-32">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Slides</div>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">Workshop slides</h1>
        <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
          Pick a workshop and click through its slides here. Use the arrow keys or the buttons.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {SLIDE_DECKS.map((d, i) => (
          <Reveal key={d.id} delay={i * 80}>
            <Link
              to="/slides/$deck"
              params={{ deck: d.id }}
              className="group block h-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={assetUrl(`/slides/${d.id}/01.jpg`)}
                alt={`Title slide: ${d.title}`}
                loading="lazy"
                className="aspect-video w-full object-cover"
              />
              <div className="p-6">
                <div className="text-xs text-muted-foreground">{d.pages} slides</div>
                <h2 className="mt-2 font-display text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                  {d.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.blurb}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
