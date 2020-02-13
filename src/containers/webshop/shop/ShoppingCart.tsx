import React, {ReactElement} from "react";
import {Link} from "react-router-dom";

import {Box, Button, Card, CardActions, CardContent, CardHeader, Divider} from "@material-ui/core";

import Receipt from "../../../components/webshop/receipt/Receipt";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0'
    },
    divider: {
        alignSelf: 'stretch',
        height: 'auto'
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        padding: '20px'
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

export default function Shopppingcart(): ReactElement {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Card>
                <CardHeader title="My Shoppingcart"/>
                <Divider/>
                <CardContent className={classes.cardContent}>
                    <div className={classes.left}>
                        <img
                            src="http://webshop-env-prod.gfz3ypkeuu.eu-west-1.elasticbeanstalk.com/images/webshop/samsung/dvi-front_Samsung_S10_Blue_305x450.png"
                            alt="test"/>
                        <ul>
                            <li>Abonnement Go</li>
                        </ul>
                    </div>
                    <Divider className={classes.divider} orientation="vertical"/>
                    <div>
                        <Receipt/>
                    </div>
                </CardContent>
                <CardActions className={classes.actions}>
                    <Link to="/examples/webshop/shop/customer-details">
                        <Button variant="contained" color="primary" disableElevation>Next</Button>
                    </Link>
                </CardActions>
            </Card>
        </Box>
    )
}
