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
    label: "Families & Community",
    focus: "Everyday AI use, recognizing misinformation and scams, and building digital literacy.",
  },
  {
    label: "Libraries & Schools",
    focus: "Accessible explanations, safe technology habits, and confidence with new tools.",
  },
];

export type WorkshopImage = {
  /** Path under /public, e.g. "/workshops/dublin-library-1.jpg" */
  src: string;
  /** Required: descriptive alt text */
  alt: string;
  caption?: string;
};

export type WorkshopLink = { label: string; url: string };

export type Workshop = {
  slug: string;
  title: string;
  /** ISO date (YYYY-MM-DD) used for sorting. Omit while undated. */
  isoDate?: string;
  /** Human-readable date line */
  dateLabel: string;
  /** Only set once confirmed against the event record */
  time?: string;
  format: "Zoom" | "In person" | "Online";
  location: string;
  /** Mrinal's role in the session */
  role: string;
  guest?: { name: string; credit: string };
  recap: string;
  topics: string[];
  /** Add approved photos here. Empty means a placeholder is shown. */
  images: WorkshopImage[];
  /** Only add links that exist (listing, recording, slides). */
  links: WorkshopLink[];
  /** Link to a section of another page on this site, e.g. the CLEAR lesson */
  related?: { label: string; to: "/workshops" | "/slides"; hash?: string };
  featured?: boolean;
};

export const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScDoe32Gx_1i8UfireFBHfXzx65aStrR25ztIi13QKZUtsS_g/viewform?usp=dialog";

