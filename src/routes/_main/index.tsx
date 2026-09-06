import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/main/Button";
import { useAnimeCounter } from "../../hooks/useAnimeCounter";
import { UPCOMING, WORKSHOP_TOPICS } from "../../data/workshops";
import { RESOURCES, RESOURCE_TYPE_LABELS } from "../../data/resources";
import { IMPACT_STATS } from "../../data/impactStats";

export const Route = createFileRoute("/_main/")({
  head: () => ({
    meta: [
      { title: "Ethos.AI - AI Literacy & Safety Workshops" },
      { name: "description", content: "Workshops, resources, and research on AI safety and literacy - helping students, educators, and communities use AI responsibly." },
      { property: "og:title", content: "Ethos.AI - AI Literacy & Safety Workshops" },
      { property: "og:description", content: "Workshops, resources, and research on AI safety and literacy." },
    ],
  }),
  component: Home,
});

function Home() {
  const next = UPCOMING.find((w) => w.status === "Open") ?? UPCOMING[0];
  const past = UPCOMING.filter((w) => w.status !== "Open").slice(0, 2);

  return (
    <div>
      <Hero next={next} />
      <UpcomingWorkshop next={next} />
      <WhyItMatters />
      <WorkshopTopics />
      <ImpactStats />
      <PastWorkshopsPreview past={past} />
      <ResearchTeaser />
      <AboutTeaser />
    </div>
  );
}

function Hero({ next }: { next: (typeof UPCOMING)[number] }) {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-40 pb-24 text-center">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.3em] text-primary font-medium">AI Literacy &amp; Safety</div>
        <h1 className="mt-4 font-display text-[clamp(3.2rem,8vw,6rem)] font-semibold tracking-tight leading-[1.02] text-balance">
          Ethos.AI
        </h1>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-6 font-display text-2xl sm:text-3xl font-medium tracking-tight text-balance">
          Helping people understand and use <span className="text-primary">AI responsibly.</span>
        </p>
      </Reveal>
      <Reveal delay={180}>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          Free workshops teaching students, educators, and communities how to spot AI
          hallucinations, verify claims, write better prompts, understand AI's limitations,
          and make more informed decisions when using AI.
        </p>
      </Reveal>
      <Reveal delay={220}>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {next?.registerLink ? (
            <Button href={next.registerLink} variant="primary" target="_blank" rel="noopener noreferrer">
              Register for the Next Workshop
            </Button>
          ) : (
            <Button href="/workshops" variant="primary">Register for the Next Workshop</Button>
          )}
          <Button href="/workshops" variant="ghost">Explore Past Workshops</Button>
        </div>
      </Reveal>
      <Reveal delay={300}>
        <div className="mt-6">
          <Link to="/wolf" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Explore WOLF Research →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function UpcomingWorkshop({ next }: { next: (typeof UPCOMING)[number] }) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Next Workshop</div>
      </Reveal>
      <Reveal delay={60}>
        <div className="mt-4 rounded-3xl border border-black/5 bg-white p-8 sm:p-10 shadow-sm">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span
              className={`rounded-full px-2.5 py-1 font-medium ${
                next.status === "Open" ? "bg-primary/10 text-primary" : "bg-surface-2 text-muted-foreground"
              }`}
            >
              {next.status}
            </span>
            <span className="text-muted-foreground">{next.format}</span>
          </div>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl font-semibold tracking-tight">{next.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {next.date} · {next.time} · {next.location}
          </p>
          {next.audience && <p className="mt-2 text-sm text-muted-foreground">Audience: {next.audience}</p>}
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">{next.desc}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {next.registerLink && (
              <Button href={next.registerLink} variant="primary" target="_blank" rel="noopener noreferrer">
                Register Now
              </Button>
            )}
            <Button href={`/workshops/${next.slug}`} variant="ghost">Learn More</Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function WhyItMatters() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <Reveal>
        <div className="rounded-3xl bg-surface-2 p-8 sm:p-12">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Why This Matters</div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-tight max-w-2xl">
            Millions of people use AI every day - most have no way to tell when it's wrong.
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            AI is now part of school, work, research, and everyday decisions. But many people
            don't know when an answer is misleading, incomplete, fabricated, or simply overconfident.
            These workshops teach the skills to tell the difference - before it matters.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function WorkshopTopics() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Curriculum</div>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
          What the workshops cover
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {WORKSHOP_TOPICS.map((t, i) => (
          <Reveal key={t.title} delay={i * 60}>
            <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="font-display text-base font-semibold tracking-tight leading-snug">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ImpactStats() {
  const stats = [
    { label: "Workshop Attendees", value: IMPACT_STATS.attendeeCount, suffix: "+" },
    { label: "Sessions Hosted", value: IMPACT_STATS.sessionsHosted, suffix: "" },
    { label: "Resources Accessed", value: IMPACT_STATS.resourcesAccessedCount, suffix: "+" },
    { label: "Partner Events", value: IMPACT_STATS.partnerOrgs.length, suffix: "" },
  ];
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Impact</div>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
          Community reached so far
        </h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <StatTile key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </section>
  );
}

function StatTile({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: animated } = useAnimeCounter(value);
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="font-display text-3xl sm:text-4xl font-semibold text-primary">
        {animated}{suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
    </div>
  );
}

function PastWorkshopsPreview({ past }: { past: (typeof UPCOMING) }) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <Reveal>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Past Workshops &amp; Resources</div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              Recordings, slides &amp; guides
            </h2>
          </div>
          <Button href="/resources" variant="ghost">View All Resources</Button>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {(past.length > 0 ? past : UPCOMING.slice(0, 2)).map((w, i) => (
          <Reveal key={w.slug} delay={i * 80}>
            <Link to="/workshops/$slug" params={{ slug: w.slug }} className="block h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-display text-lg font-semibold tracking-tight">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </Link>
          </Reveal>
        ))}
        {RESOURCES.slice(0, 1).map((r, i) => (
          <Reveal key={r.id} delay={(past.length + i) * 80}>
            <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <span className="rounded-full bg-surface-2 px-2.5 py-1 text-[11px] tracking-wide text-muted-foreground">
                {RESOURCE_TYPE_LABELS[r.type]}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ResearchTeaser() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Research</div>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
          Research behind the workshops
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <div className="mt-8 rounded-3xl border border-black/5 bg-white p-8 sm:p-10 shadow-sm">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Featured Research</div>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold tracking-tight">WOLF</h3>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            A study of deception, trust, and reasoning in multi-agent AI systems - eight agents,
            one hundred runs, seven thousand statements measured. The findings behind these
            workshops come directly from this research.
          </p>
          <div className="mt-6">
            <Button href="/wolf" variant="primary">Explore WOLF Research</Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-32">
      <Reveal>
        <div className="rounded-3xl bg-surface-2 p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <div className="flex-1">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">About</div>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl font-semibold tracking-tight">
              Led by Mrinal Agarwal
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
              AI safety and interpretability researcher studying how AI systems reason, communicate,
              and sometimes mislead users - and teaching others to recognize it.
            </p>
            <div className="mt-6">
              <Button href="/about" variant="ghost">Read the Full Bio →</Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
