import React, { ReactElement, useEffect, useState } from "react";
import { Box, Button, Card, CardActions, CircularProgress, Container, Toolbar } from "@material-ui/core";
import { Phone as PhoneInterface } from "../../../mocks/phones";
import { Link, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Steps from "../../../components/webshop/steps/Steps";
import Receipt from "../../../components/webshop/receipt/Receipt";
import Colors from "../../../components/webshop/colors/Colors";


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    card: {
        marginTop: '20px',
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    toolbar: {
        backgroundColor: '#fff',
    }
});

export default function Detail(): ReactElement {
    const classes = useStyles();
    const [phone, setPhone] = useState({} as PhoneInterface);
    const [isLoaded, setLoaded] = useState(false);
    const [error, setError] = useState();
    const {id, title} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/api/phones/${title}/${id}`)
            .then((response) => response.json())
            .then((getPhone: PhoneInterface) => {
                setPhone({...getPhone});
                setLoaded(true)
            }, (error) => {
                setError(error);
                setLoaded(false)
            });
    }, [id, title]);



    if (error) {
        return (
            <Box className={classes.root} display="flex" flexDirection="row" justifyContent="center"
                 alignItems="center">
                <div>Error: {error.message}</div>
            </Box>
        );
    } else if (!isLoaded) {
        return (
            <Box className={classes.root} display="flex" flexDirection="row" justifyContent="center"
                 alignItems="center">
                <CircularProgress/>
            </Box>
        )
    } else {
        return (
            <Box className={classes.root}>
                <Container>
                    <Box display="flex" flexDirection="row" justifyContent="center">

                        <Box display="flex" flexDirection="column">
                            <Toolbar className={classes.toolbar}>{phone.brand} {phone.model}</Toolbar>
                            <Box display="flex" flexDirection="row">
                                <Steps/>
                            </Box>
                        </Box>

                        <Box display="flex" flexDirection="column">
                            <img src={phone.images.front} alt={phone.brand + phone.model}/>

                            <div>
                                {/*<FlatButton><img src={phone.images.front} /></FlatButton>*/}
                            </div>

                            <Colors/>
                            <Card className={classes.card}>
                                <Receipt/>
                                <CardActions className={classes.actions}>
                                    <Link to="/examples/webshop/shop/shoppingcart">
                                        <Button variant="contained" color="primary" disableElevation>Next</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Box>
                    </Box>
                </Container>
            </Box>
        )
    }
}
