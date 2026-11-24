export const CLEAR_STEPS = [
  {
    letter: "C",
    name: "Context",
    body: "Give the audience, goal, and level of detail. Tell the model what the reader already knows and how they plan to use the answer.",
  },
  {
    letter: "L",
    name: "Locate sources",
    body: "Ask for a source that supports a specific claim. Prefer an original source when one is available.",
  },
  {
    letter: "E",
    name: "Explain the reasoning",
    body: "Ask for a concise explanation, assumptions, or checkable steps so you can see how the conclusion follows.",
  },
  {
    letter: "A",
    name: "Ask for other perspectives",
    body: "Ask what the question assumes, what evidence might change the answer, and where credible sources disagree.",
  },
  {
    letter: "R",
    name: "Recheck independently",
    body: "Open the source yourself and see whether it supports the claim. Raise the level of verification as the consequences of a mistake increase.",
  },
];

export const CLEAR_NOTE =
  "CLEAR is a guide to asking and checking questions. It cannot guarantee that an answer is accurate.";
