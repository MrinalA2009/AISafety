import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/main/Button";

export const Route = createFileRoute("/_main/research")({
  head: () => ({
    meta: [
      { title: "Research - Ethos.AI" },
      { name: "description", content: "Research projects on AI safety and deception, featuring WOLF." },
    ],
  }),
  component: ResearchHub,
});

function ResearchHub() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-36 pb-32">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Research</div>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          Research projects
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
          Research on AI safety, deception, and trust in multi-agent systems - starting with WOLF,
          with more projects to come.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-12 rounded-3xl border border-black/5 bg-white p-8 sm:p-10 shadow-sm">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Featured Research</div>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">WOLF</h2>
          <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
            A study of deception, trust, and reasoning in multi-agent AI systems. Eight agents.
            One hundred runs. Seven thousand statements measured.
          </p>
          <div className="mt-6">
            <Button href="/wolf" variant="primary">Explore WOLF Research</Button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-6 rounded-3xl border border-dashed border-black/10 p-8 sm:p-10 text-center text-muted-foreground">
          More research projects coming soon.
        </div>
      </Reveal>
    </div>
  );
}
