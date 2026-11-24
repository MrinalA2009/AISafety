import type { Workshop } from "../../data/workshops";
import { assetUrl } from "../../lib/assetUrl";

/** Shows the first approved photo, or a quiet placeholder until one is added. */
export function WorkshopPhoto({
  workshop,
  className = "",
}: {
  workshop: Pick<Workshop, "title" | "images">;
  className?: string;
}) {
  const img = workshop.images[0];
  if (img) {
    return (
      <figure className={className}>
        <img
          src={assetUrl(img.src)}
          alt={img.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {img.caption && <figcaption className="sr-only">{img.caption}</figcaption>}
      </figure>
    );
  }
  return (
    <div
      className={`grid place-items-center bg-surface-2 text-muted-foreground ${className}`}
      role="img"
      aria-label={`Photo from ${workshop.title} coming soon`}
    >
      <div className="text-center px-4">
        <div className="text-2xl opacity-40" aria-hidden="true">◐</div>
        <div className="mt-2 text-[11px] uppercase tracking-[0.2em]">Photo coming soon</div>
      </div>
    </div>
  );
}
