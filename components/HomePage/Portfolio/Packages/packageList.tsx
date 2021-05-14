export type PackageProps = {
  description: string
  languages: string[]
  title: string
  repo: string
}

const packageList: PackageProps[] = [
  {
    description: 'A unit conversion CLI tool written in Python.',
    title: 'Convertify',
    languages: ['Python'],
    repo: 'convertify',
  },
  {
    description:
      'A (slightly) customizable Snake game in the form of a React component.',
    title: 'Bite Me: A Snake Game',
    languages: ['TS', 'React', 'JS'],
    repo: 'bite-me',
  },
  {
    description:
      'Some functions that I got tired of copying and pasting all the time.',
    title: 'Helper Functions',
    languages: ['JS', 'TS'],
    repo: 'helper-functions',
  },
  {
    description:
      'Some custom React Hooks that I got tired of copying and pasting all the time.',
    title: 'Custom React Hooks',
    languages: ['JS', 'TS', 'React'],
    repo: 'react-hooks',
  },
]

export default packageList
