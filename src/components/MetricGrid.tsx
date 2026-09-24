import type { ReactNode } from 'react'

export default function MetricGrid({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`metric-grid ${className}`.trim()}>{children}</div>
}
