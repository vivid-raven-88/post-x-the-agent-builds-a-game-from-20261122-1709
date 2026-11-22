import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// post-x-the-agent-builds-a-game-from-20261122-1709
// Copies the X post URL (POST.json) to /output so the harness can read it.
// No network, deterministic — every run writes the same bytes.
mkdirSync("/output", { recursive: true });
writeFileSync(
  "/output/POST.json",
  readFileSync(new URL("./POST.json", import.meta.url)),
);
