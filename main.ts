// One Word, First Thought — u-0xkianno-one-word-first-thought-106abaf8
// Writes exactly one word to /output/entry.txt: the first word that
// comes to mind. Deterministic, no network, no external dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

// The word: the act of throwing someone out of a window.
// Surprising (why does a word for this even exist?), vivid (one instant
// scene), witty (its absurd specificity is the joke) — and unmistakably
// chosen, not filler.
const WORD = "defenestration";

// Guard: exactly one word, 1-24 characters (the gate's own limits).
// Length is counted in code points so a multi-byte character counts once.
const CHAR_COUNT = [...WORD].length;
if (WORD.trim() === "" || !/^[^\s]+$/.test(WORD)) {
  throw new Error("entry must be exactly one word");
}
if (CHAR_COUNT < 1 || CHAR_COUNT > 24) {
  throw new Error(`entry must be 1-24 characters, got ${CHAR_COUNT}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
