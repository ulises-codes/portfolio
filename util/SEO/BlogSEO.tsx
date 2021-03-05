import { constructURLPrefix, generateURLs } from 'lib/helper/cloudinary'
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
      <meta property="og:title" content="Ulises Himely | Web Dev Blog" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://ulises.codes/blog`} />
      <meta
        property="og:image"
        content={constructURLPrefix(
          1080,
          1080,
          'v1610482183/ulises.codes/portfolio-screenshot_uz1fon.png'
        )}
      />
      <meta property="og:image:width" content="1080" />
      <meta property="og:image:height" content="1080" />
      <meta
        property="og:image:alt"
        content="Screenshot of website ulises.codes"
      />
      <meta
        property="twitter:image"
        content={constructURLPrefix(
          1200,
          630,
          'v1610482183/ulises.codes/portfolio-screenshot_uz1fon.png'
        )}
      />
    </SEO>
  )
}
