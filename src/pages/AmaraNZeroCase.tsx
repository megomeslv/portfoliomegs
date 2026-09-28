import CaseHero from '../components/CaseHero'
import CaseIntro from '../components/CaseIntro'
import CaseEditorial from '../components/CaseEditorial'
import CaseSection from '../components/CaseSection'
import ExternalLinks from '../components/ExternalLinks'
import CaseNavigation from '../components/CaseNavigation'
import MetricGrid from '../components/MetricGrid'
import MetricItem from '../components/MetricItem'
import { images } from '../data/images'

const amaraLandscapeIndexes = new Set([0, 1])
const amaraGallery = images.amara.map((src, index) => ({
  src,
  alt: `Peça de comunicação da Amara NZero ${index + 1}`,
  label: index === 0 ? 'Campanha digital' : undefined,
  ratio: amaraLandscapeIndexes.has(index) ? 'wide' as const : 'portrait' as const,
}))

const linkedInPosts = [
  { src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7440028548557590528?collapsed=1', aspectRatio: '504 / 645' },
  { src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7447308563137396736?collapsed=1', aspectRatio: '504 / 628' },
  { src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7370808044202590208?compact=1', aspectRatio: '504 / 399' },
]

const youtubeVideos = [
  'https://www.youtube.com/embed/MmoxtH2hUCU',
  'https://www.youtube.com/embed/d-KMme2fnoI',
  'https://www.youtube.com/embed/_mTWEsaN0jY?si=groVy-744u8AhOA6',
  'https://www.youtube.com/embed/sX95SXMwXVo?si=zfMkXOA3q7uOj7bH',
]

export default function AmaraNZeroCase() {
  return (
    <article className="case-page">
      <CaseHero number="01" title="AMARA NZERO" category="MARKETING DIGITAL / SOCIAL MEDIA / CONTEÚDO / COMUNICAÇÃO" meta={[{ label: 'CARGO', value: 'ESTAGIÁRIA DE MARKETING' }, { label: 'PERÍODO', value: 'FEVEREIRO DE 2025 — ATUAL' }]} image={images.amara[0]} imageAlt="Conteúdo da Amara NZero sobre BESS" imageFit="contain" />
      <CaseIntro context="Empresa de transição energética. Minha atuação conecta planejamento editorial, produção de conteúdo, mídia orgânica e leitura de performance." responsibilities={['Planejamento editorial e gestão de redes sociais', 'Roteirização, captação, edição de vídeo e design', 'SEO, AEO e análise de performance orgânica', 'Endomarketing e apoio à comunicação interna', 'Materiais de apoio comercial e eventos']} />
      <CaseSection label="RESULTADOS" title="Crescimento que se mede" intro="Uma atuação que conecta presença, descoberta e visibilidade em novos canais de busca.">
        <MetricGrid className="metric-grid-featured">
          <MetricItem value="+10 mil" label="novos seguidores somando Instagram e LinkedIn" detail="Instagram 3.583 · LinkedIn 6.475" size="primary" />
          <MetricItem value="810,5 mil" label="impressões orgânicas no Google" detail="CTR de 3,73%" size="primary" />
          <MetricItem value="2º lugar" label="entre as marcas citadas por IA" detail="Promptado · 10/04 a 22/09/2026" size="primary" />
        </MetricGrid>
      </CaseSection>
      <section className="case-business-bar" aria-label="Contexto de negócio da Amara NZero">
        <div>
          <p className="label">CONTEXTO DE NEGÓCIO</p>
          <strong className="display">R$ 25,3 milhões</strong>
        </div>
        <div>
          <p className="case-business-bar-value">1.897 compras</p>
          <p className="case-business-bar-scope">Receita atribuída à busca orgânica no período. Conteúdo e SEO são uma das frentes que alimentam esse canal.</p>
        </div>
      </section>
      <CaseSection label="FRENTES DE ATUAÇÃO" title="Presença, descoberta e visibilidade" className="case-fronts-section">
        <div className="case-front-grid">
          <article className="case-front">
            <h3>Presença</h3>
            <MetricGrid className="case-front-metrics">
              <MetricItem value="114" label="reels no Instagram" size="primary" />
              <MetricItem value="71" label="posts no Instagram" />
              <MetricItem value="1.059" label="stories no Instagram" />
            </MetricGrid>
            <p className="case-front-note">LinkedIn: 88 posts, engajamento de 5,09% e newsletter com 22,2 mil visualizações. YouTube: 105 vídeos e 49,6 mil visualizações.</p>
          </article>
          <article className="case-front">
            <h3>Descoberta</h3>
            <MetricGrid className="case-front-metrics">
              <MetricItem value="30,2 mil" label="cliques vindos do Google" size="primary" />
              <MetricItem value="10,1" label="posição média" />
              <MetricItem value="84,9%" label="de sessões engajadas" />
            </MetricGrid>
          </article>
          <article className="case-front">
            <h3>Visibilidade em IA</h3>
            <MetricGrid className="case-front-metrics">
              <MetricItem value="4.536" label="menções" size="primary" />
              <MetricItem value="16,6%" label="de visibilidade" />
              <MetricItem value="27.342" label="conversas analisadas" detail="65 prompts" />
            </MetricGrid>
          </article>
        </div>
      </CaseSection>
      <section className="amara-featured-content" aria-labelledby="amara-featured-content-title">
        <div className="amara-featured-content-inner">
          <header className="amara-featured-content-header">
            <p className="label">CONTEÚDO EM DESTAQUE</p>
            <h2 id="amara-featured-content-title">Publicações e vídeos</h2>
          </header>

          <section className="amara-featured-group" aria-labelledby="amara-linkedin-title">
            <h3 id="amara-linkedin-title">LinkedIn</h3>
            <div className="amara-featured-grid amara-featured-grid--linkedin">
              {linkedInPosts.map((post) => (
                <figure className="amara-featured-embed" key={post.src}>
                  <div className="amara-featured-embed-frame" style={{ aspectRatio: post.aspectRatio }}>
                    <iframe
                      src={post.src}
                      loading="lazy"
                      frameBorder="0"
                      allowFullScreen
                      title="Publicação incorporada"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </section>

          <section className="amara-featured-group" aria-labelledby="amara-youtube-title">
            <h3 id="amara-youtube-title">YouTube</h3>
            <div className="amara-featured-grid amara-featured-grid--youtube">
              {youtubeVideos.map((video) => (
                <figure className="amara-featured-embed" key={video}>
                  <div className="amara-featured-embed-frame amara-featured-embed-frame--youtube">
                    <iframe
                      src={video}
                      loading="lazy"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </section>
      <CaseEditorial id="amara-nzero" title="AMARA NZERO" period="FEVEREIRO DE 2025 — ATUAL" areas={['Marketing digital', 'Social media', 'Conteúdo', 'Comunicação']} description="Atuação em comunicação digital e marketing no setor de energia, conectando planejamento editorial, social media, SEO, audiovisual e análise de performance." images={amaraGallery}>
        <section className="case-editorial-video" aria-labelledby="amara-videos-title">
          <h3 id="amara-videos-title" className="label">Audiovisual</h3>
          <div className="case-editorial-video-grid">
            <figure className="case-editorial-video-item">
              <video controls playsInline preload="metadata">
                <source src="/videos/projects/amara-nzero/atendimentoia.mp4" type="video/mp4" />
              </video>
              <figcaption className="case-editorial-video-caption">Atendimento com IA</figcaption>
            </figure>
            <figure className="case-editorial-video-item">
              <video controls playsInline preload="metadata">
                <source src="/videos/projects/amara-nzero/montageinstitucional.mp4" type="video/mp4" />
              </video>
              <figcaption className="case-editorial-video-caption">Montagem institucional</figcaption>
            </figure>
            <figure className="case-editorial-video-item">
              <video controls playsInline preload="metadata">
                <source src="/videos/projects/amara-nzero/promoinetrsolar.mp4" type="video/mp4" />
              </video>
              <figcaption className="case-editorial-video-caption">Promoção Intersolar</figcaption>
            </figure>
          </div>
        </section>
      </CaseEditorial>
      <ExternalLinks links={[{ label: 'INSTAGRAM', href: 'https://instagram.com/amaranzerobrasil' }, { label: 'LINKEDIN', href: 'https://linkedin.com/company/amaran-zero-brasil' }, { label: 'YOUTUBE', href: 'https://youtube.com/c/AmaraNZeroBrasil' }, { label: 'BLOG', href: 'https://amaranzero.com.br/blog' }]} />
      <CaseNavigation next={{ label: 'PRÓXIMO CASE', title: 'ÀROKÒ', to: '/projetos/aroko' }} />
    </article>
  )
}
