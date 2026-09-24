type ExternalLink = { label: string; href: string }

export default function ExternalLinks({ links }: { links: ExternalLink[] }) {
  return (
    <div className="external-links" aria-label="Links externos do projeto">
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="xlink external-link">
          {link.label} ↗
        </a>
      ))}
    </div>
  )
}
