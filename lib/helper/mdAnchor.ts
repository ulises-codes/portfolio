export function createAnchor(text: string): string {
  const match = text
    .toLowerCase()
    .replace(/ /g, '-')
    .match(/[a-z][a-z0-9-]*/i)

  if (match) return match[0]
  else return ''
}
