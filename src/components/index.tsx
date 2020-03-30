import React, {Component, ReactElement} from 'react';
import styled from 'styled-components';
import {colors, spacing} from '../css-util';
import AddList from './add-list';

type State = {
    addListToggled: boolean;
};

export default class Main extends Component<{}, State> {
    state = {
        addListToggled: false,
    };

    componentDidMount(): void {
        // window.addEventListener('onKeyDown')
    }

    render(): ReactElement {
        const {addListToggled} = this.state;

        return (
            <StyledContainer>
                <AddList
                    onClick={(): void => this.setState({addListToggled: !addListToggled})}
                    open={addListToggled}
                />
            </StyledContainer>
        );
    }
}

const StyledContainer = styled.div`
    height: 100vh;
    background: ${colors.dark};
    padding: ${spacing.extraLarge};
`;
