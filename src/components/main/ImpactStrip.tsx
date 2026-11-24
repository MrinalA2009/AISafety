import { Reveal } from "../Reveal";
import { useAnimeCounter } from "../../hooks/useAnimeCounter";
import {
  SESSIONS_HOSTED,
  REPORTED_PARTICIPANTS,
  REPORTED_COUNTRIES,
  GUEST_SPEAKERS,
  REPORTED_AS_OF,
} from "../../data/impactStats";

function StatTile({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: animated } = useAnimeCounter(value);
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="font-display text-3xl sm:text-4xl font-semibold text-primary"
      >
        {animated}
        {suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
    </div>
  );
}

export function ImpactStrip() {
  const stats = [
    { label: "Workshops hosted", value: SESSIONS_HOSTED, suffix: "" },
    { label: "Participants reached", value: REPORTED_PARTICIPANTS, suffix: "+" },
    { label: "Countries", value: REPORTED_COUNTRIES, suffix: "" },
    { label: "Guest speakers & co-hosts", value: GUEST_SPEAKERS, suffix: "" },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 60}>
            <StatTile {...s} />
          </Reveal>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Participants and countries as reported on {REPORTED_AS_OF}.
      </p>
    </div>
  );
}
