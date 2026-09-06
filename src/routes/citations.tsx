import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/citations")({
  beforeLoad: () => {
    throw redirect({ to: "/wolf/citations" });
  },
});
