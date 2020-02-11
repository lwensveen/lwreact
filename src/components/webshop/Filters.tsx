import React, {ReactElement} from "react";
import {
    Box,
    Checkbox,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    FormControlLabel,
    FormGroup,
    Toolbar,
    Typography
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {makeStyles} from "@material-ui/styles";
import {Brands} from "../../mocks/brands";

const useStyles = makeStyles({
    toolbar: {
        backgroundColor: "#fff",
        marginBottom: "20px",
    },
    filters: {
        marginRight: "20px",
    }
});

export default function Filters(props: any): ReactElement {
    const classes = useStyles();

    return (
        <Box className={classes.filters} display="flex" flexDirection="column">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6">Filters</Typography>
            </Toolbar>

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography>Merken</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <FormGroup>
                        {props.brands.map((brand: Brands) =>
                            <FormControlLabel
                                key={brand.id}
                                /* tslint:disable-next-line:jsx-no-multiline-js */
                                control={
                                    <Checkbox
                                        checked={props.checked}
                                        onChange={props.handleBrands(brand.name)}
                                        value={brand.name}
                                    />
                                }
                                label={brand.name}
                            />,
                        )}
                    </FormGroup>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography>Besturingssysteem</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {props.os.map((os: any) =>
                        <FormControlLabel
                            key={os.id}
                            /* tslint:disable-next-line:jsx-no-multiline-js */
                            control={
                                <Checkbox
                                    checked={props.checked}
                                    onChange={props.handleOS(os.name)}
                                    value={os.name}
                                />
                            }
                            label={os.name}
                        />,
                    )}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Box>
    )
}
