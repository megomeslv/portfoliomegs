import CaseHero from '../components/CaseHero'
import CaseIntro from '../components/CaseIntro'
import CaseEditorial from '../components/CaseEditorial'
import CaseSection from '../components/CaseSection'
import ExternalLinks from '../components/ExternalLinks'
import CaseNavigation from '../components/CaseNavigation'
import MetricGrid from '../components/MetricGrid'
import MetricItem from '../components/MetricItem'
import { images } from '../data/images'

const amaraGallery = [
  { src: images.amara[0], alt: 'Banner de campanha digital da Amara NZero', label: 'Campanha digital', ratio: 'wide' as const, align: 'center' as const },
  { src: images.amara[1], alt: 'Card de conteúdo da Amara NZero', ratio: 'portrait' as const, align: 'top' as const },
  { src: images.amara[2], alt: 'Peça de plataforma da Amara NZero', ratio: 'portrait' as const, align: 'top' as const },
  { src: images.amara[3], alt: 'Peça de plataforma da Amara NZero', ratio: 'portrait' as const, align: 'top' as const },
  { src: images.amara[4], alt: 'Peça de plataforma da Amara NZero', ratio: 'portrait' as const, align: 'top' as const },
  { src: images.amara[5], alt: 'Story de campanha solar da Amara NZero', label: 'Conteúdo para stories', ratio: 'story' as const, align: 'top' as const },
  ...images.amara.slice(6).map((src, index) => ({
    src,
    alt: `Peça de comunicação para clientes da Amara NZero ${index + 1}`,
    ratio: 'portrait' as const,
    align: 'top' as const,
  })),
]

export default function AmaraNZeroCase() {
  return (
    <article className="case-page">
      <CaseHero number="01" title="AMARA NZERO" category="MARKETING DIGITAL / SOCIAL MEDIA / CONTEÚDO / COMUNICAÇÃO" meta={[{ label: 'CARGO', value: 'ESTAGIÁRIA DE MARKETING' }, { label: 'PERÍODO', value: 'FEVEREIRO DE 2025 — ATUAL' }]} image={images.amara[4]} imageAlt="Campanha digital da Amara NZero Brasil" />
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
