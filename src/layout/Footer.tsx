import Box from "@material-ui/core/Box";
import React, { ReactElement, useState } from "react";
import "./Footer.scss";

export default function Footer(): ReactElement {
    const [year] = useState(new Date().getFullYear());

    return (
        <footer className="footer">
            <Box display="flex" flexDirection="row" justifyContent="center">
                <p>&copy; {year} Copyright: LodeDistrict</p>
            </Box>
        </footer>
    );
}
