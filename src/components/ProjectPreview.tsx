import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

type ProjectPreviewProps = {
  number: string
  title: string
  category: string
  period: string
  description: string
  to: string
  images: readonly string[]
  imageAlts: string[]
  layout?: 'wide' | 'split' | 'portrait' | 'stacked'
}

export default function ProjectPreview({
  number: _number,
  title,
  category,
  period,
  description,
  to,
  images,
  imageAlts,
  layout = 'split',
}: ProjectPreviewProps) {
  const headerRef = useReveal()
  const mediaRef = useReveal()
  const descRef = useReveal()

  return (
    <article className="project-preview">
      <header ref={headerRef} className="project-preview-head reveal">
        <div className="project-title-row">
          <h2 className="display project-preview-title">{title}</h2>
        </div>
        <div className="project-meta-inline">
          <span className="label">{category}</span>
          <span className="label project-period">{period}</span>
        </div>
      </header>

      <div ref={mediaRef} className={`project-preview-media project-layout-${layout} reveal-img`}>
        {images.map((src, index) => (
          <div className={`project-media-cell media-cell-${index + 1}`} key={src}>
            <img src={src} alt={imageAlts[index] ?? imageAlts[0]} className="img-fill" />
          </div>
        ))}
      </div>

      <div ref={descRef} className="project-preview-desc reveal d1">
        <p>{description}</p>
        <Link to={to} className="xlink project-case-link">VER CASE ↗</Link>
      </div>
    </article>
  )
}
