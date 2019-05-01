import React, { Component } from "react";

interface Props {
    component: any;
}

interface State {
    component: any;
}

export default function asyncComponent(importComponent: any) {
    class AsyncComponent extends Component<Props, State> {
        constructor(props: any) {
            super(props);

            this.state = {
                component: null,
            };
        }

        public async componentDidMount() {
            const { default: component } = await importComponent();

            this.setState({
                component,
            });
        }

        public render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}
