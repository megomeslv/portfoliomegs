import useReveal from '../hooks/useReveal'
import CaseMeta from './CaseMeta'

type MetaItem = { label: string; value: string }

type CaseHeroProps = {
  number: string
  title: string
  category: string
  meta: MetaItem[]
  image: string
  imageAlt: string
  imagePosition?: string
  imageFit?: 'cover' | 'contain'
}

export default function CaseHero({ title, category, meta, image, imageAlt, imagePosition = 'center', imageFit = 'cover' }: CaseHeroProps) {
  const textRef = useReveal()

  return (
    <header className="case-hero">
      <div ref={textRef} className="case-hero-copy reveal">
        <h1 className="display case-title">{title}</h1>
        <p className="case-category">{category}</p>
        <CaseMeta items={meta} />
      </div>
      <figure className="case-hero-image">
        <img src={image} alt={imageAlt} style={{ objectPosition: imagePosition, objectFit: imageFit }} />
      </figure>
    </header>
  )
}
