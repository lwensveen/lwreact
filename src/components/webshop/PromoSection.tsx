import React, {ReactElement} from "react";
import Box from "@material-ui/core/Box";
import {Container} from "@material-ui/core";
import MediaCard from "./MediaCard";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    promoSection: {
        display: 'flex',
        backgroundColor: 'grey',
    },
});

export default function PromoSection(): ReactElement {
    const classes = useStyles();

    return (
        <Box className={classes.promoSection}>
            <Container>
                <Box display="flex" flexDirection="row" justifyContent="space-evenly">
                    <MediaCard/>
                    <MediaCard/>
                    <MediaCard/>
                </Box>
            </Container>
        </Box>
    )
}
