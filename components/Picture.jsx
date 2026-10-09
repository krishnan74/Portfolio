import images from "@/data/images.json";

// AVIF/WebP <picture> for files produced by scripts/optimize-images.mjs.
// Width/height come from the manifest so the browser reserves space.
export default function Picture({ name, alt, sizes = "100vw", className = "", loading = "lazy", fetchPriority }) {
  const meta = images[name];
  if (!meta) return null;
  const srcSet = (ext) =>
    meta.widths.map((w) => `/images/opt/${name}-${w}.${ext} ${Math.min(w, meta.width)}w`).join(", ");

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/opt/${name}-${meta.widths[0]}.webp`}
        width={meta.width}
        height={meta.height}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchpriority={fetchPriority}
        className={className}
        style={{ aspectRatio: `${meta.width} / ${meta.height}` }}
      />
    </picture>
  );
}
