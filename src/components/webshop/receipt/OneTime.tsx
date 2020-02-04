import React, { ReactElement } from "react";
import { Button, CardActions, CardContent, CardHeader, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

export default function OneTime(): ReactElement {
    const classes = useStyles();

    return (
        <>
            <CardHeader title="One Time costs"/>
            <CardContent>
                <div className={classes.row}>
                    <span>1 GB + 120 minutes</span>
                    <span>US$ 14,00</span>
                </div>
            </CardContent>
            <Divider/>
            <CardContent>
                <div className={classes.row}>
                    <span>Total one time costs</span>
                    <span>US$ 30,69</span>
                </div>
            </CardContent>
            <CardActions className={classes.actions}>
                <Button variant="contained" color="primary" disableElevation>Next</Button>
            </CardActions>
        </>
    )
}
