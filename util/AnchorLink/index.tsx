import { createAnchor } from 'lib/helper/mdAnchor'
import type { HTMLAttributes } from 'react'
import styles from './styles.module.css'

export default function AnchorLink(props: HTMLAttributes<HTMLHeadingElement>) {
  const id = createAnchor(props.children?.toString() ?? '')

  return (
    <div className={styles.wrapper}>
      <h2 id={id} className="subtitle" {...props} />
      {'clipboard' in navigator && (
        <button
          className={styles.button}
          title="Copy a link to this section"
          onClick={e => {
            e.preventDefault()
            navigator.clipboard.writeText(
              `${location.origin}${location.pathname}#${id}`
            )
            e.currentTarget.blur()
          }}>
          #
        </button>
      )}
    </div>
  )
}
