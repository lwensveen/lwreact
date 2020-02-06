import React, { ReactElement } from "react";
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Props } from "./CheckoutSteps";

export default function CustomerDetails(props: Props): ReactElement {
    return (
        <ExpansionPanel className={props.classes.panelStyle} expanded={props.expanded === 'panel2'}
                        onChange={props.handleChange('panel2')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
            >
                <Typography className={props.classes.heading}>Users</Typography>
                <Typography className={props.classes.secondaryHeading}>
                    You are currently not an owner
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                    diam eros in elit. Pellentesque convallis laoreet laoreet.
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}
