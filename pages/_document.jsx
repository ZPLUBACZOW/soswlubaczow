import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta httpEquiv="Content-type" content="text/html; charSet=utf-8" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
