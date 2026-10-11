import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["src", "app", "components", "data"];
const bad = /Ã|â€|Â/;
const matches = [];

function walk(path) {
  for (const entry of readdirSync(path, { withFileTypes: true })) {
    const fullPath = join(path, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (/\.(js|jsx|ts|tsx|mjs|css)$/.test(entry.name) && bad.test(readFileSync(fullPath, "utf8"))) matches.push(fullPath);
  }
}

for (const root of roots) if (statSync(root, { throwIfNoEntry: false })) walk(root);
if (matches.length) {
  console.error(`Corrupted UTF-8 sequences found in: ${matches.join(", ")}`);
  process.exit(1);
}
console.log("Encoding check passed.");
