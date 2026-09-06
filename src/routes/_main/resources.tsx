import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "../../components/Reveal";
import { RESOURCES, RESOURCE_TYPE_LABELS, type Resource } from "../../data/resources";

export const Route = createFileRoute("/_main/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Ethos.AI" },
      { name: "description", content: "Workshop recordings, slides, guides, and templates for AI literacy and safety." },
    ],
  }),
  component: ResourcesPage,
});

const FILTERS: Array<"all" | Resource["type"]> = ["all", "recording", "slides", "summary", "reading", "exercise", "template"];

function ResourcesPage() {
  const [filter, setFilter] = useState<"all" | Resource["type"]>("all");
  const filtered = filter === "all" ? RESOURCES : RESOURCES.filter((r) => r.type === filter);

  return (
    <div className="mx-auto max-w-5xl px-6 pt-36 pb-32">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Resources</div>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          Workshop resources
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
          Recordings, slides, summaries, reading, exercises, and templates from past workshops.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-white border border-black/10 text-foreground/70 hover:border-black/20"
              }`}
            >
              {f === "all" ? "All" : RESOURCE_TYPE_LABELS[f]}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {filtered.map((r, i) => (
          <Reveal key={r.id} delay={i * 80}>
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <span className="rounded-full bg-surface-2 px-2.5 py-1 text-[11px] tracking-wide text-muted-foreground">
                {RESOURCE_TYPE_LABELS[r.type]}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.description}</p>
            </div>
          </Reveal>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-muted-foreground">No resources of this type yet.</p>
        )}
      </div>
    </div>
  );
}
