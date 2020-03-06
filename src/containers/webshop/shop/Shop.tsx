import { Box, CircularProgress, Container, Toolbar, Typography, } from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";

import { BRANDS } from "../../../mocks/brands";
import { OPERATINGSYSTEM } from "../../../mocks/operating-system";
import { Phone, Phone as PhoneInterface } from "../../../mocks/phones";

import Filters from "../../../components/webshop/Filters";
import Phones from "../../../components/webshop/phones/Phones";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#6d9cbe",
    },
    toolbar: {
        backgroundColor: "#fff",
        marginBottom: "20px",
    },
    filters: {
        marginRight: "20px",
    }
});

export default function Shop(): ReactElement {
    const classes = useStyles();

    const [phones, setPhones] = useState([] as Phone[]);
    const [brands] = useState(BRANDS);
    const [filterBrands, setFilterBrands] = useState([] as any);
    const [os] = useState(OPERATINGSYSTEM);
    const [filterOS, setfilterOS] = useState([] as any);
    const [isLoaded, setLoaded] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch("http://localhost:5000/api/phones")
            .then((response) => response.json())
            .then((phones: PhoneInterface[]) => {
                setPhones([...phones]);
                setLoaded(true);
            }, (error) => {
                setError(error);
                setLoaded(false);
            });
    }, []);

    const handleBrands = (name: string) => (evt: any) => {
        if (evt.target.checked) {
            return setFilterBrands([...filterBrands, name]);
        }
        setFilterBrands([]);
    };

    const handleOS = (name: string) => (evt: any) => {
        if (evt.target.checked) {
            return setfilterOS([...filterOS, name]);

        }
        setfilterOS([]);
    };

    const fixUrl = (url: string): string => {
        return url.replace(/\s/g, '');
    };

    const filtered = filterBrands.length || filterOS.length ?
        phones.filter(phone => {
            return filterOS.indexOf(phone.os) !== -1 || filterBrands.indexOf(phone.brand) !== -1;
        }) : [...phones];

    if (error) {
        console.log('error', error);
        return (
            <Box className={classes.root} display="flex" flexDirection="row" justifyContent="center"
                 alignItems="center">
                <div>Error: {error}</div>
            </Box>
        )
    } else if (!isLoaded) {
        return (
            <Box className={classes.root} display="flex" flexDirection="row" justifyContent="center"
                 alignItems="center">
                <CircularProgress/>
            </Box>
        )
    } else {
        return (
            <div className={classes.root}>
                <Container>
                    <Box alignSelf="center">
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" className="banner-header">
                                Alle telefoons
                            </Typography>
                        </Toolbar>
                    </Box>

                    <Box display="flex" flexDirection="row">
                        <Filters brands={brands}
                                 os={os}
                                 handleBrands={handleBrands}
                                 handleOS={handleOS}/>

                        <Phones phones={filtered} fixUrl={fixUrl}/>
                    </Box>
                </Container>
            </div>
        );
    }
}
