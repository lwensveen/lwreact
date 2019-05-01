import React, { Component } from "react";

/* tslint:disable */
import { unstable_Box as Box } from '@material-ui/core/Box';
/* tslint:enable */

import { createStyles, Theme } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

interface Props {
    classes: any;
}

const styles = (theme: Theme) => createStyles({
    footer: {
        backgroundColor: `${theme.palette.grey["100"]}`,
        bottom: 0,
        position: "absolute",
        width: "100%",
    },

});

class Footer extends Component<Props> {
    public state = {
        year: new Date().getFullYear(),
    };

    public render() {
        const {classes} = this.props;

        return (
            <footer className={classes.footer}>
                <Box display="flex" flexdirection="row" justifyContent="center">
                    <Typography variant="h6" color="inherit" noWrap={true}>
                        <p>&copy; {this.state.year} Copyright: LodeDistrict</p>
                    </Typography>
                </Box>
            </footer>
        );
    }
}

export default withStyles(styles)(Footer);
