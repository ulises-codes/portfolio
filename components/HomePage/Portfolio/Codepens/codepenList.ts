export type CodepenProps = {
  description: string
  loaded?: boolean
  slug: string
  title: string
}

const codepenList: CodepenProps[] = [
  {
    title: 'Muziktron',
    slug: 'abLaaQB',
    description: 'A sound generator written in HTML, CSS, and Vanilla JS',
  },
  {
    title: 'Weather Report',
    slug: 'JjraaxN',
    description: 'An exercise in data fetching with Vanilla JS',
  },
  {
    title: 'Currency Calculator for Church Offerings or Bank Tellers',
    slug: 'XvzNgp',
    description: 'Currency Calculator for Church Offerings or Bank Tellers',
  },
  {
    title: 'Simple Clock',
    slug: 'ExVyEgw',
    description: 'Simple Clock',
  },
  {
    title: 'Roman Numerals Converter',
    slug: 'rRBLXa',
    description: 'Roman Numerals Converter',
  },
]

export default codepenList
