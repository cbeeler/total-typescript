interface RequiredScores {
  math: number;
  english: number;
  science: number;
};

interface Scores extends RequiredScores {
  [key: string]: number;
};

// So you could do interface Scores extends Record<string, number> but you
// don't get access to the required if needed.

// @ts-expect-error science is missing!
const scores: Scores = {
  math: 95,
  english: 90,
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;
