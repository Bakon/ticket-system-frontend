import React from 'react';
import styled from 'styled-components';
import {colors, spacing, headerHeight} from '../css-util';

export default function Header() {
    return (
        <StyledHeader>
            <div className="left-side">
                <img src="assets/icons/menu.svg" alt="menu icon" />
                <a href="/">
                    <h2>GG</h2>
                </a>
            </div>
            <div className="right-side">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: ${headerHeight};
    color: ${colors.white};
    background: ${colors.main};
    padding: 0 ${spacing.extraLarge};

    a {
        text-decoration: none;

        &:visited {
            color: ${colors.white};
        }
    }

    .left-side {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;

        > img {
            margin-right: ${spacing.extraLarge};
        }
    }

    .right-side {
        display: flex;

        > a + a {
            margin-left: ${spacing.extraLarge};
        }
    }
`;
