import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';
import {spacing} from '../css-util';

export default function Container({children}) {
    return (
        <StyledContainer>
            <Header />
            <main>{children}</main>
            <Footer />
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;

    main {
        flex: 1 1 auto;
        padding: ${spacing.extraLarge};
    }
`;
