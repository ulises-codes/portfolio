import Cell from './Cell'
import CELL_MAP from './languageMap'

export default function LanguageCells() {
  return (
    <div className="cells-wrapper--div">
      {CELL_MAP.map((cell, i) => (
        <Cell index={i} fill={cell.fill} key={cell.name}>
          <cell.Logo {...cell.props} />
        </Cell>
      ))}
    </div>
  )
}
