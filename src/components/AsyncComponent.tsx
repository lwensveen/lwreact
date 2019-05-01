import React, { Component } from "react";

interface IProps {
    component: any;
}

interface IState {
    component: any;
}

export default function asyncComponent(importComponent: any) {
    class AsyncComponent extends Component<IProps, IState> {
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
