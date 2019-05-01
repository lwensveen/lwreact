import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import "./Home.css";

/* tslint:disable */
import { unstable_Box as Box } from '@material-ui/core/Box';
/* tslint:enable */

import { createStyles } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps<any> {
    classes: any;
}

const styles = createStyles({
    main: {
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 1540,
        padding: 20,
    },
});

class Home extends Component<Props> {

    public render() {
        const {classes} = this.props;

        return (
            <div className={classes.main}>
                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
                    <ProjectCard/>
                </Box>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(Home));
