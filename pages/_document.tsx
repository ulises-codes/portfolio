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
          <link
            rel="preload"
            href="/getTheme.js"
            as="script"
            type="application/javascript"
          />
          <link
            rel="shortcut icon"
            href="/images/logo/icon@192x.png"
            type="image/x-icon"
          />
          <link rel="alternate icon" href="/images/logo/favicon.png" />
          <link rel="apple-touch-icon" href="/images/logo/icon@192x.png" />
          <link id="ulises-codes-webmanifest" rel="manifest" href="" />
          <link
            id="ulises-codes-mask-icon"
            rel="mask-icon"
            href="/images/logo/mask-icon.svg"
            color="#f1dd6d"
          />
          <meta
            id="ulises-codes-theme-color--meta"
            name="theme-color"
            content=""
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
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#f1dd6d" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta property="og:site_name" content="ulises.codes" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                url: 'https://www.ulises.codes',
                image: 'https://www.ulises.codes/images/logo/icon@192x.png',
              }),
            }}
          />
        </Head>
        <body className="theme-dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
