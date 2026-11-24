import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/main/Button";

export const Route = createFileRoute("/_main/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Ethos.AI" },
      { name: "description", content: "Get in touch about workshops, partnerships, or speaking invitations." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-36 pb-32 text-center">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Contact</div>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          Get in touch
        </h1>
        <p className="mt-5 max-w-md mx-auto text-muted-foreground leading-relaxed">
          Want a free workshop for your school, library, or community group? Tell us about your audience and what you would like to cover. We also welcome partnership and speaking invitations.
        </p>
        <div className="mt-8">
          <Button href="mailto:smmrinal2009@gmail.com" variant="primary">
            smmrinal2009@gmail.com
          </Button>
        </div>
      </Reveal>

      {/* Reserved for future feedback forms / community links */}
    </div>
  );
}
