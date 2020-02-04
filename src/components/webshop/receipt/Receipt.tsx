import React, { ReactElement } from "react";
import { Card } from "@material-ui/core";
import Monthly from "./Monthly";
import { makeStyles } from "@material-ui/styles";
import OneTime from "./OneTime";

const useStyles = makeStyles({
    root: {
        marginTop: '20px',
    },
});

export default function Receipt(props: any): ReactElement {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Monthly/>
            <OneTime/>
        </Card>
    )
}