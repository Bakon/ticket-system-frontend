import React from 'react';
import styled from 'styled-components';
import {colors, spacing, headerHeight} from '../css-util';

export default function Footer() {
    return <StyledFooter>Hi im a footer!</StyledFooter>;
}

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.white};
    background: ${colors.main};
    height: ${headerHeight};
`;
