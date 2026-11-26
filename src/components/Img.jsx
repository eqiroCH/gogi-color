// Bild mit festen Massen (kein Layout-Springen) und Lazy Loading.
// <Img image={images.about} />                    → loading="lazy"
// <Img image={images.hero} priority />            → fetchPriority="high", kein lazy (nur 1 Bild pro Seite!)
// <Img src="/images/innen.webp" width={800} height={600} alt="…" />
// Für feste Seitenverhältnisse in <div class="media media--4x3"> einpacken.
export default function Img({ image, priority = false, className, sizes, ...rest }) {
  const { src, width, height, alt = '' } = { ...image, ...rest }
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      sizes={sizes}
      className={className}
      loading={priority ? undefined : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding={priority ? undefined : 'async'}
    />
  )
}
