import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { LanguageMapProps } from './languageMap'

const Cell = dynamic(() => import('./Cell'))

export default function LanguageCells() {
  const [languageMap, setLanguageMap] = useState<LanguageMapProps[]>()

  useEffect(() => {
    import('./languageMap').then(mod => setLanguageMap(mod.default))
  }, [])

  if (!languageMap) return <div className="cells-wrapper-inner--div" />

  return (
    <div className="cells-wrapper--div">
      <div className="cells-wrapper-inner--div">
        {languageMap.map((cell, i) => (
          <Cell index={i} fill={cell.fill} key={cell.name}>
            <cell.Logo {...cell.props} />
          </Cell>
        ))}
      </div>
    </div>
  )
}
