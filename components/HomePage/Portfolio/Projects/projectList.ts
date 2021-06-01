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
    name: 'Convertify',
    url: 'convertify.fun',
    imgSrc: 'convertify.png',
    languages: ['Svelte'],
  },
  {
    name: 'allergy.guru',
    url: 'allergy.guru',
    imgSrc: 'allergy-guru.png',
    languages: ['JS', 'React', 'HTML', 'CSS'],
  },
  {
    name: 'Jonatan Velazquez',
    url: 'jonatanvelazquez.com',
    imgSrc: 'jonatan-velazquez.png',
    languages: ['JS', 'React', 'GraphQL', 'HTML', 'CSS'],
  },
  {
    name: 'Funky Merch',
    description: 'A demo ecommerce site',
    url: 'funkymerch.xyz',
    imgSrc: 'funky-merch.png',
    languages: ['TS', 'React', 'GraphQL', 'HTML', 'CSS'],
  },
]

export default projectList
