export type SlideDeck = {
  id: string;
  title: string;
  blurb: string;
  pages: number;
  /** Workshop slugs (src/data/workshops.ts) this deck belongs to */
  workshopSlugs: string[];
};

// Slides live as page images in public/slides/<id>/NN.jpg, rendered from the PDFs.
export const SLIDE_DECKS: SlideDeck[] = [
  {
    id: "can-you-trust-ai",
    title: "Can You Trust AI? Understanding AI Beyond the Hype",
    blurb: "The core workshop: how language models build answers, why confident answers go wrong, and how to check them.",
    pages: 52,
    workshopSlugs: ["can-you-trust-ai-july-11", "can-you-trust-ai-july-27-india", "can-you-trust-ai-dublin-library"],
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering Workshop",
    blurb: "How to get better, more reliable results from AI.",
    pages: 50,
    workshopSlugs: ["prompt-engineering"],
  },
  {
    id: "social-engineering",
    title: "Social Engineering with AI",
    blurb: "Can you trust what you see, hear, and receive online?",
    pages: 44,
    workshopSlugs: ["social-engineering-with-ai"],
  },
  {
    id: "job-market",
    title: "AI & the Future of the Job Market",
    blurb: "How AI changes the tasks people do at work and which skills help people adapt.",
    pages: 41,
    workshopSlugs: ["ai-and-the-future-of-the-job-market"],
  },
];

export const deckForWorkshop = (slug: string) =>
  SLIDE_DECKS.find((d) => d.workshopSlugs.includes(slug));
