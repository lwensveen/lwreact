import React, { Component } from "react";
import "./Footer.scss";
/* tslint:disable */
import Box from '@material-ui/core/Box';

/* tslint:enable */

class Footer extends Component {
    public state = {
        year: new Date().getFullYear(),
    };

    public render() {

        return (
            <footer className="footer">
                <Box display="flex" flexdirection="row" justifyContent="center">
                    <p>&copy; {this.state.year} Copyright: LodeDistrict</p>
                </Box>
            </footer>
        );
    }
}

export default Footer;
