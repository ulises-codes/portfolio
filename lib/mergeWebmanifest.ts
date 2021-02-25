import themeList from './themeList'
import * as fs from 'fs'
import { join } from 'path'

import * as main from '../main.manifest.json'

const rootDir = join(__dirname, '../')

themeList.forEach(({ name, background_color, theme_color }) => {
  fs.writeFileSync(
    `${rootDir}/public/webmanifest/${name}.webmanifest`,
    JSON.stringify({ ...main, background_color, theme_color })
  )
})
