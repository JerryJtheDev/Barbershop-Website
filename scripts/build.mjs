import { cp, rm } from "node:fs/promises";

const staticFolders = ["HTML", "CSS", "media"];

await rm("public", { recursive: true, force: true });
await Promise.all(
  staticFolders.map((folder) => cp(folder, `public/${folder}`, { recursive: true })),
);
