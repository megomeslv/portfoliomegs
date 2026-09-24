import { Link } from 'react-router-dom'
import { images } from '../data/images'
import ProjectSlideshow from '../components/ProjectSlideshow'

const resumeHref = '/documents/Maria-Eduarda-Gomes-Curriculo-2026.pdf'
const whatsappHref = 'https://api.whatsapp.com/send/?phone=5571992160080&text&type=phone_number&app_absent=0'

const projects = [
  {
    number: '01',
    title: 'Àrokò',
    category: 'Produção cultural · Comunicação',
    period: '2025—2026',
    description: 'Mostra de moda afro-soteropolitana criada para ocupar espaços e conectar públicos.',
    to: '/projetos/aroko',
    images: [images.aroko[8], images.aroko[3], images.aroko[12], images.aroko[7]],
    className: 'mg-project-featured',
  },
  {
    number: '02',
    title: 'Amara NZero',
    category: 'Social media',
    period: '2025—atual',
    description: 'Conteúdo sobre energia traduzido para o dia a dia.',
    to: '/projetos/amara-nzero',
    images: [images.amara[2], images.amara[1], images.amara[6]],
    className: 'mg-project-card',
  },
  {
    number: '03',
    title: 'CineCampus UNEB',
    category: 'Eventos · Social media',
    period: '2025—2026',
    description: 'Cinema nacional na universidade, com identidade própria.',
    to: '/projetos/cinecampus',
    images: [images.cinecampus[10], images.cinecampus[13]],
    className: 'mg-project-card',
  },
  {
    number: '04',
    title: 'Câmara Municipal',
    category: 'Comunicação interna',
    period: '2024—2025',
    description: 'Campanhas internas de cultura organizacional.',
    to: '/projetos/camara-municipal',
    images: [images.camara[11], images.camara[4]],
    className: 'mg-project-card',
  },
] as const

export default function Home() {
  return (
    <div className="mg-home" id="hero">
      <section className="mg-hero">
        <div className="mg-hero-copy">
          <div className="mg-eyebrow">
            <span>Social media & produção cultural</span>
            <span>Salvador — BA</span>
          </div>

          <h1>
            Comunicação que <em>aproxima</em> marcas e pessoas.
          </h1>

          <div className="mg-hero-bottom">
            <p>
              Eu sou Maria Eduarda, comunicadora e produtora. Crio estratégias,
              experiências e conteúdos com intenção, repertório e resultado.
            </p>
            <a className="mg-round-link" href="#projetos" aria-label="Ver projetos selecionados">
              <span>Ver projetos</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="mg-portrait-wrap">
          <figure className="mg-portrait">
            <img src="/images/projects/aroko/aroko%20(10).webp" alt="Retrato de Maria Eduarda Gomes" />
          </figure>
          <p className="mg-portrait-caption">Ideias com contexto.<br />Projetos com presença.</p>
          <span className="mg-available">Disponível para novos projetos</span>
        </div>
      </section>

      <section className="mg-projects" id="projetos">
        <div className="mg-section-head">
          <div>
            <h2>Projetos<br /><em>selecionados</em></h2>
          </div>
        </div>

        <div className="mg-project-grid">
          {projects.map((project) => (
            <article key={project.to} className={`mg-project ${project.className}`}>
              <ProjectSlideshow images={project.images} alt={`Imagem do projeto ${project.title}`} />
              <div className="mg-project-content">
                <div className="mg-project-meta">
                  <p className="mg-project-label">{project.number} · {project.category} · {project.period}</p>
                  <h3>{project.title}</h3>
                </div>
                <p className="mg-project-description">{project.description}</p>
                <Link to={project.to} className="mg-project-link">Ver projeto →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mg-about" id="sobre">
        <div className="mg-about-photo">
          <img src={images.home[1]} alt="Maria Eduarda Gomes em um ambiente externo" loading="lazy" />
          <span aria-hidden="true">MEG<br />—26</span>
        </div>

        <div className="mg-about-copy">
          <h2>Entre estratégia,<br /><em>cultura e criação.</em></h2>
          <p className="mg-about-lead">
            Minha comunicação nasce da escuta. Gosto de entender o cenário,
            organizar ideias e transformar intenção em experiências que fazem sentido.
          </p>
          <p>
            Atuo entre o digital e o presencial, conectando planejamento,
            direção criativa, produção e análise. Acredito em processos
            colaborativos e em uma comunicação que tenha personalidade sem
            perder clareza.
          </p>
          <div className="mg-about-actions">
            <a href={resumeHref} download="Maria Eduarda Gomes - Curriculo 2026.pdf">Baixar currículo <span>↓</span></a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">Vamos conversar <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="mg-extras" aria-labelledby="extras-title">
        <div>
          <h2 id="extras-title">Outros projetos</h2>
        </div>
        <div className="mg-extra-list">
          <a href="https://www.instagram.com/rp_uneb/" target="_blank" rel="noopener noreferrer">
            <span>01</span><strong>RP_UNEB</strong><small>Gestão de mídias sociais · 2023—2025</small><b>↗</b>
          </a>
          <a href="https://www.instagram.com/copaunebiana/" target="_blank" rel="noopener noreferrer">
            <span>02</span><strong>1ª Copa da UNEB</strong><small>Comunicação e produção · 2025</small><b>↗</b>
          </a>
        </div>
      </section>
    </div>
  )
}
