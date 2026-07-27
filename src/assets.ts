// Resolve a bundled image by base name (e.g. "web-dark", "p2private-light", "hero-icon").
// Vite content-hashes these files, so URLs change only when the image content changes —
// automatic cache-busting, no manual ?v= needed.
const urls = import.meta.glob("./assets/img/*.png", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const map: Record<string, string> = Object.fromEntries(
  Object.entries(urls).map(([path, url]) => [
    path.split("/").pop()!.replace(".png", ""),
    url,
  ]),
);

export const asset = (name: string): string => map[name] ?? "";
