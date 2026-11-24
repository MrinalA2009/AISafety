import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Reveal } from "../../../components/Reveal";
import { Button } from "../../../components/main/Button";
import { ImpactStrip } from "../../../components/main/ImpactStrip";
import { WorkshopPhoto } from "../../../components/main/WorkshopPhoto";
import { deckForWorkshop } from "../../../data/slideDecks";
import { FEEDBACK } from "../../../data/feedback";
import { CLEAR_STEPS, CLEAR_NOTE } from "../../../data/clear";
import { LEARN_CARDS, AUDIENCES, WORKSHOP_TOPICS, TAGS, sortedWorkshops, type Workshop } from "../../../data/workshops";

export const Route = createFileRoute("/_main/workshops/")({
  head: () => ({
    meta: [
      { title: "Workshop Archive - Ethos.AI" },
      { name: "description", content: "Every Can You Trust AI? workshop so far: dates, guests, recaps, and photos." },
      { property: "og:title", content: "AI Literacy & Safety Workshops - Ethos.AI" },
      { property: "og:description", content: "Every free, student-led Can You Trust AI? session so far, with the people who joined us along the way." },
    ],
  }),
  component: WorkshopsPage,
});

function WorkshopsPage() {
  const archiveRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <WorkshopHero onViewArchive={() => scrollTo(archiveRef)} />
      <StatsSection />
      <FeaturedSection />
      <ArchiveSection ref={archiveRef} />
      <MissionSection />
      <TopicsSection />
      <ClearSection />
      <FeedbackSection />
      <LearnSection />
      <ResearchSection />
      <AudienceSection />
      <HostSection />
      <InstructorSection />
    </div>
  );
}

