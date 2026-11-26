// Hands the entry in: writes the one line to /output/entry.txt.
// Node 22 runs this TypeScript as it is; there are no dependencies and no build step.
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

/** The entry. */
export const LINE =
  "Your fridge has a camera, an app, and opinions about my milk, and still can't explain why the ice tastes like regret.";

/** Hand the entry in: make the output directory, then write the line as UTF-8. */
export async function writeEntry(
  outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output",
): Promise<string> {
  const target = join(outputDir, "entry.txt");
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, LINE, "utf8");
  return target;
}

const written = await writeEntry();
console.log(`${written}: ${Buffer.byteLength(LINE, "utf8")} bytes`);
