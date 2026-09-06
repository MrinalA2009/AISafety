import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Reveal } from "../../../components/Reveal";
import { Button } from "../../../components/main/Button";
import { LEARN_CARDS, AUDIENCES, UPCOMING, TAGS } from "../../../data/workshops";

export const Route = createFileRoute("/_main/workshops/")({
  head: () => ({
    meta: [
      { title: "AI Literacy & Safety Workshops - Ethos.AI" },
      { name: "description", content: "Workshops on AI deception, hallucinations, and trust led by AI safety researcher Mrinal Agarwal. Designed for libraries, schools, and community organizations." },
      { property: "og:title", content: "AI Literacy & Safety Workshops - Ethos.AI" },
      { property: "og:description", content: "Making AI safety research understandable, practical, and useful for everyday communities." },
    ],
  }),
  component: WorkshopsPage,
});

function WorkshopsPage() {
  const upcomingRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <WorkshopHero onViewUpcoming={() => scrollTo(upcomingRef)} />
      <MissionSection />
      <LearnSection />
      <ResearchSection />
      <AudienceSection />
      <UpcomingSection ref={upcomingRef} />
      <InstructorSection />
    </div>
  );
}

function WorkshopHero({
  onViewUpcoming,
}: {
  onViewUpcoming: () => void;
}) {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-28 pb-20 text-center">
        <Reveal delay={100}>
          <h1 className="mt-6 font-display text-[clamp(2.8rem,7vw,6rem)] font-light tracking-[-0.03em] leading-[1.02] text-balance">
            AI Literacy{" "}
            <span className="text-foreground/45">&amp; Safety</span>
            <br />
            Workshops
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
            Making AI safety research understandable, practical, and useful for everyday communities.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-5 max-w-lg mx-auto text-sm text-muted-foreground/70 leading-relaxed text-pretty">
            Artificial intelligence is rapidly changing how people learn, work, and communicate.
            These workshops help participants understand how AI systems work, why they sometimes produce misleading information,
            and how to evaluate AI-generated content safely and critically.
          </p>
        </Reveal>

        <Reveal delay={440}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" onClick={onViewUpcoming}>
              View Upcoming Workshops
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

const UpcomingSection = function UpcomingSection({
  ref,
}: {
  ref: React.RefObject<HTMLElement | null>;
}) {
  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-24 scroll-mt-24">
      <Reveal>
        <div className="font-mono text-[11px] tracking-[0.3em] text-primary/80">SCHEDULE</div>
        <h2 className="mt-5 font-display text-4xl md:text-5xl font-light tracking-tight leading-[1.06] max-w-3xl text-balance">
          Upcoming Workshops
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {UPCOMING.map((w, i) => (
          <Reveal key={w.title} delay={i * 90}>
            <EventCard w={w} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

function EventCard({ w }: { w: (typeof UPCOMING)[number] }) {
  const [open, setOpen] = useState(false);
  const statusColor =
    w.status === "Open"
      ? "text-primary border-primary/30 bg-primary/8"
      : "text-muted-foreground border-black/10 bg-black/5";

  return (
    <article
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="bg-white border border-black/5 shadow-sm group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-md cursor-default"
    >
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/6 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <Link to="/workshops/$slug" params={{ slug: w.slug }} className="hover:text-primary transition-colors">
            <h3 className="font-display text-2xl tracking-tight leading-snug">{w.title}</h3>
          </Link>
        </div>
        <span
          className={`shrink-0 font-mono text-[9px] tracking-[0.28em] uppercase border rounded-full px-2.5 py-1 ${statusColor}`}
        >
          {w.status}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1.5 font-mono text-[10.5px] tracking-[0.18em] text-muted-foreground/70">
        <span>{w.date}</span>
        <span className="h-3 w-px bg-black/10" />
        <span>{w.time}</span>
        <span className="h-3 w-px bg-black/10" />
        <span>{w.location}</span>
      </div>

      <div
        className="grid transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
        </div>
      </div>

      {w.registerLink && (
        <div className="mt-6 flex items-center gap-3">
          <a
            href={w.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.18em] text-primary/80 hover:text-primary transition-colors"
          >
            Register interest
            <span>→</span>
          </a>
        </div>
      )}
    </article>
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
              <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">INSTRUCTOR</div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-light tracking-tight">
                Led by Mrinal Agarwal
              </h2>
              <p className="mt-5 max-w-2xl text-sm text-muted-foreground leading-relaxed">
                Mrinal Agarwal is an AI safety and interpretability researcher studying how AI systems reason,
                communicate, and sometimes mislead users. His research on AI deception and reasoning was
                spotlighted at NeurIPS, one of the world's leading artificial intelligence conferences.
                He has presented research to 400+ researchers, educators, and industry professionals
                and has over four years of experience teaching students ages 12 to 18.
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
