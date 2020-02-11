import React, {ReactElement} from "react";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        padding: '20px 0'
    },
    button: {
        margin: '0 20px',
    }
});

export default function CtaButtons(): ReactElement {
    const classes = useStyles();

    return (
        <Box className={classes.buttons}>
            <Link to="/examples/webshop/shop">
                <Button className={classes.button} variant="contained" color="secondary">Telefoons</Button>
            </Link>
        </Box>
    )
}
