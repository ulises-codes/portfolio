import Node from 'public/images/language-logos/hexagon/node.svg'
import HtmlLogo from 'public/images/language-logos/hexagon/html.svg'
import JS from 'public/images/language-logos/hexagon/js.svg'
import ReactLogo from 'public/images/language-logos/hexagon/react.svg'
import CSSLogo from 'public/images/language-logos/hexagon/css.svg'
import TSLogo from 'public/images/language-logos/hexagon/ts.svg'
import GQLLogo from 'public/images/language-logos/hexagon/gql.svg'

import { Languages } from 'interfaces/languages'

export type LanguageMapProps = {
  fill: string
  name: Languages
  Logo: () => JSX.Element
  filename: string
  props: {
    [key: string]: string
  }
}

const languageMap: LanguageMapProps[] = [
  {
    fill: '#e34c26',
    name: 'HTML',
    Logo: HtmlLogo,
    filename: 'html',
    props: {
      height: '175',
      y: '50',
    },
  },
  {
    fill: '#3f873f',
    name: 'Node',
    Logo: Node,
    filename: 'node',
    props: {
      height: '200',
      y: '35',
    },
  },
  {
    fill: '#264de4',
    name: 'CSS',
    Logo: CSSLogo,
    filename: 'css',
    props: {
      height: '175',
      y: '50',
    },
  },
  {
    fill: '#E535AB',
    name: 'GraphQL',
    Logo: GQLLogo,
    filename: 'gql',
    props: {
      stroke: 'none',
      fill: 'white',
      height: '150',
      y: '55',
    },
  },
  {
    fill: '#f0db4f',
    name: 'JS',
    Logo: JS,
    filename: 'js',
    props: {
      y: '105',
      x: '15',
      height: '150',
    },
  },
  {
    fill: '#61DAFB',
    name: 'React',
    Logo: ReactLogo,
    filename: 'react',
    props: {
      fill: 'white',
      stroke: 'none',
      y: '45',
      height: '175',
    },
  },
  {
    fill: '#3178c6',
    name: 'TS',
    Logo: TSLogo,
    filename: 'ts',
    props: {
      y: '125',
      height: '150',
      stroke: 'none',
      x: '25',
    },
  },
]

export default languageMap
