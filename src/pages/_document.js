import Document,{ Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="user-scalable=no,width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
          <script src="//at.alicdn.com/t/font_1788921_u70818gsz9.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
