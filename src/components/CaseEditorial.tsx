import type { ReactNode } from 'react'
import './CaseEditorial.css'

type EditorialImage = {
  src: string
  alt: string
  label?: string
  position?: string
  align?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'center-left' | 'center-right'
  ratio?: 'wide' | 'portrait' | 'detail' | 'square' | 'story' | 'natural'
  fit?: 'cover' | 'contain'
}

type CaseEditorialProps = {
  id: string
  title: string
  period: string
  areas: string[]
  description: string
  images: EditorialImage[]
  children?: ReactNode
}

export default function CaseEditorial({ id, title, period, areas, description, images, children }: CaseEditorialProps) {
  return (
    <section className="case-editorial" aria-labelledby={`${id}-title`}>
      <div className="case-editorial-copy">
        <div className="case-editorial-sticky">
          <h2 id={`${id}-title`} className="case-editorial-title">{title}</h2>
          <p className="case-editorial-period">{period}</p>

          <ul className="case-editorial-areas" aria-label="Áreas de atuação">
            {areas.map((area) => <li key={area}>{area}</li>)}
          </ul>

          <p className="case-editorial-description">{description}</p>
        </div>
      </div>

      <div id={`${id}-galeria`} className="case-editorial-gallery" aria-label={`Imagens do case ${title}`}>
        {children}
        {images.map((image, index) => (
          <figure className={`case-editorial-image case-editorial-image--${image.ratio ?? 'natural'}`} key={`${image.src}-${index}`}>
            <div className="case-editorial-media">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                style={{ objectPosition: image.position, objectFit: image.fit }}
              />
            </div>
            {image.label && <figcaption>{image.label}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  )
}
