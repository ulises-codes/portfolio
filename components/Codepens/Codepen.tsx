import dynamic from 'next/dynamic'
import type { CodepenProps } from './codepenList'

import styles from './styles.module.scss'

const AngledCorners = dynamic(() => import('util/houdini/AnglesCorners'), {
  ssr: false,
})

export default function Codepen({ description, slug, title }: CodepenProps) {
  return (
    <AngledCorners className={styles['codepen-wrapper--div']}>
      <div
        className="codepen"
        data-height="375"
        data-theme-id="light"
        data-default-tab="js,result"
        data-user="ulises-codes"
        data-slug-hash={slug}
        data-preview="none"
        data-border="none"
        data-tab-bar-color="#f1dd6d"
        data-active-tab-accent-color="#f1dd6d"
        data-active-tab-color="#f1dd6d"
        data-tab-color="#f1dd6d"
        data-tab-link-color="#171717"
        data-active-link-color="#24748f"
        data-pen-title={title}>
        <span>
          See the Pen
          <a href={`https://codepen.io/ulises-codes/pen/${slug}`}>
            {description}{' '}
          </a>{' '}
          by UH (<a href="https://codepen.io/ulises-codes">@ulises-codes</a>) on{' '}
          <a href="https://codepen.io">CodePen</a>.
        </span>
      </div>
    </AngledCorners>
  )
}
