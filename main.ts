// Loading Screen Gold — a single loading-screen tip, written to /output/entry.txt.
//
// The tip is a fixed string: the program takes no input, reads nothing from
// the network or the environment, and always writes the same one line.
import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: the code is still loading. So is your agent's confidence. Only one of them earned it.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const chars = [...TIP].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`tip must be 1-200 characters, got ${chars}`);
  }
  if (TIP.includes("\n")) {
    throw new Error("tip must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  // No trailing newline: the file is exactly the tip, nothing more.
  writeFileSync(OUTPUT_PATH, TIP, "utf8");
  // A short confirmation on stdout so a local run shows what was written.
  console.log(`wrote ${chars} characters to ${OUTPUT_PATH}`);
}

main();
