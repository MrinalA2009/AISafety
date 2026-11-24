import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { WORKSHOPS } from "../data/workshops";
import { SLIDE_DECKS } from "../data/slideDecks";
import { BLOG_POSTS } from "../data/blogPosts";

const BASE_URL = "";

interface SitemapEntry { path: string; changefreq?: string; priority?: string; }

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/workshops", changefreq: "weekly", priority: "0.9" },
          ...WORKSHOPS.map((w) => ({ path: `/workshops/${w.slug}`, changefreq: "monthly", priority: "0.6" })),
          { path: "/slides", changefreq: "monthly", priority: "0.7" },
          ...SLIDE_DECKS.map((d) => ({ path: `/slides/${d.id}`, changefreq: "monthly", priority: "0.6" })),
          { path: "/resources", changefreq: "weekly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          ...BLOG_POSTS.map((p) => ({ path: `/blog/${p.slug}`, changefreq: "monthly", priority: "0.5" })),
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "yearly", priority: "0.4" },
          { path: "/research", changefreq: "monthly", priority: "0.7" },
          { path: "/wolf", changefreq: "monthly", priority: "0.9" },
          { path: "/wolf/research", changefreq: "monthly", priority: "0.8" },
          { path: "/wolf/experience", changefreq: "monthly", priority: "0.8" },
          { path: "/wolf/citations", changefreq: "monthly", priority: "0.7" },
        ];
        const urls = entries.map(e =>
          `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
