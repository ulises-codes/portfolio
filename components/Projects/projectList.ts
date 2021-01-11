import { Languages } from 'interfaces/languages'

export type ProjectProps = {
  name: string
  description?: string
  imgSrc: string
  languages: Languages[]
  url: string
}

const projectList: ProjectProps[] = [
  {
    name: 'allergy.guru',
    url: 'allergy.guru',
    imgSrc: 'allergy-guru_bksv0w.png',
    languages: ['JS', 'React', 'HTML', 'CSS'],
  },
  {
    name: 'Women Arise',
    description: '(Project in progress)',
    url: 'women-arise-site.ulises.vercel.app',
    imgSrc: 'women-arise_lk4evx',
    languages: ['JS', 'React', 'HTML', 'CSS'],
  },
  {
    name: 'Jonatan Velazquez',
    url: 'jonatanvelazquez.com',
    imgSrc: 'jonatan-velazquez_u24alo',
    languages: ['JS', 'React', 'GraphQL', 'HTML', 'CSS'],
  },
  {
    name: 'Funky Merch',
    description: 'A demo ecommerce site',
    url: 'funkymerch.xyz',
    imgSrc: 'funky-merch_ekuagn.png',
    languages: ['JS', 'TS', 'React', 'GraphQL', 'HTML', 'CSS'],
  },
]

export default projectList
