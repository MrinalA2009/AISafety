import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/main/Button";
import { ImpactStrip } from "../../components/main/ImpactStrip";
import { WorkshopPhoto } from "../../components/main/WorkshopPhoto";
import { sortedWorkshops, WORKSHOP_TOPICS } from "../../data/workshops";
import { CLEAR_STEPS } from "../../data/clear";

export const Route = createFileRoute("/_main/")({
  head: () => ({
    meta: [
      { title: "Can You Trust AI? - Ethos.AI" },
      { name: "description", content: "Practice verifying AI answers, spotting scams, and using AI responsibly in free, student-led workshops." },
      { property: "og:title", content: "Can You Trust AI? - Ethos.AI" },
      { property: "og:description", content: "Free, student-led workshops on verifying AI answers, spotting scams, and using AI responsibly." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      <Hero />
      <Mission />
      <Impact />
      <WorkshopTopics />
      <Clear />
      <RecentWorkshops />
      <HostCta />
      <ResearchTeaser />
      <AboutTeaser />
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-40 pb-24 text-center">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
          Free AI safety workshops, student-led
        </div>
        <h1 className="mt-4 font-display text-[clamp(3rem,8vw,5.5rem)] font-semibold tracking-tight leading-[1.02] text-balance">
          Can You Trust <span className="text-primary">AI?</span>
        </h1>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          Practice verifying AI answers, spotting scams, and using AI responsibly in free,
          student-led workshops for students, families, educators, and professionals.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button href="/workshops" variant="primary">Explore the workshops</Button>
          <Button href="/about" variant="ghost">Read our mission</Button>
        </div>
      </Reveal>
      <Reveal delay={280}>
        <div className="mt-6">
          <Link to="/wolf" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Explore WOLF Research →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function Mission() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <Reveal>
        <div className="rounded-3xl bg-surface-2 p-8 sm:p-12">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Our Mission</div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-tight max-w-3xl text-balance">
            An AI answer can sound certain and still be wrong. We teach people how to tell.
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            You don't need to know how to train a model to look up an original source, notice
            that a question assumes its own conclusion, or confirm a message through a trusted
            channel. Our workshops start with those everyday decisions and explain the technology
            behind them along the way, so more people can use AI without giving up their own judgment.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Impact() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Impact</div>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
          Community reached so far
        </h2>
      </Reveal>
      <div className="mt-10">
        <ImpactStrip />
      </div>
    </section>
  );
}

function WorkshopTopics() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">What We Teach</div>
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

function Clear() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">The CLEAR Method</div>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl text-balance">
          Five habits for asking better questions and checking what comes back
        </h2>
      </Reveal>
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {CLEAR_STEPS.map((s, i) => (
          <Reveal key={s.letter} delay={i * 60}>
            <li className="h-full list-none rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
              <div className="font-display text-3xl font-semibold text-primary" aria-hidden="true">{s.letter}</div>
              <h3 className="mt-2 font-display text-base font-semibold tracking-tight">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function RecentWorkshops() {
  const recent = sortedWorkshops().slice(0, 3);
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <Reveal>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Workshop Archive</div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              Recent workshops
            </h2>
          </div>
          <Button href="/workshops" variant="ghost">See every workshop</Button>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {recent.map((w, i) => (
          <Reveal key={w.slug} delay={i * 80}>
            <Link
              to="/workshops/$slug"
              params={{ slug: w.slug }}
              className="group block h-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <WorkshopPhoto workshop={w} className="aspect-[4/3] w-full overflow-hidden" />
              <div className="p-5">
                <div className="text-xs text-muted-foreground">{w.dateLabel}, {w.format}</div>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight leading-snug group-hover:text-primary transition-colors">
                  {w.title}
                </h3>
                {w.guest && (
                  <p className="mt-2 text-xs text-muted-foreground">With {w.guest.name}</p>
                )}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function HostCta() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <Reveal>
        <div className="rounded-3xl bg-primary p-8 sm:p-12 text-primary-foreground">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl text-balance">
            Bring a workshop to your school, library, or community group
          </h2>
          <p className="mt-4 max-w-xl opacity-90 leading-relaxed">
            Sessions are free, interactive, and need no technical background. Tell us about your
            audience and we'll tailor the topics.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-primary transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Ask about hosting
            </Link>
          </div>
        </div>
      </Reveal>
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
              Founded and led by Mrinal Agarwal
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Mrinal is a senior at Emerald High School in Dublin, California, and an AI safety
              researcher. After studying deception in language models, he started this free
              workshop series so everyone can learn to check what AI tells them.
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
