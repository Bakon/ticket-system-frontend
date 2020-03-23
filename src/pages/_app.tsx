import React from 'react';
import Head from 'next/head';
import {createGlobalStyle} from 'styled-components';
import Container from '../components/container';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        font-display: auto;
        src: local('Roboto'), url('assets/fonts/Roboto-Regular.ttf');
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
`;

export default function Main({Component, pageProps}) {
    return (
        <React.Fragment>
            <Head>
                <meta property="og:image" content="assets/icons/favicon.ico" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://test.io" />
                <meta property="og:title" content="test" />
                <meta property="og:description" content="filler" />
                <meta name="description" content="filler" />
                <meta name="author" content="Julio Schilders" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="shortcut icon" href="assets/icons/favicon.ico" type="image/x-icon" />
                <link rel="canonical" href="https://test.io" />
                <title>Groceries list</title>
            </Head>
            <GlobalStyle />
            <Container>
                <Component {...pageProps} />
            </Container>
        </React.Fragment>
    );
}
