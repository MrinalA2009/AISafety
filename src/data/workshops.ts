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
  status: "Open" | "Coming Soon" | "Past";
  registerLink?: string;
  format: "Online" | "In-Person" | "Hybrid";
  audience?: string;
  learningOutcomes?: string[];
  recordingUrl?: string;
  slidesUrl?: string;
};

// EAF Student Initiated Event: AI Safety Workshop Series
// Hosted by Emerald High School Academic Foundation. Free and open to everyone,
// no technical background required. Saturdays, 11:00 AM to 12:00 PM.
export const SERIES_TITLE = "EAF Student Initiated Event: AI Safety Workshop Series";
export const SERIES_HOST = "Emerald High School Academic Foundation";
export const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScDoe32Gx_1i8UfireFBHfXzx65aStrR25ztIi13QKZUtsS_g/viewform?usp=dialog";

export const UPCOMING: Workshop[] = [
  {
    slug: "ai-driven-social-engineering",
    title: "AI-Driven Social Engineering",
    date: "Sep 12, 2026",
    time: "11:00 AM to 12:00 PM",
    location: "Online",
    format: "Online",
    audience: "Students, educators, and community members",
    desc: "How attackers use AI to make phishing, impersonation, and manipulation faster and more convincing, and what everyday users can do to recognize it.",
    status: "Open",
    registerLink: REGISTER_URL,
    learningOutcomes: [
      "How generative AI lowers the cost of convincing scams",
      "Signals that a message or voice may be AI-generated",
      "Practical habits for verifying identity and requests",
    ],
  },
  {
    slug: "prompt-injection-and-cyber-vulnerabilities",
    title: "Prompt Injection & Cyber Vulnerabilities",
    date: "Oct 10, 2026",
    time: "11:00 AM to 12:00 PM",
    location: "Online",
    format: "Online",
    audience: "Students, developers, and curious community members",
    desc: "A hands-on look at how AI systems get manipulated through their inputs, why prompt injection is hard to fully fix, and what it means for tools built on top of language models.",
    status: "Open",
    registerLink: REGISTER_URL,
    learningOutcomes: [
      "What prompt injection is and why it works",
      "How AI features in real products expand the attack surface",
      "Questions to ask before trusting an AI-powered tool",
    ],
  },
  {
    slug: "job-market-evolution",
    title: "Job Market Evolution",
    date: "Nov 14, 2026",
    time: "11:00 AM to 12:00 PM",
    location: "Online",
    format: "Online",
    audience: "Students, job seekers, and educators",
    desc: "A grounded discussion of how AI is changing which tasks get automated, which skills gain value, and how to think about career decisions without the hype.",
    status: "Open",
    registerLink: REGISTER_URL,
    learningOutcomes: [
      "Which kinds of work AI is and is not good at replacing",
      "Skills that become more valuable alongside AI",
      "How to reason about career risk under uncertainty",
    ],
  },
  {
    slug: "the-path-to-agi",
    title: "The Path to AGI",
    date: "Dec 12, 2026",
    time: "11:00 AM to 12:00 PM",
    location: "Online",
    format: "Online",
    audience: "General public",
    desc: "What people actually mean by artificial general intelligence, where current systems fall short, and why researchers disagree about how close we are.",
    status: "Open",
    registerLink: REGISTER_URL,
    learningOutcomes: [
      "Different definitions of AGI and why they matter",
      "Capabilities today's models still lack",
      "How to read AGI claims and predictions critically",
    ],
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    date: "Aug 30, 2026",
    time: "11:00 AM to 12:00 PM",
    location: "Online",
    format: "Online",
    audience: "Students, educators, and community members",
    desc: "The habits that make AI answers more reliable: asking for reasoning, requesting sources, giving context, and checking output before you rely on it.",
    status: "Past",
    learningOutcomes: [
      "How phrasing changes the reliability of an answer",
      "Requesting reasoning and sources you can check",
      "A simple framework for how much to trust a response",
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
