import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Head>
                <title>Progress Wealth Management</title>
                <link rel="icon" type="image/png" href="/logo-icon.png" sizes="16x16" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2GFTDTW6P"></script>
                <script async src="/ga.js"></script>
            </Head>
            <Component {...pageProps} />
        </React.Fragment>
    );
}

export default MyApp;
