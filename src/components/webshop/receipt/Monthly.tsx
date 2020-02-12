import React, {ReactElement} from "react";
import {CardContent, CardHeader, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        marginTop: '20px',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default function Monthly(): ReactElement {
    const classes = useStyles();

    return (
        <>
            <CardHeader title="Monthly"/>
            <CardContent>
                <div className={classes.row}>
                    <span>1 GB + 120 minutes</span>
                    <span>US$ 14,00</span>
                </div>
            </CardContent>
            <Divider/>
            <CardContent>
                <div className={classes.row}>
                    <span>Total each month</span>
                    <span>US$ 39,00</span>
                </div>
            </CardContent>
            <Divider/>
        </>
    )
}
