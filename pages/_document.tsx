import Document, { Html, Head, Main, NextScript } from 'next/document'

class MusicPlayerDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="title" content="YCC2 Homework" />
                    <meta name="description" content="Hai Hai~" />

                    <meta name="author" content="SaltyAom" />
                    <link rel="icon" href="/images/kokodayo.jpg" />
                    <link rel="shortcut icon" href="/images/kokodayo.jpg" />

                    <meta property="og:title" content="YCC2 Homework" />
                    <meta property="og:description" content="Hai Hai~" />
                    <meta property="og:site_name" content="YCC2 Homework" />

                    <meta
                        property="og:image"
                        content="https://ycc2.mystiar.com/images/haihai.jpg"
                    />
                    <meta property="og:image:width" content="320" />
                    <meta property="og:image:height" content="200" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                        name="twitter:title"
                        content="YCC2 Homework"
                    />
                    <meta
                        name="twitter:description"
                        content="Hai Hai~"
                    />
                    <meta name="twitter:site" content="@SaltyAom" />
                    <meta
                        name="twitter:image"
                        content="https://ycc2.mystiar.com/images/haihai.jpg"
                    />
                    <meta
                        name="twitter:creator"
                        content="@SaltyAom"
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

export default MusicPlayerDocument