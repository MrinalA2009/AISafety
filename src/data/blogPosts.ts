export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  tags: string[];
  author: string;
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-ai-hallucinates",
    title: "Why AI Hallucinates (and How to Catch It)",
    excerpt:
      "Language models produce fluent, confident-sounding text even when they're wrong. Here's what's actually happening, and how to spot it.",
    publishedDate: "2026-05-12",
    tags: ["AI Safety", "Hallucinations"],
    author: "Mrinal Agarwal",
    body: [
      "When a language model 'hallucinates,' it isn't lying in the way a person lies - it has no separate channel for truth that it's choosing to override. It's generating the statistically most plausible next words given everything it has seen before, and sometimes the most plausible-sounding continuation is simply false.",
      "This matters because fluency and confidence are not the same thing as accuracy. A hallucinated citation can look identical, in format and tone, to a real one. The workshops walk through concrete examples of this side by side with verified sources, so participants can build an instinct for when to double-check.",
      "The practical takeaway: treat specific, checkable claims - citations, dates, statistics, quotes - as claims to verify, not facts to accept, especially when they arrive dressed in confident language.",
    ],
  },
  {
    slug: "what-workshops-cover",
    title: "What Our AI Literacy Workshops Actually Cover",
    excerpt:
      "A behind-the-scenes look at the curriculum: what we teach, why we teach it in this order, and who it's designed for.",
    publishedDate: "2026-04-02",
    tags: ["Workshops", "Education"],
    author: "Mrinal Agarwal",
    body: [
      "Each session starts with a simple question: what actually happens when you send a prompt to a language model? Understanding the mechanism - even at a high level - turns out to be the fastest way to build healthy skepticism about the output.",
      "From there, we move into recognizable failure patterns: fabricated citations, overconfident wrong answers, and subtly biased framing. Participants practice spotting these live, in real model outputs, rather than just hearing about them abstractly.",
      "We close with practical tools: verification habits, better prompting techniques, and a simple framework for deciding how much to trust a given answer based on the stakes involved.",
    ],
  },
  {
    slug: "trustworthy-prompting-101",
    title: "Trustworthy Prompting 101",
    excerpt:
      "Small changes to how you ask a question can make a big difference in how reliable the answer is. A few habits worth building.",
    publishedDate: "2026-02-18",
    tags: ["Prompting", "AI Literacy"],
    author: "Mrinal Agarwal",
    body: [
      "Asking a model to 'show its work' - to explain its reasoning step by step - doesn't guarantee correctness, but it does make errors easier to catch, because you can inspect the intermediate steps rather than just the final claim.",
      "Asking for sources, and then actually checking them, closes the loop that most casual AI use skips entirely. If a model can't produce a real, checkable source for a specific claim, that's useful information in itself.",
      "None of this replaces judgment. The goal of these habits is to make it easier to apply judgment, not to hand it off to the model.",
    ],
  },
];
