/** Prefix a /public path with the site base (GitHub Pages serves under /AISafety/). */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  return base.replace(/\/$/, "") + (path.startsWith("/") ? path : `/${path}`);
}
