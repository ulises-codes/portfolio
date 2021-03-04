import { createAnchor } from 'lib/helper/mdAnchor'
import type { HTMLAttributes } from 'react'
import styles from './styles.module.css'

export default function AnchorLink(props: HTMLAttributes<HTMLHeadingElement>) {
  const id = createAnchor(props.children?.toString() ?? '')

  return (
    <button
      className={styles.button}
      title="Copy a link to this section"
      onClick={e => {
        e.preventDefault()
        navigator.clipboard.writeText(`${location.href}#${id}`)
        e.currentTarget.blur()
      }}>
      <h2 id={id} className="subtitle" {...props} />
      <span>#</span>
    </button>
  )
}
