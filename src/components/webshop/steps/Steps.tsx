import React, { ReactElement } from "react";

import {
    Button,
    createStyles,
    Divider,
    ExpansionPanel,
    ExpansionPanelActions,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Theme,
    Typography
} from "@material-ui/core";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            marginTop: '20px'
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }),
);

export default function Steps(props: any): ReactElement {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean): void => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleClick = (panel: string): void => {
        setExpanded(panel);
    };

    return (
        <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Expansion Panel 1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </ExpansionPanelDetails>
                <Divider/>
                <ExpansionPanelActions>
                    <Button size="small" color="primary" onClick={() => {
                        handleClick('panel2')
                    }}>
                        Next
                    </Button>
                </ExpansionPanelActions>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Expansion Panel 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </ExpansionPanelDetails>
                <Divider/>
                <ExpansionPanelActions>
                    <Button size="small" onClick={() => {
                        handleClick('panel1')
                    }}>Previous</Button>
                    <Button size="small" color="primary" onClick={() => {
                        handleClick('panel3')
                    }}>
                        Next
                    </Button>
                </ExpansionPanelActions>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
                </ExpansionPanelSummary>
            </ExpansionPanel>
        </div>
    )
}
