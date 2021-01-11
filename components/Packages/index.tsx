import Package from './Package'
import packageList from './packageList'

export default function Packages() {
  return (
    <div className="packages--div">
      {packageList.map(packageProps => (
        <Package {...packageProps} key={packageProps.title} />
      ))}
    </div>
  )
}
