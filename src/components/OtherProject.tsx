import type { ReactNode } from 'react'
import useReveal from '../hooks/useReveal'

type OtherProjectProps = {
  title: string
  period?: string
  children: ReactNode
  link?: string
  images?: readonly string[]
  imageAlts?: string[]
}

export default function OtherProject({ title, period, children, link, images = [], imageAlts = [] }: OtherProjectProps) {
  const ref = useReveal()
  const mediaCount = Math.min(images.length, 3)

  return (
    <article ref={ref} className="other-project reveal">
      <div className="other-project-meta">
        <h3 className="display other-project-title">{title}</h3>
        {period && <p className="other-project-period">{period}</p>}
      </div>

      <div className="other-project-copy">
        <p className="body-copy">{children}</p>
        {images.length > 0 && (
          <div className={`other-project-media other-project-media--${mediaCount}`}>
            {images.map((src, index) => (
              <img key={src} src={src} alt={imageAlts[index] ?? `Imagem do projeto ${title}`} loading="lazy" />
            ))}
          </div>
        )}
        {link && <a href={link} target="_blank" rel="noopener noreferrer" className="editorial-link">Ver projeto ↗</a>}
      </div>
    </article>
  )
}
