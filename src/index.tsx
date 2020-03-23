import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import Main from './components/main';

const GlobalStylesheet = createGlobalStyle`
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

ReactDOM.render(
    <BrowserRouter>
        <GlobalStylesheet />
        <Main />
    </BrowserRouter>,
    document.getElementById('root')
);
