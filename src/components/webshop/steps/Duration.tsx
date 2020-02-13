import React, { ReactElement } from "react";
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

export default function Duration(props: Props): ReactElement {
    return (
        <ExpansionPanel expanded={props.expanded === 'panel1'} onChange={props.handleChange('panel1')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={props.classes.heading}>Contract duration</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <RadioGroup aria-label="duration"
                            name="duration"
                            value={props.value}
                            onChange={props.handleRadioChange}
                            row
                >
                    <FormControlLabel
                        value="1 year"
                        control={<Radio color="primary"/>}
                        label="1 year"
                    />
                    <FormControlLabel
                        value="2 years"
                        control={<Radio color="primary"/>}
                        label="2 years"
                    />
                </RadioGroup>
            </ExpansionPanelDetails>
            <Divider/>
            <ExpansionPanelActions>
                <Button size="small" color="primary" onClick={props.handleClick('panel2')}>Next</Button>
            </ExpansionPanelActions>
        </ExpansionPanel>
    )
}
