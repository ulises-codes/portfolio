import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
          />
          <link
            rel="shortcut icon"
            href="/images/logo/icon@192x.png"
            type="image/x-icon"
          />
          <link rel="alternate icon" href="/images/logo/favicon.png" />
          <link
            rel="mask-icon"
            href="/images/logo/mask-icon.svg"
            color="#f1dd6d"
          />
          <link rel="apple-touch-icon" href="/images/logo/icon@192x.png" />
          <meta
            name="description"
            content="Ulises Himely is a Web Developer, specializing in React, Typescript, GraphQL, and other technologies. He is also an avid human being. There is no proof that aliens are living among us in disguise."
          />
          <meta
            name="keywords"
            content="portfolio, javascript, react, developer, typescript"
          />
          <meta name="application-name" content="Ulises Himely" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Ulises Himely" />
          <meta
            name="description"
            content="Ulises Himely is a Web Developer, specializing in React, Typescript, GraphQL, and other technologies. He is also an avid human being. There is no proof that aliens are living among us in disguise."
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#f1dd6d" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#24748f" />

          <link rel="manifest" href="/manifest.webmanifest" />

          <meta property="og:title" content="Ulises Himely | Web Developer" />
          <meta
            property="og:description"
            content="Ulises Himely is a Web Developer, specializing in React, Typescript, GraphQL, and other technologies. He is also an avid human being. There is no proof that aliens are living among us in disguise."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/da3fgujdy/image/upload/c_fill,g_north_west,h_630,q_100,w_1200/v1610482183/ulises.codes/portfolio-screenshot_uz1fon.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://ulises.codes" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@uliseshimely" />
          <meta name="twitter:title" content="Ulises Himely | Web Developer" />
          <meta
            name="twitter:description"
            content="Ulises Himely is a Web Developer, specializing in React, Typescript, GraphQL, and other technologies. He is also an avid human being. There is no proof that aliens are living among us in disguise."
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/da3fgujdy/image/upload/c_fill,g_north_west,h_630,q_100,w_1200/v1610482183/ulises.codes/portfolio-screenshot_uz1fon.png"
          />
          <meta
            name="twitter:image:alt"
            content="Screenshot of website ulises.codes"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                url: 'https://www.ulises.codes',
                logo: 'https://www.ulises.codes/images/logo/icon@192x.png',
              }),
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument