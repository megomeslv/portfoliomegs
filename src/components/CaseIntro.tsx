import useReveal from '../hooks/useReveal'

type CaseIntroProps = {
  context: string
  responsibilities: string[]
}

export default function CaseIntro({ context, responsibilities }: CaseIntroProps) {
  const ref = useReveal()

  return (
    <section ref={ref} className="case-intro reveal" aria-label="Contexto e atuação no projeto">
      <div className="case-intro-block case-intro-context">
        <p className="label">CONTEXTO</p>
        <p className="case-intro-context-copy">{context}</p>
      </div>

      <div className="case-intro-block case-intro-role">
        <div className="case-intro-role-head">
          <p className="label">MINHA ATUAÇÃO</p>
        </div>
        <ol className="responsibility-list">
          {responsibilities.map((item, index) => (
            <li key={item}>
              <span className="responsibility-index">{String(index + 1).padStart(2, '0')}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