// Delivered sessions, newest first. Facts come from the November 2026 workshop
// report. Anything not confirmed there (school name, attendance, photos,
// recordings) is intentionally left out until supplied.
export const WORKSHOPS: Workshop[] = [
  {
    slug: "ai-and-the-future-of-the-job-market",
    title: "AI & the Future of the Job Market",
    isoDate: "2026-11-21",
    dateLabel: "November 21, 2026",
    time: "5:00 to 6:00 PM Pacific",
    format: "Online",
    location: "Online",
    role: "Organizer and host",
    guest: {
      name: "Arun P. Gupta",
      credit: "Guest speaker on how AI is changing work",
    },
    recap:
      "How AI changes the tasks people do at work and which skills help them adapt. With guest Arun P. Gupta, the session explored automation, changing roles, and the human work of reviewing outputs and taking responsibility for decisions.",
    topics: [
      "Which tasks AI can draft and which need human review",
      "Where judgment, technical fundamentals, and accountability still matter",
      "Who owns the final call when AI is involved",
    ],
    images: [],
    links: [],
  },
  {
    slug: "can-you-trust-ai-dublin-library",
    title: "Can You Trust AI?",
    isoDate: "2026-10-19",
    dateLabel: "October 19, 2026",
    format: "In person",
    location: "Dublin Library, Dublin, California",
    role: "Co-led with Abbas Raza",
    guest: { name: "Abbas Raza", credit: "Co-host" },
    recap:
      "A free community session that brought the question into a public setting, where students and families asked practical questions about AI answers, misinformation, scams, and smarter prompting.",
    topics: [
      "Comparing two plausible AI answers and checking a claim against a source",
      "The CLEAR method for asking better questions",
      "Misinformation and scams",
    ],
    images: [],
    links: [
      {
        label: "Alameda County Library event listing",
        url: "https://aclibrary.bibliocommons.com/events/6ab1af5c3dd190003e739d06",
      },
    ],
  },
  {
    slug: "social-engineering-with-ai",
    title: "Social Engineering with AI",
    isoDate: "2026-09-12",
    dateLabel: "September 12, 2026",
    format: "Zoom",
    location: "Online (Zoom)",
    role: "Organizer and host",
    guest: { name: "Mohini Soodan", credit: "Guest speaker" },
    recap:
      "Recognizing AI-assisted impersonation and scams, and checking a suspicious request through a trusted channel instead of the one the message came from.",
    topics: [
      "How AI makes impersonation and phishing more convincing",
      "Confirming a request through a channel you look up yourself",
      "Safe reporting",
    ],
    images: [],
    links: [],
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering Workshop",
    isoDate: "2026-08-30",
    dateLabel: "August 30, 2026",
    time: "11:00 AM Pacific",
    format: "Zoom",
    location: "Online (Zoom)",
    role: "Instructor",
    recap:
      "How language models work and how to give them a clearer goal, audience, and context, followed by a check of an actual claim in the answer.",
    topics: [
      "How changing context, audience, and constraints changes the output",
      "Comparing a vague prompt with a revised one",
      "Deciding what still needs to be verified",
    ],
    images: [],
    links: [],
  },
  {
    slug: "can-you-trust-ai-july-25-india",
    title: "Can You Trust AI?",
    isoDate: "2026-07-25",
    dateLabel: "July 25, 2026",
    time: "11:30 AM India time",
    format: "Zoom",
    location: "Online (Zoom), India session",
    role: "Instructor",
    recap:
      "A separate run of the opening workshop for participants in India. It covered how modern AI systems work, why they sometimes produce misleading information, and how to verify an answer. The goal was not to make people trust AI more, but to understand when to trust it, when not to, and how to check.",
    topics: [
      "How language models generate answers",
      "Why confident answers can go wrong",
      "How to check a claim before relying on it",
    ],
    images: [],
    links: [],
  },
  {
    slug: "can-you-trust-ai-july-11",
    title: "Can You Trust AI? Understanding AI Beyond the Hype",
    isoDate: "2026-07-11",
    dateLabel: "July 11, 2026",
    time: "11:00 AM Pacific",
    format: "Zoom",
    location: "Online (Zoom)",
    role: "Instructor",
    recap:
      "The first workshop in the series. It introduced the question that runs through everything since: how do you decide what to trust when AI gives you a plausible answer?",
    topics: [
      "Which answer would you trust, and why",
      "How a language model builds an answer one piece at a time",
      "Why confident answers can go wrong",
    ],
    images: [],
    links: [],
  },
  {
    slug: "school-ai-literacy-workshop-india",
    title: "AI Literacy Workshop at Bonne Anne PS School",
    dateLabel: "In person, India",
    format: "In person",
    location: "Bonne Anne PS School, India",
    role: "Instructor",
    recap:
      "At Bonne Anne PS School in India, students already knew about tools like ChatGPT and had questions about how they worked. I reached out to the school administration, and we agreed to set aside a class period for an introductory AI workshop. I taught students how AI generates answers, how they can use it for schoolwork, and how to spot when a convincing answer needs checking. The session gave them time to ask their own questions about a tool they were already curious about.",
    topics: [
      "How AI generates answers",
      "Using AI for schoolwork without losing your own understanding",
      "Spotting when a convincing answer needs checking",
    ],
    images: [
      { src: "/workshops/bonne-anne-1.jpg", alt: "Students seated in rows in a school hall, facing a projected title slide reading Can You Trust AI?", caption: "Students at Bonne Anne PS School watching the opening slide." },
      { src: "/workshops/bonne-anne-2.jpg", alt: "The title slide, Can You Trust AI? Understanding AI Beyond the Hype, projected on a school wall", caption: "The opening slide, projected in the school hall." },
      { src: "/workshops/bonne-anne-3.jpg", alt: "An About the Speaker slide projected on a wall beside a lectern with the school crest", caption: "The session was delivered over Zoom and projected in the hall." },
      { src: "/workshops/bonne-anne-4.jpg", alt: "Students and two teachers seated in the school hall during the workshop" },
      { src: "/workshops/bonne-anne-5.jpg", alt: "A row of students in school uniform listening during the workshop" },
      { src: "/workshops/bonne-anne-6.jpg", alt: "Students seated in front of colorful display boards listening to the session" },
      { src: "/workshops/bonne-anne-7.jpg", alt: "A speaker slide projected in the school hall next to a lectern" },
      { src: "/workshops/bonne-anne-8.jpg", alt: "Wide view of the school hall with students seated near the projection screen" },
    ],
    links: [],
    related: { label: "Try the CLEAR method for checking AI answers", to: "/workshops", hash: "clear" },
    featured: true,
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
  { title: "Prompt engineering", body: "How context, audience, and constraints change an answer, and what still needs checking." },
  { title: "AI-driven social engineering", body: "Recognizing impersonation and scams, and confirming requests through a trusted channel." },
  { title: "Fact-checking AI responses", body: "Practical habits for verifying claims before you rely on them." },
  { title: "Responsible AI use", body: "When to keep information out of a chatbot, and how to review a draft before sharing it." },
  { title: "AI and the job market", body: "How AI changes the tasks people do at work and where human judgment still matters." },
  { title: "AI safety research", body: "A look inside current research on deception, trust, and reliability in AI systems." },
];

/** Newest dated first, undated completed events last. */
export function sortedWorkshops(): Workshop[] {
  return [...WORKSHOPS].sort((a, b) => {
    if (!a.isoDate && !b.isoDate) return 0;
    if (!a.isoDate) return 1;
    if (!b.isoDate) return -1;
    return b.isoDate.localeCompare(a.isoDate);
  });
}
