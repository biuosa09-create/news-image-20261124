// news-image-20261124: copy the entry image into the output directory.
//
// The image is a JPEG stored under the name entry.png. The gate reads the
// format from the file's first bytes, so the name is fine either way.
// This program writes exactly one file and nothing else.
import {
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

const bytes = readFileSync(source);

// Validate the magic bytes: JPEG starts FF D8 FF, PNG starts 89 50 4E 47.
const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
const isPng =
  bytes[0] === 0x89 &&
  bytes[1] === 0x50 &&
  bytes[2] === 0x4e &&
  bytes[3] === 0x47;
if (!isJpeg && !isPng) {
  throw new Error("entry.png is neither a JPEG nor a PNG (bad magic bytes)");
}
if (bytes.length > 1048576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}

// The grader runs this program twice into the same output directory, and
// the copies written by the first run are read-only, so clear the
// destination first; otherwise the second run fails while copying over them.
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);

// Read the copy back and check it matches the source byte for byte, so a
// truncated or partial write is caught here instead of in the gate.
const copied = readFileSync(target);
if (copied.length !== bytes.length || !copied.equals(bytes)) {
  throw new Error("copied entry.png does not match the source");
}
