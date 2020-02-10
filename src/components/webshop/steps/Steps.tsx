import React, { ChangeEvent, ReactElement } from "react";

import { createStyles, Theme } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";
import Duration from "./Duration";
import Minutes from "./Minutes";
import Internet from "./Internet";

export default interface Props {
    expanded: string | boolean;
    classes: any;
    value: string;

    handleChange(s: string): any;

    handleClick(s: string): any;

    handleRadioChange(event: ChangeEvent<HTMLInputElement>, s: string): any;
}

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

    const [value, setValue] = React.useState('1 year');
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean): void => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleClick = (panel: string) => (): void => {
        setExpanded(panel);
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <div className={classes.root}>
            <Duration classes={classes}
                      expanded={expanded}
                      value={value}
                      handleChange={handleChange}
                      handleClick={handleClick}
                      handleRadioChange={handleRadioChange}
            />
            <Minutes classes={classes}
                     expanded={expanded}
                     value={value}
                     handleChange={handleChange}
                     handleClick={handleClick}
                     handleRadioChange={handleRadioChange}
            />
            <Internet classes={classes}
                      expanded={expanded}
                      value={value}
                      handleChange={handleChange}
                      handleClick={handleClick}
                      handleRadioChange={handleRadioChange}
            />
        </div>
    )
}
