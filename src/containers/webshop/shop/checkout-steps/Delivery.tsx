import React from "react";
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Props } from "./CheckoutSteps";

export default function Delivery(props: Props): React.ReactElement {
    return (
        <ExpansionPanel className={props.classes.panelStyle} expanded={props.expanded === 'panel3'}
                        onChange={props.handleChange('panel3')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
            >
                <Typography className={props.classes.heading}>Advanced settings</Typography>
                <Typography className={props.classes.secondaryHeading}>
                    Filtering has been entirely disabled for whole web server
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}
