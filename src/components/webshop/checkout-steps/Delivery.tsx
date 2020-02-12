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
import {Props} from "../../../containers/webshop/shop/CheckoutSteps";

export default function Delivery(props: Props): React.ReactElement {
    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <ExpansionPanel className={props.classes.panelStyle} expanded={props.expanded === 'panel3'}
                        onChange={props.handleChange('panel3')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
            >
                <Typography className={props.classes.heading}>Delivery or collect</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <RadioGroup aria-label="delivery" name="delivery" value={value} onChange={handleChange} row>
                    <FormControlLabel value="Delivery" control={<Radio/>} label="Delivery"/>
                    <FormControlLabel value="Collect" control={<Radio/>} label="Collect"/>
                </RadioGroup>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}
