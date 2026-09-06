export type Resource = {
  id: string;
  title: string;
  type: "recording" | "slides" | "summary" | "reading" | "exercise" | "template";
  workshopSlug?: string;
  url?: string;
  description: string;
};

export const RESOURCES: Resource[] = [
  {
    id: "verification-checklist",
    title: "AI Claim Verification Checklist",
    type: "template",
    workshopSlug: "can-you-trust-ai",
    description: "A one-page checklist for verifying AI-generated claims before relying on them.",
  },
  {
    id: "hallucination-examples",
    title: "Real Hallucination Examples (Annotated)",
    type: "reading",
    workshopSlug: "understanding-ai-hallucinations",
    description: "A collection of real fabricated citations and confident wrong answers, annotated to show the warning signs.",
  },
  {
    id: "prompting-exercise",
    title: "Trustworthy Prompting Practice Exercise",
    type: "exercise",
    workshopSlug: "can-you-trust-ai",
    description: "A short guided exercise for practicing verification-first prompting techniques.",
  },
];

export const RESOURCE_TYPE_LABELS: Record<Resource["type"], string> = {
  recording: "Recording",
  slides: "Slides",
  summary: "Summary",
  reading: "Reading",
  exercise: "Exercise",
  template: "Template",
};
