import { createFileRoute, Outlet } from "@tanstack/react-router";
import { WolfNav } from "../components/wolf/WolfNav";
import { WolfFooter } from "../components/wolf/WolfFooter";

export const Route = createFileRoute("/wolf")({
  head: () => ({
    meta: [
      { title: "WOLF - Werewolf-based Observations for LLM Deception and Falsehoods" },
      { name: "description", content: "A research platform studying deception, trust, and social reasoning in LLMs through the lens of Werewolf - a social deduction game. arXiv 2512.09187." },
      { property: "og:title", content: "WOLF - Werewolf-based Observations for LLM Deception and Falsehoods" },
      { property: "og:description", content: "Studying deception, trust, and social reasoning in AI." },
    ],
  }),
  component: WolfLayout,
});

function WolfLayout() {
  return (
    <div className="dark">
      <WolfNav />
      <main className="relative bg-background text-foreground">
        <Outlet />
      </main>
      <WolfFooter />
    </div>
  );
}
