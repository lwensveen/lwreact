import React from "react";
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

export default function Minutes(props: Props) {
    return (
        <ExpansionPanel expanded={props.expanded === 'panel2'} onChange={() => props.handleChange('panel2')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography className={props.classes.heading}>Minutes</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <RadioGroup aria-label="position" name="position" value={props.value} onChange={props.handleRadioChange}
                            row>
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
                <Button size="small" onClick={() => {
                    props.handleClick('panel1')
                }}>Previous</Button>
                <Button size="small" color="primary" onClick={() => {
                    props.handleClick('panel3')
                }}>
                    Next
                </Button>
            </ExpansionPanelActions>
        </ExpansionPanel>
    )
}
