import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "../../../components/Reveal";
import { Button } from "../../../components/main/Button";
import { UPCOMING } from "../../../data/workshops";

export const Route = createFileRoute("/_main/workshops/$slug")({
  loader: ({ params }) => {
    const workshop = UPCOMING.find((w) => w.slug === params.slug);
    if (!workshop) throw notFound();
    return workshop;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Ethos.AI` },
          { name: "description", content: loaderData.desc },
        ]
      : [],
  }),
  component: WorkshopDetailPage,
});

function WorkshopDetailPage() {
  const w = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-2xl px-6 pt-36 pb-32">
      <Reveal>
        <Link to="/workshops" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          ← Back to Workshops
        </Link>
        <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
          <span
            className={`rounded-full px-2.5 py-1 font-medium ${
              w.status === "Open" ? "bg-primary/10 text-primary" : "bg-surface-2 text-muted-foreground"
            }`}
          >
            {w.status}
          </span>
          <span>{w.format}</span>
        </div>
        <h1 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
          {w.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {w.date} · {w.time} · {w.location}
        </p>
        {w.audience && (
          <p className="mt-2 text-sm text-muted-foreground">Audience: {w.audience}</p>
        )}
      </Reveal>

      <Reveal delay={100}>
        <p className="mt-8 text-base text-foreground/85 leading-relaxed">{w.desc}</p>
      </Reveal>

      {w.learningOutcomes && w.learningOutcomes.length > 0 && (
        <Reveal delay={160}>
          <div className="mt-8">
            <h2 className="font-display text-lg font-semibold tracking-tight">What you'll learn</h2>
            <ul className="mt-3 space-y-2">
              {w.learningOutcomes.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}

      <Reveal delay={220}>
        <div className="mt-10 flex flex-wrap gap-3">
          {w.registerLink && (
            <Button href={w.registerLink} variant="primary" target="_blank" rel="noopener noreferrer">
              Register Now
            </Button>
          )}
          {w.recordingUrl && <Button href={w.recordingUrl} variant="ghost">Watch Recording</Button>}
          {w.slidesUrl && <Button href={w.slidesUrl} variant="ghost">View Slides</Button>}
        </div>
      </Reveal>
    </div>
  );
}
