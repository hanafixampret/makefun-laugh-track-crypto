import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I bought the dip, caught the falling knife, and held the bag — now the group chat calls me exit liquidity, but at least I finally have a title.";

if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry gate failed: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
