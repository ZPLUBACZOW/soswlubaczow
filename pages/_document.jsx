import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta httpEquiv="Content-type" content="text/html; charSet=utf-8" />
        <meta name="author" content="DoMoon" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
