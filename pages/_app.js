import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Head>
                <title>Progress Wealth Management</title>
                <link rel="icon" type="image/png" href="/logo-icon.png" sizes="16x16" />
                <link
                    href="https://assets.calendly.com/assets/external/widget.css"
                    rel="stylesheet"></link>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Blaine Thiederman - financial advisor and founder of Progress Wealth Management serving clients in Arvada, Denver, and Golden Colorado." />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2GFTDTW6P"></script>
                <script async src="/ga.js"></script>
                <script async src="/calendly.js" />
            </Head>
            <Component {...pageProps} />
        </React.Fragment>
    );
}

export default MyApp;
