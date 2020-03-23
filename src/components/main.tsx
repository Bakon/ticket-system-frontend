import React from 'react';
import styled from 'styled-components';
import Header from './common/header';
import {routes} from './routes/index';
import {Switch, Route} from 'react-router-dom';

export default function Main() {
    return (
        <StyledContainer>
            <Header />
            <Switch>
                {routes.map(({Component, path, exact}) => (
                    <Route exact={exact} path={path}>
                        <Component />
                    </Route>
                ))}
            </Switch>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;
