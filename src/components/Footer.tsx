const whatsappHref = 'https://api.whatsapp.com/send/?phone=5571992160080&text&type=phone_number&app_absent=0'

export default function Footer() {
  return (
    <footer className="mg-footer" id="footer">
      <div className="mg-footer-intro">
        <span>Tem um projeto em mente?</span>
        <h2>Vamos criar<br /><em>algo relevante.</em></h2>
        <a href="mailto:megomeslv@gmail.com">megomeslv@gmail.com <span>↗</span></a>
      </div>
      <div className="mg-footer-bottom">
        <p>Maria Eduarda Gomes<br />Comunicação & produção</p>
        <nav aria-label="Redes sociais">
          <a href="https://www.linkedin.com/in/megomeslv/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
          <a href="mailto:megomeslv@gmail.com">E-mail ↗</a>
        </nav>
        <p>Salvador — BA<br />© 2026</p>
      </div>
    </footer>
  )
}
