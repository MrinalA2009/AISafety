import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../../../components/Reveal";
import { BLOG_POSTS } from "../../../data/blogPosts";

export const Route = createFileRoute("/_main/blog/")({
  head: () => ({
    meta: [
      { title: "Blog - Ethos.AI" },
      { name: "description", content: "Articles on AI safety, AI literacy, and workshop updates." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-36 pb-32">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Blog</div>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          Articles &amp; updates
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
          Writing on AI safety, AI literacy, and workshop updates.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {BLOG_POSTS.map((post, i) => (
          <Reveal key={post.slug} delay={i * 90}>
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="block h-full rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-surface-2 px-2.5 py-1 text-[11px] tracking-wide text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-4 font-display text-xl font-semibold tracking-tight leading-snug">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              <p className="mt-4 text-xs text-muted-foreground/70">
                {new Date(post.publishedDate).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
