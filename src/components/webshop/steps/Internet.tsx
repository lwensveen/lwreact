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

export default function Internet(props: Props): ReactElement {
    return (
        <ExpansionPanel expanded={props.expanded === 'panel3'} onChange={props.handleChange('panel3')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel3a-content"
                id="panel3a-header"
            >
                <Typography className={props.classes.heading}>Internet</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <RadioGroup aria-label="position"
                            name="position"
                            value={props.value}
                            onChange={props.handleRadioChange}
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
                <Button size="small" onClick={props.handleClick('panel2')}>Previous</Button>
            </ExpansionPanelActions>
        </ExpansionPanel>
    )
}
