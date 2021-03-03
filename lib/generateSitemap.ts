import { getAllPostSlugs } from './markdown/getPosts'
import globby from 'globby'
import fs from 'fs'
;(async function generateSitemap() {
  const posts = getAllPostSlugs().map(({ params }) => `blog/${params.slug}`)

  const pages = await globby([
    'pages/**/*.tsx',
    '!pages/_*.tsx',
    '!pages/**/[slug].tsx',
    '!pages/api',
  ])

  const paths = pages.concat(posts)

  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://ulises.codes</loc>
        <priority>1.0</priority>
    </url>${paths
      .map(
        slug => `
    <url>
        <loc>https://ulises.codes/blog/${slug}</loc>
    </url>`
      )
      .join('')}
</urlset>
`

  fs.writeFileSync('public/sitemap.xml', sitemap)
})()
