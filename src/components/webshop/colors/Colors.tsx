import React, { ReactElement } from "react";
import { Card, Radio } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '20px',
    },
});

export default function Colors(props: any): ReactElement {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Radio value="a"/>
            <Radio value="b"/>
        </Card>
    )
}
