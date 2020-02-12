import React, {ReactElement} from "react";
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, TextField, Typography} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Props} from "../../../containers/webshop/shop/CheckoutSteps";

export default function Confirm(props: Props): ReactElement {
    return (
        <ExpansionPanel className={props.classes.panelStyle} expanded={props.expanded === 'panel4'}
                        onChange={props.handleChange('panel4')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
            >
                <Typography className={props.classes.heading}>Personal data</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <TextField id="standard-basic" label="Date"/>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}
