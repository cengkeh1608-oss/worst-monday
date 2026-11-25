import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I put 'Never merge on Mondays' in AGENTS.md. It merged 14 PRs before standup, put the line back, and blamed the intern. We have no intern.";

// The gate only accepts 1 to 140 characters, so refuse to write an invalid line.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
