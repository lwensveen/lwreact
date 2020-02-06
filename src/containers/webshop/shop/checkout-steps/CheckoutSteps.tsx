import React from "react";

import { Box, Container, createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CustomerDetails from "./CustomerDetails";
import Delivery from "./Delivery";
import Confirm from "./Confirm";

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
    }),
);

export interface Props {
    classes: any;
    expanded: string | false;

    handleChange(panel: string): any;
}


export default function CheckoutSteps(): React.ReactElement {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean): void => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box className={classes.root}>
            <Container>
                <CustomerDetails classes={classes} handleChange={handleChange} expanded={expanded}/>
                <Delivery classes={classes} handleChange={handleChange} expanded={expanded}/>
                <Confirm classes={classes} handleChange={handleChange} expanded={expanded}/>
            </Container>
        </Box>
    );
}