function WorkshopHero({
  onViewArchive,
}: {
  onViewArchive: () => void;
}) {
  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-40 pb-12 text-center">
        <Reveal delay={100}>
          <h1 className="mt-6 font-display text-[clamp(2.8rem,7vw,6rem)] font-light tracking-[-0.03em] leading-[1.02] text-balance">
            Workshop{" "}
            <span className="text-foreground/45">Archive</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
            Every free, student-led Can You Trust AI? session so far, with the people who joined us along the way.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-5 max-w-lg mx-auto text-sm text-muted-foreground/70 leading-relaxed text-pretty">
            Participants compare AI answers, check what sources actually say, and practice
            deciding when an answer needs more scrutiny.
          </p>
        </Reveal>

        <Reveal delay={440}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" onClick={onViewArchive}>
              Browse the archive
              <span className="opacity-75">↓</span>
            </Button>

          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-white border border-black/5 shadow-sm p-12 md:p-20">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] tracking-[0.3em] text-primary/80">THE MISSION</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-light tracking-tight leading-[1.06] text-balance">
              Bringing AI Safety Research
              <br />
              <span className="text-foreground/50">to the Public</span>
            </h2>
            <p className="mt-7 text-base text-muted-foreground leading-relaxed max-w-2xl">
              These workshops translate research on AI deception, trust, reasoning, hallucinations, and
              reliability into accessible public education. Participants learn not only what AI can do,
              but where it fails, why those failures happen, and how to recognize unreliable or misleading
              outputs before relying on them.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
              Rather than discussing AI conceptually, every session is highly interactive. Participants
              observe real examples of AI reasoning, hallucinations, fabricated citations, and
              confidence mismatches. Through guided demonstrations and audience participation, they build
              practical skills they can use immediately.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function LearnSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <div className="font-mono text-[11px] tracking-[0.3em] text-primary/80">CURRICULUM</div>
        <h2 className="mt-5 font-display text-4xl md:text-5xl font-light tracking-tight leading-[1.06] max-w-3xl text-balance">
          What Participants Learn
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {LEARN_CARDS.map((card, i) => (
          <Reveal key={card.title} delay={i * 80}>
            <LearnCard {...card} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function LearnCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white border border-black/5 shadow-sm group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-md cursor-default"
    >
      <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-accent/6 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div
        className="font-mono text-xl transition-colors duration-300"
        style={{ color: hovered ? "var(--primary)" : "color-mix(in oklab, var(--foreground) 30%, transparent)" }}
      >
        {icon}
      </div>
      <h3 className="mt-5 font-display text-[1.15rem] tracking-tight leading-snug">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-[1.7]">{body}</p>
    </article>
  );
}

function ResearchSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <Reveal>
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] text-primary/80">RESEARCH CONNECTION</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-light tracking-tight leading-[1.06] text-balance">
              Based on Real AI Deception Research
            </h2>
            <p className="mt-7 text-base text-muted-foreground leading-relaxed">
              The workshops are connected to WOLF, a research project studying deception, trust,
              suspicion, and detection in multi-agent AI systems. In WOLF, AI agents interact in a
              Werewolf-style environment where some agents must hide their true role while others
              attempt to identify deception.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Participants learn what findings like this reveal about AI reliability, trust, and the
              future of safer AI systems.
            </p>
            <div className="mt-8">
              <Button href="/wolf/research" variant="ghost">
                Explore the research
                <span className="opacity-70">→</span>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="relative overflow-hidden rounded-3xl bg-white border border-black/5 shadow-sm p-12 text-center">
            <div className="font-mono text-[11px] tracking-[0.3em] text-primary/70 mb-6">WOLF EXPERIMENT FINDING</div>
            <div
              className="font-display font-light leading-none tracking-[-0.04em]"
              style={{ fontSize: "clamp(5rem,14vw,9rem)", color: "var(--primary)" }}
            >
              31%
            </div>
            <p className="mt-5 text-sm font-mono tracking-[0.14em] text-muted-foreground/70 uppercase">
              Deceptive statements in strategic interactions
            </p>
            <div className="mt-6 h-px hairline" />
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
              AI agents produced deceptive statements in nearly 1 out of every 3 opportunities
              during strategic interactions across 100 experimental runs.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <div className="font-mono text-[11px] tracking-[0.3em] text-primary/80">WHO ATTENDS</div>
        <h2 className="mt-5 font-display text-4xl md:text-5xl font-light tracking-tight leading-[1.06] max-w-3xl text-balance">
          Designed for Different Audiences
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {AUDIENCES.map((a, i) => (
          <Reveal key={a.label} delay={i * 90}>
            <article className="bg-white border border-black/5 shadow-sm group relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-md cursor-default">
              <div className="absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="font-mono text-[10px] tracking-[0.32em] text-primary/75 mb-5">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl tracking-tight">{a.label}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-[1.7]">{a.focus}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <ImpactStrip />
    </section>
  );
}

function FeaturedSection() {
  const featured = sortedWorkshops().find((w) => w.featured);
  if (!featured) return null;
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <Reveal>
        <article className="grid overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm md:grid-cols-2">
          <WorkshopPhoto workshop={featured} className="min-h-64 w-full overflow-hidden" />
          <div className="p-8 md:p-12">
            <div className="font-mono text-[11px] tracking-[0.3em] text-primary/80">FEATURED</div>
            <h2 className="mt-4 font-display text-3xl tracking-tight leading-snug">{featured.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{featured.dateLabel}, {featured.location}</p>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{featured.recap}</p>
            <div className="mt-7">
              <Button href={`/workshops/${featured.slug}`} variant="ghost">Read the recap →</Button>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}

const ArchiveSection = function ArchiveSection({
  ref,
}: {
  ref: React.RefObject<HTMLElement | null>;
}) {
  const all = sortedWorkshops().filter((w) => !w.featured);
  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-24 scroll-mt-24">
      <Reveal>
        <div className="font-mono text-[11px] tracking-[0.3em] text-primary/80">ARCHIVE</div>
        <h2 className="mt-5 font-display text-4xl md:text-5xl font-light tracking-tight leading-[1.06] max-w-3xl text-balance">
          Every workshop, newest first
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {all.map((w, i) => (
          <Reveal key={w.slug} delay={i * 70}>
            <EventCard w={w} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

function EventCard({ w }: { w: Workshop }) {
  const deck = deckForWorkshop(w.slug);
  return (
    <article className="bg-white border border-black/5 shadow-sm group relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-md">
      <WorkshopPhoto workshop={w} className="aspect-[4/3] w-full overflow-hidden" />
      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10.5px] tracking-[0.18em] text-muted-foreground/70">
          <span>{w.dateLabel}</span>
          <span className="h-3 w-px bg-black/10" aria-hidden="true" />
          <span>{w.format}</span>
        </div>
        <Link to="/workshops/$slug" params={{ slug: w.slug }} className="mt-3 hover:text-primary transition-colors">
          <h3 className="font-display text-xl tracking-tight leading-snug">{w.title}</h3>
        </Link>
        <p className="mt-2 text-xs text-muted-foreground">{w.location}</p>
        {w.guest && (
          <p className="mt-2 text-xs text-primary">
            {w.guest.credit}: {w.guest.name}
          </p>
        )}
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-4">{w.recap}</p>
        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-5">
          <Link
            to="/workshops/$slug"
            params={{ slug: w.slug }}
            className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.18em] text-primary/80 hover:text-primary transition-colors"
          >
            Read the recap <span aria-hidden="true">→</span>
          </Link>
          {deck && (
            <Link
              to="/slides/$deck"
              params={{ deck: deck.id }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/15 transition-colors"
            >
              View slides <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function TopicsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <div className="font-mono text-[11px] tracking-[0.3em] text-primary/80">TOPICS WE TEACH</div>
        <h2 className="mt-5 font-display text-4xl md:text-5xl font-light tracking-tight leading-[1.06] max-w-3xl text-balance">
          What a session can cover
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground leading-relaxed">
          These are curriculum topics. Dated sessions above are the ones that have happened.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {WORKSHOP_TOPICS.map((t, i) => (
          <Reveal key={t.title} delay={i * 50}>
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

function ClearSection() {
  return (
    <section id="clear" className="mx-auto max-w-7xl px-6 py-16 scroll-mt-24">
      <Reveal>
        <div className="font-mono text-[11px] tracking-[0.3em] text-primary/80">THE CLEAR METHOD</div>
        <h2 className="mt-5 font-display text-4xl md:text-5xl font-light tracking-tight leading-[1.06] max-w-3xl text-balance">
          How we ask, and how we check
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
      <p className="mt-5 text-xs text-muted-foreground">{CLEAR_NOTE}</p>
    </section>
  );
}

function FeedbackSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <div className="font-mono text-[11px] tracking-[0.3em] text-primary/80">ATTENDEE FEEDBACK</div>
        <h2 className="mt-5 font-display text-4xl md:text-5xl font-light tracking-tight leading-[1.06] max-w-3xl text-balance">
          What people told us afterward
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <FeedbackStat value={`${FEEDBACK.averageHelpful}/${FEEDBACK.outOf}`} label="Average rating for how helpful the workshop was" />
        <FeedbackStat value={`${FEEDBACK.betterUnderstandPercent}%`} label="Said they better understand how AI works now" />
        <FeedbackStat value={String(FEEDBACK.responses)} label="Closing-form responses" />
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {FEEDBACK.quotes.map((q) => (
          <figure key={q} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <blockquote className="text-sm text-foreground/85 leading-relaxed">“{q}”</blockquote>
            <figcaption className="mt-3 text-xs text-muted-foreground">Workshop attendee, closing form</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function FeedbackStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm">
      <div className="font-display text-3xl sm:text-4xl font-semibold text-primary">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
    </div>
  );
}

function HostSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <div className="rounded-3xl bg-primary p-10 md:p-14 text-primary-foreground">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight max-w-2xl text-balance">
            Want a workshop for your school, library, or group?
          </h2>
          <p className="mt-4 max-w-xl opacity-90 leading-relaxed">
            Sessions are free and need no technical background.
          </p>
          <div className="mt-7">
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

function InstructorSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-white border border-black/5 shadow-sm p-10 md:p-14">
          <div className="grid gap-10 md:grid-cols-[auto_1fr] items-start">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-surface-2 border border-black/5">
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-4xl text-primary/70 select-none">M</span>
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">FOUNDER &amp; INSTRUCTOR</div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-light tracking-tight">
                Led by Mrinal Agarwal
              </h2>
              <p className="mt-5 max-w-2xl text-sm text-muted-foreground leading-relaxed">
                Mrinal Agarwal is a senior at Emerald High School in Dublin, California, and an AI safety
                and interpretability researcher. He designed the curriculum, drafted the slides and
                practice exercises, coordinated outreach and registration, and brought in guest speakers
                for each session. His research on AI deception and reasoning was spotlighted at NeurIPS.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white border border-black/5 shadow-sm rounded-full px-3.5 py-1.5 font-mono text-[10px] tracking-[0.2em] text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
