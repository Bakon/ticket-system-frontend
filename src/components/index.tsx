import * as React from 'react';

interface State {
    name: string;
}

export default class Main extends React.Component<{}, State> {
    public state = {
        name: 'Julio',
    };

    public render() {
        return <h1>Hello world</h1>;
    }
}
