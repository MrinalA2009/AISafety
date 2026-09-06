import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "../../../components/Reveal";
import { BLOG_POSTS } from "../../../data/blogPosts";

export const Route = createFileRoute("/_main/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} - Ethos.AI` },
          { name: "description", content: loaderData.excerpt },
        ]
      : [],
  }),
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-2xl px-6 pt-36 pb-32">
      <Reveal>
        <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          ← Back to Blog
        </Link>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-surface-2 px-2.5 py-1 text-[11px] tracking-wide text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {post.author} ·{" "}
          {new Date(post.publishedDate).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </Reveal>

      <div className="mt-10 space-y-5">
        {post.body.map((paragraph, i) => (
          <Reveal key={i} delay={i * 60}>
            <p className="text-base text-foreground/85 leading-relaxed">{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </article>
  );
}
