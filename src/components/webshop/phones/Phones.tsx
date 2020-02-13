import React from "react";
import { Phone as PhoneInterface } from "../../../mocks/phones";
import "./Phones.scss";
import Phone from "./phone/Phone";
import { Box, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface Props {
    phones: PhoneInterface[];

    fixUrl(url: string): string;
}

const useStyles = makeStyles({
    toolbar: {
        backgroundColor: "#fff",
        marginBottom: "20px",
    },
    filters: {
        marginRight: "20px",
    }
});

export default function Phones(props: Props): any {
    const classes = useStyles();

    return (
        <Box display="flex" flex="1" flexDirection="column">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6">Telefoons</Typography>
            </Toolbar>
            <Box display="flex" flexDirection="row">
                {props.phones.map((phone) =>
                    <Phone key={phone.id} phone={phone} fixUrl={props.fixUrl}/>
                )}
            </Box>
        </Box>
    )
}
