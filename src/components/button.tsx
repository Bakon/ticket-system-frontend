import React from 'react';
import styled from 'styled-components';
import {colors, spacing} from '../css-util';

type Props = {
    className?: string;
    background?: string;
    color?: string;
    children?: React.ReactNode;
};

export default function Button({
    className,
    background,
    color,
    children,
}: Props): React.ReactElement {
    return (
        <StyledButton className={className} background={background} color={color}>
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button<Pick<Props, 'color' | 'background'>>`
    background: ${({background}): string => colors[background || 'dark']};
    color: ${({color}): string => colors[color || 'white']};
    width: ${spacing.headerDoubled};
    height: ${spacing.extraLarge};
    user-select: none;
    border-radius: 3px;
    font-size: 0.9rem;
    border: none;
`;
