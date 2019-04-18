import React, { Component } from "react";
import "./Home.css";
import ProjectCard from "./ProjectCard";

import { unstable_Box as Box } from '@material-ui/core/Box';
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";

const styles = {
    main: {
        padding: 20,
        maxWidth: 1540,
        marginRight: 'auto',
        marginLeft: 'auto',
    }
};

class Home extends Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.main}>
                <Box display="flex" flexDirection="row" flexWrap="wrap"  justifyContent="space-between">
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
