import { generateURLs } from 'lib/helper/cloudinary'
import SEO, { AVATAR } from '.'

import type { BlogPostInfo } from 'interfaces/blog'

export default function BlogSEO({ posts }: { posts: BlogPostInfo[] }) {
  return (
    <SEO title="Blog">
      <script
        id="blog-home__schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
      "@context": "http://schema.org",
      "@type": "Blog",
      "@id": "https://ulises.codes/blog/",
      "audience": {
        "audienceType": "parents"
      },
      "blogPost": [${posts.map(
        ({ meta, slug }) => `{
        "@type": "BlogPosting",
        "@id": "https://ulises.codes/blog/${slug}",
        "headline": "${meta.title.slice(0, 109)}",
        "datePublished": "${meta.publishDate}",
        "dateModified": "${meta.editedDate}",
        "author": {
          "@type": "Person",
          "name: ": "${meta.author}",
          "image": [${generateURLs(AVATAR)}]
        },
        "publisher": {
          "@type": "Person",
          "name": "Ulises Himely",
          "image": {
            "@type": "ImageObject",
            "url": "https://ulises.codes/images/logo/full-logo.svg"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://ulises.codes"
        },
        "image": [${generateURLs(meta.headerImageSrc)}]
      }`
      )}]

}`,
        }}
      />
    </SEO>
  )
}
