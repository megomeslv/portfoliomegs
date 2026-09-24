import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const resumeHref = '/documents/Maria-Eduarda-Gomes-Curriculo-2026.pdf'
const whatsappHref = 'https://api.whatsapp.com/send/?phone=5571992160080&text&type=phone_number&app_absent=0'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setMenuOpen(false), [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className="mg-nav">
        <Link to="/#hero" className="mg-logo" aria-label="Maria Gomes — início">
          <strong>Maria<br />Gomes</strong>
          <span>Portfólio</span>
        </Link>

        <nav className="mg-desktop-nav" aria-label="Navegação principal">
          <Link to="/#projetos">Projetos</Link>
          <Link to="/#sobre">Sobre</Link>
          <a href={resumeHref} download="Maria Eduarda Gomes - Curriculo 2026.pdf">Currículo</a>
        </nav>

        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mg-contact-link">
          <span className="mg-status-dot" />
          Vamos conversar
        </a>

        <button
          className="mg-menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? 'Fechar' : 'Menu'}
        </button>
      </header>

      <div id="mobile-menu" className={`mg-mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <span>Menu</span>
        <nav aria-label="Navegação mobile">
          <Link to="/#hero" tabIndex={menuOpen ? 0 : -1}>Início</Link>
          <Link to="/#projetos" tabIndex={menuOpen ? 0 : -1}>Projetos</Link>
          <Link to="/#sobre" tabIndex={menuOpen ? 0 : -1}>Sobre</Link>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" tabIndex={menuOpen ? 0 : -1}>Contato</a>
        </nav>
        <p>Salvador, Bahia<br />Brasil</p>
      </div>
    </>
  )
}
