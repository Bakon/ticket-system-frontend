import React, {ReactElement} from 'react';
import styled from 'styled-components';
import SVG from './svg';
import Button from './button';
import {colors, spacing} from '../css-util';

type Props = {
    onClick: () => void;
    open: boolean;
};

export default function AddList({onClick, open}: Props): ReactElement {
    return (
        <StyledList open={open}>
            <div className="open-add-list" onClick={onClick}>
                <SVG icon="plus" />
                <span>Add another list</span>
            </div>
            <div className="add-list-input">
                <input className="input-field" placeholder="Enter list title.." />
                <div className="bottom-row">
                    <Button background="green" color="white">
                        Add list
                    </Button>
                    <SVG icon="close" onClick={onClick} />
                </div>
            </div>
        </StyledList>
    );
}

const StyledList = styled.div<Pick<Props, 'open'>>`
    height: ${spacing.extraLarge};
    background: ${({open}): string => (open ? colors.white : colors.light)};
    color: ${colors.white};
    height: ${({open}): string => (open ? spacing.headerDoubled : spacing.header)};
    padding: ${spacing.small};
    border-radius: 2px;
    width: 15rem;
    display: flex;
    flex-flow: column nowrap;

    .plus {
        fill: ${colors.white};
        width: ${spacing.medium};
        height: ${spacing.medium};
        margin: ${spacing.medium};
    }

    .close {
        fill: ${colors.dark};
        width: ${spacing.medium};
        height: ${spacing.medium};
        margin: ${spacing.regular} ${spacing.small};
    }

    .open-add-list {
        display: ${({open}): string => (open ? 'none' : 'flex')};
        align-items: center;
        height: 100%;
    }

    .add-list-input {
        display: ${({open}): string => (open ? 'flex' : 'none')};
        flex-flow: column nowrap;

        .input-field {
            font-size: 0.9rem;
            width: 100%;
            height: ${spacing.extraLarge};
            padding: ${spacing.regular};
            border: 2px solid ${colors.dark};
            border-radius: ${spacing.small};
        }

        .bottom-row {
            height: ${spacing.header};
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
        }
    }
`;
