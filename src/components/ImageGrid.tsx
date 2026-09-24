type ImageSpan = 4 | 5 | 6 | 7 | 8 | 12
type ImageRatio = 'wide' | 'landscape' | 'square' | 'portrait' | 'tall'

type GridImage = {
  src: string
  alt: string
  label?: string
  position?: string
  span?: ImageSpan
  ratio?: ImageRatio
}

export default function ImageGrid({ images }: { images: GridImage[] }) {
  return (
    <div className="image-grid">
      {images.map((image, index) => {
        const wireframe = (index % 6) + 1
        const ratioClass = image.ratio ? ` image-ratio-${image.ratio}` : ''

        return (
          <figure
            className={`image-grid-item image-grid-item-${wireframe}${ratioClass}`}
            style={{ gridColumn: image.span ? `span ${image.span}` : undefined }}
            key={`${image.src}-${index}`}
          >
            <div className="image-grid-media">
              <img src={image.src} alt={image.alt} className="img-fill" style={{ objectPosition: image.position }} />
            </div>
            {image.label && <figcaption className="label image-caption">{image.label}</figcaption>}
          </figure>
        )
      })}
    </div>
  )
}
