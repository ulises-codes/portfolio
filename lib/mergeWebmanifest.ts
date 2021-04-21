import themeList from './themeList'
import * as fs from 'fs'
import { join } from 'path'

import main from '../main.manifest.json'

const rootDir = join(__dirname, '../')

const dirPath = `${rootDir}/public/webmanifest`

fs.mkdirSync(dirPath, { recursive: true })

themeList.forEach(({ name, background_color, theme_color }) => {
  fs.writeFileSync(
    `${dirPath}/${name}.webmanifest`,
    JSON.stringify({ ...main, background_color, theme_color }),
    { flag: 'w' }
  )
})
