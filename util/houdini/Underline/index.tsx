import type { ReactNode } from 'react'

export default function Underline({ children }: { children: ReactNode }) {
  return <div className="underline--div">{children}</div>
}
