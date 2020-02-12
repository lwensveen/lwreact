import React, {ChangeEvent, ReactElement, useState} from "react";

import {createStyles, Theme} from "@material-ui/core";

import {makeStyles} from "@material-ui/styles";
import Duration from "./Duration";
import Minutes from "./Minutes";
import Internet from "./Internet";

export default interface Props {
    expanded: string | boolean;
    classes: any;
    value: any;

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

export default function Steps(): ReactElement {
    const classes = useStyles();

    const [form, setForm] = useState({
        duration: '1 year',
        minutes: '120 minutes',
        internet: '1 GB + 120 minutes 14.00'
    } as { [name: string]: string });

    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean): void => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleClick = (panel: string) => (): void => {
        setExpanded(panel);
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setForm({...form, [event.target.name]: (event.target as HTMLInputElement).value});
    };

    return (
        <div className={classes.root}>
            <Duration classes={classes}
                      expanded={expanded}
                      value={form.duration}
                      handleChange={handleChange}
                      handleClick={handleClick}
                      handleRadioChange={handleRadioChange}
            />
            <Minutes classes={classes}
                     expanded={expanded}
                     value={form.minutes}
                     handleChange={handleChange}
                     handleClick={handleClick}
                     handleRadioChange={handleRadioChange}
            />
            <Internet classes={classes}
                      expanded={expanded}
                      value={form.internet}
                      handleChange={handleChange}
                      handleClick={handleClick}
                      handleRadioChange={handleRadioChange}
            />
        </div>
    )
}
