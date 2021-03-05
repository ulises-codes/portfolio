import { constructURLPrefix, generateURLs } from 'lib/helper/cloudinary'
import SEO from '.'

import type { BlogPostMeta } from 'interfaces/blog'

type BlogSEOProps = {
  title: string
  meta: BlogPostMeta
  slug: string
  avatar: string
}

export default function BlogPostSEO({
  avatar,
  slug,
  title,
  meta,
}: BlogSEOProps) {
  return (
    <SEO title={title}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          "@id": "https://ulises.codes/blog/${slug}",
          "headline" :"${title.slice(0, 109)}",
          "datePublished": "${meta.publishDate}",
          "dateModified": "${meta.editedDate}",
          "author": {
            "@type": "Person",
            "name": "${meta.author}",
            "image": [${generateURLs(avatar)}]
          },
          "publisher": {
            "@type": "Person",
            "name": "Ulises Himely",
            "image": {
              "@type": "ImageObject",
              "url": "https://ulises.codes/full-logo.svg"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://ulises.codes"
          },
          "image": [${generateURLs(meta.headerImageSrc)}]},
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Blog",
              "item": "https://ulises.codes"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Posts",
              "item": "https://ulises.codes/blog/"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "${title}",
              "item": "https://ulises.codes/blog/${slug}"
            }
          ]
    }`,
        }}
      />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://ulises.codes/blog/${slug}`} />
      <meta property="og:article:published__time" content={meta.publishDate} />
      <meta property="og:article:modified__time" content={meta.editedDate} />r
      <meta property="og:article:author" content={meta.editedDate} />
      <meta property="og:article:author" content={meta.author} />
      <meta
        property="og:image"
        content={constructURLPrefix(1080, 1080, meta.headerImageSrc)}
      />
      <meta property="og:image:width" content="1080" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:image:alt" content={meta.headerImageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@uliseshimely" />
      <meta name="twitter:title" content="Ulises Himely | Web Developer" />
      <meta
        name="twitter:description"
        content="Ulises Himely is a Web Developer, specializing in React, Typescript, GraphQL, and other technologies. He is also an avid human being. There is no proof that aliens are living among us in disguise."
      />
      <meta
        property="twitter:image"
        content={constructURLPrefix(1200, 630, meta.headerImageSrc)}
      />
      <meta
        name="twitter:image:alt"
        content="Screenshot of website ulises.codes"
      />
    </SEO>
  )
}
