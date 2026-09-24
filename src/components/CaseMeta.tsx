type CaseMetaItem = {
  label: string
  value: string
}

export default function CaseMeta({ items }: { items: CaseMetaItem[] }) {
  return (
    <dl className="case-meta">
      {items.map((item) => (
        <div key={`${item.label}-${item.value}`} className="case-meta-item">
          <dt className="label">{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
