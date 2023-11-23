import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Leave a Review: Georgeview Restaurant</title>
                <link rel="icon" href="/logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp