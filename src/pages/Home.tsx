import React, { Component } from "react";
import "./Home.css";
import ProjectCard from "./ProjectCard";

/* tslint:disable */
import { unstable_Box as Box } from '@material-ui/core/Box';
/* tslint:enable */

import withStyles from "@material-ui/core/styles/withStyles";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { createStyles } from "@material-ui/core";

interface Props extends RouteComponentProps<any>  {
    classes?: any;
}

const styles = createStyles({
    main: {
        padding: 20,
        maxWidth: 1540,
        marginRight: 'auto',
        marginLeft: 'auto',
    }
});

class Home extends Component<Props> {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.main}>
                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </Box>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(Home))
