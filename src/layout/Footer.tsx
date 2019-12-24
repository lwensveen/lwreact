import Box from "@material-ui/core/Box";
import React from "react";
import "./Footer.scss";

class Footer extends React.PureComponent {
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
