import type { ReactNode } from 'react'

type AngledCornersProps = {
  children: ReactNode
  className: string
}

export default function AngledCorners({
  children,
  className,
}: AngledCornersProps) {
  return <div className={className}>{children}</div>
}
