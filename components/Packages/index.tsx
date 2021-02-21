import Package from './Package'
import packageList from './packageList'

import styles from './styles.module.css'

export default function Packages() {
  return (
    <div className={styles.packages}>
      {packageList.map(packageProps => (
        <Package {...packageProps} key={packageProps.title} />
      ))}
    </div>
  )
}
