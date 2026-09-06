export const LEARN_CARDS = [
  {
    icon: "○",
    title: "How AI generates responses",
    body: "What actually happens inside a language model when it reads your question and writes a reply.",
  },
  {
    icon: "◈",
    title: "Why confident AI can be wrong",
    body: "How models produce fluent, certain-sounding text even when their underlying reasoning has failed.",
  },
  {
    icon: "⬡",
    title: "Hallucinations and fabricated sources",
    body: "Where AI misinformation comes from, and why invented citations look identical to real ones.",
  },
  {
    icon: "◎",
    title: "Warning signs of unreliable output",
    body: "Specific patterns to watch for that signal an AI response may be inaccurate or misleading.",
  },
  {
    icon: "◇",
    title: "Practical verification strategies",
    body: "Concrete methods for checking AI-generated claims before acting on them in work or research.",
  },
  {
    icon: "△",
    title: "How researchers study AI deception",
    body: "A look inside current AI safety research and what it reveals about the future of trustworthy systems.",
  },
];

export const AUDIENCES = [
  {
    label: "Students",
    focus: "Responsible AI use, academic research, and critical thinking about AI-generated content.",
  },
  {
    label: "Educators",
    focus: "AI in classrooms, academic integrity, and teaching students to evaluate what AI produces.",
  },
  {
    label: "Community Members",
    focus: "Everyday AI use, recognizing misinformation, scams, and building digital literacy.",
  },
  {
    label: "Libraries & Senior Centers",
    focus: "Accessible explanations, safe technology habits, and confidence with new tools.",
  },
];

export type Workshop = {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  desc: string;
  status: "Open" | "Coming Soon";
  registerLink?: string;
  format: "Online" | "In-Person" | "Hybrid";
  audience?: string;
  learningOutcomes?: string[];
  recordingUrl?: string;
  slidesUrl?: string;
};

export const UPCOMING: Workshop[] = [
  {
    slug: "can-you-trust-ai",
    title: "Can You Trust AI?",
    date: "Jul 11, 2025",
    time: "11:00 AM",
    location: "Online",
    format: "Online",
    audience: "Students, educators, and curious community members",
    desc: "An audience-participatory session exploring how language models produce misleading information and how to spot it in the wild.",
    status: "Open",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScDoe32Gx_1i8UfireFBHfXzx65aStrR25ztIi13QKZUtsS_g/viewform?usp=dialog",
    learningOutcomes: [
      "How language models generate answers",
      "Why fluent output isn't the same as correct output",
      "How to spot misleading AI responses in real time",
    ],
  },
  {
    slug: "understanding-ai-hallucinations",
    title: "Understanding AI Hallucinations",
    date: "TBD",
    time: "TBD",
    location: "Online",
    format: "Online",
    audience: "General public",
    desc: "A close look at why AI systems confidently fabricate facts, citations, and events, and what that means for how we use them.",
    status: "Open",
    learningOutcomes: [
      "Why hallucinations happen",
      "How fabricated citations are constructed",
      "What to check before trusting an AI-generated fact",
    ],
  },
  {
    slug: "spotting-misleading-ai",
    title: "Spotting Misleading AI",
    date: "TBD",
    time: "TBD",
    location: "Online",
    format: "Online",
    audience: "Students and professionals",
    desc: "Practical skills for identifying AI-generated misinformation, evaluating sources, and verifying claims before you rely on them.",
    status: "Coming Soon",
    learningOutcomes: [
      "A practical fact-checking workflow for AI output",
      "Common patterns in AI-generated misinformation",
      "Tools and habits for verifying claims quickly",
    ],
  },
  {
    slug: "ai-safety-for-everyday-users",
    title: "AI Safety for Everyday Users",
    date: "TBD",
    time: "TBD",
    location: "In-Person or Online",
    format: "Hybrid",
    audience: "Community members, libraries, senior centers",
    desc: "A non-technical introduction to AI safety research and what it means for how we interact with AI systems in daily life.",
    status: "Coming Soon",
    learningOutcomes: [
      "What AI safety research actually studies",
      "How safety findings translate into everyday habits",
      "Where to go for trustworthy information about AI",
    ],
  },
];

export const TAGS = [
  "AI Deception",
  "AI Safety",
  "Multi-Agent Systems",
  "Interpretability",
  "Education",
];

export const WORKSHOP_TOPICS = [
  { title: "How AI systems generate answers", body: "What happens inside a language model between reading a prompt and writing a reply." },
  { title: "Hallucinations & fabricated citations", body: "Why AI confidently invents facts, sources, and events that never existed." },
  { title: "Bias and omitted evidence", body: "How training data and framing shape what an AI includes - and leaves out." },
  { title: "Trustworthy prompting", body: "Techniques for asking questions that make errors easier to catch." },
  { title: "Fact-checking AI responses", body: "Practical habits for verifying claims before you rely on them." },
  { title: "Responsible AI decision-making", body: "Matching how much you trust an answer to what's actually at stake." },
  { title: "AI safety research", body: "A look inside current research on deception, trust, and reliability in AI systems." },
  { title: "Practical live experiments", body: "Watching AI reasoning, hallucinations, and confidence mismatches happen live." },
];
