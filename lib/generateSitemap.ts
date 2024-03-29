import { getAllPostSlugs } from './markdown/getPosts'
import globby from 'globby'
import fs from 'fs'
;(async function generateSitemap() {
  const posts = getAllPostSlugs().map(({ params }) => `/blog/${params.slug}/`)

  const pages = await globby([
    'pages/**/*.tsx',
    '!pages/_*.tsx',
    '!pages/**/[slug].tsx',
    '!pages/api',
  ])

  const routes = pages.map(page => {
    const path = page
      .replace('.tsx', '')
      .replace('pages', '')
      .replace('/index', '/')

    return path
  })

  const paths = routes.concat(posts)

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths
    .map(
      slug =>
        `\n\t<url>\n\t\t<loc>https://ulises.codes${slug.replace(
          /\/$/,
          ''
        )}</loc>\n\t</url>`
    )
    .join('')}\n</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
})()
