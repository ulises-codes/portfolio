import type { CodepenProps } from './codepenList'
import styles from './styles.module.scss'

export default function Codepen({ description, slug, title }: CodepenProps) {
  const body = document.querySelector('body') as HTMLBodyElement

  const surface = getComputedStyle(body).getPropertyValue('--surface')
  const textColor = getComputedStyle(body).getPropertyValue('--text-on-surface')
  const activeColor = getComputedStyle(body).getPropertyValue(
    '--active-tab-color'
  )

  return (
    <div className={[styles.codepenWrapper, 'surface'].join(' ')}>
      <div
        className="codepen"
        data-height="375"
        data-theme-id="light"
        data-default-tab="result"
        data-user="ulises-codes"
        data-slug-hash={slug}
        data-preview="none"
        data-border="none"
        data-tab-bar-color={surface}
        data-active-tab-accent-color={surface}
        data-active-tab-color={surface}
        data-tab-color={surface}
        data-tab-link-color={textColor}
        data-active-link-color={activeColor}
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
    </div>
  )
}
