// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more meta tags or fonts here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
