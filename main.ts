import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I apologized for the delay, and the delay was me reading the same line forty times.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");

// Read-back self-check: the file must hold exactly the entry, 1-200 chars,
// with no trailing newline.
const back = readFileSync(outPath, "utf8");
if (back !== entry) {
  throw new Error("entry.txt does not match the winning line");
}
if (back.length < 1 || back.length > 200) {
  throw new Error(`entry.txt length ${back.length} is outside 1-200 chars`);
}
