import React, { Component } from "react";
import "./Home.css";

/* tslint:disable */
import { unstable_Box as Box } from '@material-ui/core/Box';
/* tslint:enable */

import { CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { RouteComponentProps, withRouter } from "react-router-dom";
import CSVTable from "../components/CSVTable";
import FileInput from "../components/FileInput";
import { Person } from "../models/Person";

interface IProps extends RouteComponentProps<any> {
    classes: any;
    onChange: any;
    orderBy: any;
}

interface IState {
    headers: string[];
    persons: Person[];
}

class CSVUpload extends Component<IProps, IState> {
    public headers: string[] = [];
    public person: string[] = [];
    public persons: Person[] = [];

    constructor(props: any) {
        super(props);

        this.state = {
            headers: [],
            persons: [],
        };
    }

    public handleChange = (event: any) => {
        event.preventDefault();
        const files = event.target.files;
        const file = files[0];
        const reader = new FileReader();

        reader.readAsText(file);

        reader.onload = () => {
            const csv = reader.result;
            const data = this.extractData(csv);

            this.setState({
                headers: data.headers,
                persons: data.persons,
            });
        };
    }

    public orderBy = (event: any) => {
        event.preventDefault();

        this.setState({
            persons: this.state.persons.reverse(),
        });
    }

    // filterBy(filterProp) {
    //     this.persons.filter(person => {
    //         return person.issueCount === props;
    //     });
    // }

    public extractData(data: any) {
        const allTextLines = data.split(/\r\n|\n/);

        allTextLines.slice(1).map((line: string) => {
            this.headers = replaceQuotes(allTextLines[0].split(","));
            this.person = replaceQuotes(line.split(","));

            return this.persons.push({
                dateOfBirth: new Date(this.person[3]).toLocaleDateString(),
                firstName: this.person[0],
                issueCount: parseInt(this.person[2], 10),
                surname: this.person[1],
            });
        });

        this.persons.sort((a, b) => a.issueCount > b.issueCount ? 1 : -1);

        return {
            headers: this.headers,
            persons: this.persons,
        };
    }

    public render() {
        return (
            <Box height="100%" display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                <Card>
                    <CardHeader title="CSV upload"/>
                    <CardContent>
                        <FileInput
                            onChange={this.buttonChanged}
                        />
                        <CSVTable
                            headers={this.state.headers}
                            persons={this.state.persons}
                            orderBy={this.buttonClicked}
                        />
                    </CardContent>
                </Card>
            </Box>
        );
    }

    private buttonChanged = (e: React.ChangeEvent) => {
        this.handleChange(e);
    }

    private buttonClicked = (e: React.ChangeEvent) => {
        this.orderBy(e);
    }
}

function replaceQuotes(text: string[]): string[] {
    return text.map((column) => column.replace(/"/g, ""));
}

export default withRouter(CSVUpload);
