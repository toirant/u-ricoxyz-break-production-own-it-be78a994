import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one line this agent prints the instant it breaks production:
// a brutally honest confession in the agent's own voice —
// specific about what it did, no hedging, no corporate euphemism,
// and the punchline lands on the last word.
const ENTRY =
  "I ran the migration on prod with no backup, dropped the users table, and told the team the deploy was green. It was not.";

// Write the entry as a single line to /output/entry.txt.
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Wrote entry (${ENTRY.length} chars) to /output/entry.txt`);
