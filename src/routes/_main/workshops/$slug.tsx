import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "../../../components/Reveal";
import { Button } from "../../../components/main/Button";
import { WorkshopPhoto } from "../../../components/main/WorkshopPhoto";
import { WORKSHOPS } from "../../../data/workshops";
import { deckForWorkshop } from "../../../data/slideDecks";
import { assetUrl } from "../../../lib/assetUrl";

export const Route = createFileRoute("/_main/workshops/$slug")({
  loader: ({ params }) => {
    const workshop = WORKSHOPS.find((w) => w.slug === params.slug);
    if (!workshop) throw notFound();
    return workshop;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} - Ethos.AI` },
          { name: "description", content: loaderData.recap },
        ]
      : [],
  }),
  component: WorkshopDetailPage,
});

function WorkshopDetailPage() {
  const w = Route.useLoaderData();
  const extraImages = w.images.slice(1);
  const deck = deckForWorkshop(w.slug);

  return (
    <div className="mx-auto max-w-3xl px-6 pt-36 pb-32">
      <Reveal>
        <Link to="/workshops" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          ← Back to the archive
        </Link>
        <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
          <span>{w.format}</span>
        </div>
        <h1 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
          {w.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {w.dateLabel}
          {w.time ? `, ${w.time}` : ""}, {w.location}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <WorkshopPhoto workshop={w} className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-3xl" />
      </Reveal>

      <Reveal delay={120}>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Mrinal's role</dt>
            <dd className="mt-1">{w.role}</dd>
          </div>
          {w.guest && (
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Guest</dt>
              <dd className="mt-1">
                {w.guest.name}, {w.guest.credit.toLowerCase()}
              </dd>
            </div>
          )}
        </dl>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-8 text-base text-foreground/85 leading-relaxed">{w.recap}</p>
      </Reveal>

      {w.topics.length > 0 && (
        <Reveal delay={200}>
          <div className="mt-8">
            <h2 className="font-display text-lg font-semibold tracking-tight">What we covered</h2>
            <ul className="mt-3 space-y-2">
              {w.topics.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}

      {extraImages.length > 0 && (
        <Reveal delay={240}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {extraImages.map((img) => (
              <figure key={img.src} className="overflow-hidden rounded-2xl border border-black/5">
                <img src={assetUrl(img.src)} alt={img.alt} loading="lazy" className="w-full object-cover" />
                {img.caption && (
                  <figcaption className="p-3 text-xs text-muted-foreground">{img.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </Reveal>
      )}

      <Reveal delay={260}>
        <div className="mt-10 flex flex-wrap gap-3">
          {w.related && (
            <Link to={w.related.to} hash={w.related.hash} className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              {w.related.label} →
            </Link>
          )}
          {deck && <Button href={`/slides/${deck.id}`} variant="primary">View the slides</Button>}
          {w.links.map((l) => (
            <Button key={l.url} href={l.url} variant="ghost" target="_blank" rel="noopener noreferrer">
              {l.label} ↗
            </Button>
          ))}
          <Button href="/contact" variant="primary">Host a workshop like this</Button>
        </div>
      </Reveal>
    </div>
  );
}
