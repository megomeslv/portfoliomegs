export type MetricSize = 'primary' | 'secondary' | 'small'

type MetricItemProps = {
  value: string
  label: string
  detail?: string
  size?: MetricSize
}

export default function MetricItem({ value, label, detail, size = 'secondary' }: MetricItemProps) {
  return (
    <div className={`metric-item metric-${size}`}>
      <strong className="display metric-value">{value}</strong>
      <span className="metric-label">{label}</span>
      {detail && <span className="metric-detail">{detail}</span>}
    </div>
  )
}
