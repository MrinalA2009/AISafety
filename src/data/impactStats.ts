import { WORKSHOPS } from "./workshops";

// Sessions come straight from the workshop ledger so the number can't drift.
export const SESSIONS_HOSTED = WORKSHOPS.length;

// Reported in Mrinal's Nov 18, 2026 email to Dublin Patch ("seven workshops,
// 600+ participants, four countries"). Self-reported, not yet reconciled
// against a session log. CONFIRM before relying on these.
export const REPORTED_AS_OF = "November 18, 2026";
export const REPORTED_PARTICIPANTS = 600;
export const REPORTED_COUNTRIES = 4;

export const GUEST_SPEAKERS = WORKSHOPS.filter((w) => w.guest).length;

export const FORMATS_RUN = ["Zoom", "In person at a public library", "In person at a school"];
