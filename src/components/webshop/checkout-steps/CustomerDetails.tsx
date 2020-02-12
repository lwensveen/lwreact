import React, {ReactElement} from "react";

import {
    Divider,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Props} from "../../../containers/webshop/shop/CheckoutSteps";

export default function CustomerDetails(props: Props): ReactElement {
    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <ExpansionPanel className={props.classes.panelStyle}
                        expanded={props.expanded === 'panel2'}
                        onChange={props.handleChange('panel2')}
        >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
            >
                <Typography className={props.classes.heading}>Personal details</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={props.classes.details}>
                <h2>Type order</h2>

                <RadioGroup aria-label="type-order" name="type-order" value={value} onChange={handleChange} row>
                    <FormControlLabel value="consumer" control={<Radio/>} label="Consumer"/>
                    <FormControlLabel value="business" control={<Radio/>} label="Business"/>
                </RadioGroup>

                <Divider/>

                <h2>Your details</h2>

                <RadioGroup aria-label="gender" name="gender" value={value} onChange={handleChange} row>
                    <FormControlLabel value="Mr." control={<Radio/>} label="Mr."/>
                    <FormControlLabel value="Mrs." control={<Radio/>} label="Mrs."/>
                </RadioGroup>

                <Divider/>

                <div>
                    <TextField id="standard-basic" label="Standard"/>
                    <TextField id="standard-basic" label="Standard"/>
                </div>

                <div>
                    <TextField id="standard-basic" label="Standard"/>
                    <TextField id="standard-basic" label="Standard"/>
                    <TextField id="standard-basic" label="Standard"/>
                </div>

                <div>
                    <TextField id="standard-basic" label="Standard"/>
                    <TextField id="standard-basic" label="Standard"/>
                </div>

                <div>
                    <TextField id="standard-basic" label="Standard"/>
                    <TextField id="standard-basic" label="Standard"/>
                    <TextField id="standard-basic" label="Standard"/>
                    <TextField id="standard-basic" label="Standard"/>
                    <TextField id="standard-basic" label="Standard"/>
                </div>


            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}
