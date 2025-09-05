import React, { useMemo, useState, useEffect } from "react";

// Netflix Landing/Hover Prototype — "The Shawshank Redemption"
// Notes:
// - Hover (or tap the button) on the poster tile to reveal the hover overlay.
// - Commenting is enabled only in the "Uncensored Window" (watch progress between 95% and 99%).
// - Public feed releases only spoiler-free comments; spoilers appear only in the Uncensored feed.

const UNLOCK_START = 95; // % — unlock uncensored commenting after the story is effectively finished
const CREDITS_START = 99; // % — just before credits; window closes at credits

function detectSpoiler(text) {
  const spoilerWords = [
    /ending/i,
    /final\\s+scene/i,
    /twist/i,
    /escape/i,
    /tunnel/i,
    /poster/i,
    /warden/i,
    /parole/i,
    /library\\s+incident/i,
    /letter\\s+under\\s+the\\s+stone/i,
  ];
  return spoilerWords.some((r) => r.test(text));
}

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

const seedComments = [
  {
    id: 1,
    author: "film_critic93",
    text:
      "Tim Robbins and Morgan Freeman carry this with quiet power. Hope, dignity, friendship — still hits.",
    createdAt: "2025-08-02T18:12:00Z",
  },
  {
    id: 2,
    author: "nostalgia_nate",
    text:
      "The rooftop scene is pure cinema. You can almost feel the breeze and taste the beer — simple grace.",
    createdAt: "2025-08-11T03:40:00Z",
  },
  {
    id: 3,
    author: "cinephile42",
    text:
      "Overrated to me — sentimental, predictable, and pretty traditional formally. Still very watchable.",
    createdAt: "2025-08-13T12:00:00Z",
  },
  {
    id: 4,
    author: "plotTalker",
    text:
      "That escape behind the poster and the tunnel reveal — legendary payoff to all that quiet setup.",
    createdAt: "2025-08-15T20:15:00Z",
  },
  {
    id: 5,
    author: "library_lover",
    text:
      "Red's voiceover is the heartbeat. The cadence, the reflections — it gives the story its soul.",
    createdAt: "2025-08-20T09:25:00Z",
  },
  {
    id: 6,
    author: "techie_take",
    text:
      "Impactful themes on institutional cruelty and compassion. But it's hardly innovative technically.",
    createdAt: "2025-08-21T11:05:00Z",
  },
  {
    id: 7,
    author: "endingEnthusiast",
    text:
      "The ending on the beach — from the letter under the stone to the reunion — cathartic and beautiful.",
    createdAt: "2025-08-24T22:42:00Z",
  },
];

export default function App() {
  // ... rest of component code from canvas ...
}
