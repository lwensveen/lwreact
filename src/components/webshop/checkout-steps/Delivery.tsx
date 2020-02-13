import React from "react";

import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Props } from "../../../containers/webshop/shop/CheckoutSteps";

export default function Delivery(props: Props): React.ReactElement {
    return (
        <ExpansionPanel className={props.classes.panelStyle}
                        expanded={props.expanded === 'panel3'}
                        onChange={props.handlePanelChange('panel3')}
        >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
            >
                <Typography className={props.classes.heading}>Delivery or collect</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <RadioGroup aria-label="delivery"
                            name="delivery"
                            value={props.form.delivery}
                            onChange={props.handleFormChange}
                            row
                >
                    <FormControlLabel value="delivery" control={<Radio/>} label="Delivery"/>
                    <FormControlLabel value="collect" control={<Radio/>} label="Collect"/>
                </RadioGroup>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}
