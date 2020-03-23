import React from 'react';
import styled from 'styled-components';
import Header from './header';

export default function Container({children}) {
    return (
        <StyledContainer>
            <Header />
            {children}
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;
