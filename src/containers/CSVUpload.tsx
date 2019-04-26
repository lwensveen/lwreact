import React, { Component } from "react";
import "./Home.css";

/* tslint:disable */
import { unstable_Box as Box } from '@material-ui/core/Box';
/* tslint:enable */

import { RouteComponentProps, withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import FileInput from "../components/FileInput";
import CSVTable from "../components/CSVTable";
import { CardContent } from "@material-ui/core";

export class Person {
    firstName!: string;
    surname!: string;
    issueCount!: number;
    dateOfBirth!: string;
}

interface Props extends RouteComponentProps<any> {
    classes: any;
    onChange: any;
    orderBy: any;
}

interface State {
    headers: string[];
    persons: Person[];
}

class CSVUpload extends Component<Props, State> {
    headers: string[] = [];
    person: string[] = [];
    persons: Person[] = [];

    constructor(props: any) {
        super(props);

        this.state = {
            headers: [],
            persons: []
        }
    }

    handleChange = (event: any) => {
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
                persons: data.persons
            });
        }
    };

    orderBy = (event: any) => {
        console.log('event', event);
        event.preventDefault();

        this.setState({
            persons: this.state.persons.reverse()
        })
    };

    // filterBy(filterProp) {
    //     this.persons.filter(person => {
    //         return person.issueCount === props;
    //     });
    // }

    extractData(data: any) {
        const allTextLines = data.split(/\r\n|\n/);

        allTextLines.slice(1).map((line: string) => {
            this.headers = replaceQuotes(allTextLines[0].split(','));
            this.person = replaceQuotes(line.split(','));

            return this.persons.push({
                firstName: this.person[0],
                surname: this.person[1],
                issueCount: parseInt(this.person[2], 10),
                dateOfBirth: new Date(this.person[3]).toLocaleDateString()
            });
        });

        this.persons.sort((a, b) => a.issueCount > b.issueCount ? 1 : -1);

        return {
            headers: this.headers,
            persons: this.persons
        }
    }

    render() {
        return (
            <Box display="flex" flexDirection="row" justifyContent="center">
                <Card>
                    <CardHeader title="CSV upload">
                    </CardHeader>
                    <CardContent>
                        <FileInput
                            onChange={(e: React.ChangeEvent) => {
                                this.handleChange(e)
                            }}
                        />
                        <CSVTable
                            headers={this.state.headers}
                            persons={this.state.persons}
                            orderBy={(e: any) => {
                                this.orderBy(e)
                            }}
                        />
                    </CardContent>
                </Card>
            </Box>
        );
    }
}

function replaceQuotes(text: string[]): string[] {
    return text.map((column) => column.replace(/"/g, ''));
}

export default withRouter(CSVUpload)
