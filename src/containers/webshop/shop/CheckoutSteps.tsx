import React, { ChangeEvent, ReactElement, useState } from "react";

import { Box, Container, createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CustomerDetails from "../../../components/webshop/checkout-steps/CustomerDetails";
import Delivery from "../../../components/webshop/checkout-steps/Delivery";
import Confirm from "../../../components/webshop/checkout-steps/Confirm";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        },
        panelStyle: {
            marginBottom: '20px',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
        details: {
            display: 'block'
        },
        fields: {
            '& > *': {
                margin: '10px 20px 20px 0',
                width: 200,
            },
        },
        divider: {
            margin: '20px 0'
        }
    }),
);

export interface Props {
    classes: any;
    expanded: string | false;
    form: any;

    handleFormChange(event: ChangeEvent<HTMLInputElement>): any;

    handlePanelChange(panel: string): any;
}


export default function CheckoutSteps(): ReactElement {
    const classes = useStyles();
    const [expanded, setExpanded] = useState<string | false>('panel2');
    const today = new Date();
    const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

    const [form, setForm] = useState({
        typeOrder: 'consumer',
        gender: 'Mr.',
        firstName: 'test',
        lastName: '',
        day: '1',
        month: '',
        year: '',
        phone: '',
        email: '',
        zipcode: '',
        number: '',
        street: '',
        state: '',
        city: '',
        delivery: 'delivery',
        date: date
    } as { [name: string]: string | object });

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setForm({...form, [event.target.name]: (event.target as HTMLInputElement).value});
    };

    const handlePanelChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean): void => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleSubmit = (event: any): any => {
        /* TODO create order send mail */
        console.log('A name was submitted: ' + JSON.stringify(form));
        event.preventDefault();
    };

    return (
        <Box className={classes.root}>
            <Container>
                <form onSubmit={handleSubmit}>
                    <CustomerDetails classes={classes}
                                     form={form}
                                     handleFormChange={handleFormChange}
                                     handlePanelChange={handlePanelChange}
                                     expanded={expanded}
                    />
                    <Delivery classes={classes}
                              form={form}
                              handleFormChange={handleFormChange}
                              handlePanelChange={handlePanelChange}
                              expanded={expanded}
                    />
                    <Confirm classes={classes}
                             form={form}
                             handleFormChange={handleFormChange}
                             handlePanelChange={handlePanelChange}
                             expanded={expanded}
                    />
                </form>
            </Container>
        </Box>
    );
}
