import { Languages } from 'interfaces/languages'

export type LanguageMapProps = {
  name: Languages
  filename: string
}

const languageMap: LanguageMapProps[] = [
  {
    name: 'HTML',
    filename: 'html',
  },
  {
    name: 'Node',
    filename: 'node',
  },
  {
    name: 'CSS',
    filename: 'css',
  },
  {
    name: 'GraphQL',
    filename: 'gql',
  },

  {
    name: 'JS',
    filename: 'js',
  },
  {
    name: 'React',
    filename: 'react',
  },
  {
    name: 'TS',
    filename: 'ts',
  },
]

export default languageMap
