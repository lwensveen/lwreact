import React, { ReactElement } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    banner: {
        display: 'flex',
    },
});

export default function Banner(): ReactElement {
    const classes = useStyles();

    return (
        <Box className={classes.banner}>
            <img className="img-responsive" src="http://localhost:5000/images/webshop/banner.jpg" alt="Banner"/>
        </Box>
    )
}
