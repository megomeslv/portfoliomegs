import { Link } from 'react-router-dom'

type CaseLink = { label: string; title: string; to: string }

type Props = {
  previous?: CaseLink
  next?: CaseLink
}

export default function CaseNavigation({ previous, next }: Props) {
  return (
    <nav className="case-navigation" aria-label="Navegação entre cases">
      <div className="case-nav-side">
        {previous && (
          <Link to={previous.to} className="case-nav-link xlink">
            <span className="label">← {previous.label}</span>
            <strong className="display case-nav-title">{previous.title}</strong>
          </Link>
        )}
      </div>
      <Link to="/#projetos" className="xlink back-projects">VOLTAR AOS PROJETOS</Link>
      <div className="case-nav-side case-nav-side-right">
        {next && (
          <Link to={next.to} className="case-nav-link xlink">
            <span className="label">{next.label}</span>
            <strong className="display case-nav-title">{next.title} →</strong>
          </Link>
        )}
      </div>
    </nav>
  )
}
