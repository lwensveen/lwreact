import React from "react";

interface Props {
    component: any;
}

interface State {
    component: any;
}

export default function asyncComponent(importComponent: any) {
    class AsyncComponent extends React.PureComponent<Props, State> {
        constructor(props: any) {
            super(props);

            this.state = {
                component: null,
            };
        }

        public async componentDidMount() {
            const {default: component} = await importComponent();

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
