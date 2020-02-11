import React, {ReactElement} from "react";
import Props from "./Steps";

import {
    Button,
    Divider,
    ExpansionPanel,
    ExpansionPanelActions,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Minutes(props: Props): ReactElement {
    return (
        <ExpansionPanel expanded={props.expanded === 'panel2'} onChange={props.handleChange('panel2')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography className={props.classes.heading}>Minutes</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <RadioGroup aria-label="position"
                            name="position"
                            value={props.value}
                            onChange={props.handleRadioChange}
                            row
                >
                    <FormControlLabel
                        value="120 minutes"
                        name="minutes"
                        control={<Radio color="primary"/>}
                        label="120 minutes"
                    />
                    <FormControlLabel
                        value="Unlimited"
                        name="minutes"
                        control={<Radio color="primary"/>}
                        label="Unlimited"
                    />
                </RadioGroup>
            </ExpansionPanelDetails>
            <Divider/>
            <ExpansionPanelActions>
                <Button size="small" onClick={props.handleClick('panel1')}>Previous</Button>
                <Button size="small" color="primary" onClick={props.handleClick('panel3')}>
                    Next
                </Button>
            </ExpansionPanelActions>
        </ExpansionPanel>
    )
}
