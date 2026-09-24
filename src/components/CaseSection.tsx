import type { ReactNode } from 'react'
import useReveal from '../hooks/useReveal'

type CaseSectionProps = {
  label?: string
  title: string
  intro?: string
  children: ReactNode
  className?: string
}

export default function CaseSection({ label, title, intro, children, className = '' }: CaseSectionProps) {
  const ref = useReveal()
  return (
    <section ref={ref} className={`case-section reveal ${className}`.trim()}>
      <header className="case-section-head">
        {label && <p className="label">{label}</p>}
        <h2 className="display section-title">{title}</h2>
        {intro && <p className="body-copy section-intro">{intro}</p>}
      </header>
      {children}
    </section>
  )
}
