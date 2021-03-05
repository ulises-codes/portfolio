const ratios = [
  { w: 696, h: 391.5 },
  { w: 696, h: 522 },
  { w: 696, h: 696 },
]

export const constructURLPrefix = (w: number, h: number, suffix: string) => {
  return `"https://res.cloudinary.com/da3fgujdy/c_fit,h_${h},w_${w}/${suffix}"`
}

export const generateURLs = (url: string) => {
  return ratios.map(({ w, h }) => constructURLPrefix(w, h, url))
}

export const constructMetaURL = (w: number, h: number, suffix: string) => {
  return `https://res.cloudinary.com/da3fgujdy/c_fit,h_${h},w_${w}/${suffix}`
}
