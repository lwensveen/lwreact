import React, {ReactElement} from "react";

import {
    Button,
    ExpansionPanel,
    ExpansionPanelActions,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    TextField,
    Typography
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Props} from "../../../containers/webshop/shop/CheckoutSteps";

export default function Confirm(props: Props): ReactElement {
    /* TODO Implement DatePicker */
    return (
        <ExpansionPanel className={props.classes.panelStyle}
                        expanded={props.expanded === 'panel4'}
                        onChange={props.handlePanelChange('panel4')}
        >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
            >
                <Typography className={props.classes.heading}>Personal data</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <TextField id="date" name="date" value={props.form.date} label="Date"/>
            </ExpansionPanelDetails>
            <ExpansionPanelActions>
                <Button variant="contained"
                        color="primary"
                        type="submit"
                        value="submit"
                        disableElevation
                >
                    Submit
                </Button>
            </ExpansionPanelActions>
        </ExpansionPanel>
    )
}
