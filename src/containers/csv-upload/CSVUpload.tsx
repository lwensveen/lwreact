import { CardContent } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import React, { ReactElement } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import CSVTable from "../../components/CSV/CSVTable";
import FileInput from "../../components/CSV/FileInput";
import { Person } from "../../models/Person";
import "../Home.css";
import "./CSVUpload.scss";

interface Props extends RouteComponentProps<any> {
    classes: any;
    onChange: any;
    orderBy: any;
}

interface State {
    headers: string[];
    persons: Person[];
}

class CSVUpload extends React.PureComponent<Props, State> {
    public headers: string[] = [];
    public person: string[] = [];
    public persons: Person[] = [];

    constructor(props: Props) {
        super(props);

        this.state = {
            headers: [],
            persons: [],
        };
    }

    handleChange = (evt: any) => {
        const files = evt.target.files;
        const file = files[0];
        const reader = new FileReader();

        reader.readAsText(file);

        reader.onload = (): void => {
            const csv = reader.result;
            this.extractData(csv);
        };
    };

    orderBy = (): void => {
        this.setState({
            persons: [...this.state.persons.reverse()],
        });
    };

    replaceQuotes(text: string[]): string[] {
        return text.map((column) => column.replace(/"/g, ""));
    }

    extractData(data: any): void {
        const allTextLines = data.split(/\r\n|\n/);

        allTextLines.slice(1).forEach((line: string) => {
            this.headers = this.replaceQuotes(allTextLines[0].split(","));
            this.person = this.replaceQuotes(line.split(","));

            this.setState({
                headers: [...this.headers],
                persons: [...this.state.persons, {
                    dateOfBirth: new Date(this.person[3]).toLocaleDateString(),
                    firstName: this.person[0],
                    issueCount: parseInt(this.person[2], 10),
                    surname: this.person[1],
                }]
            });
        });

        this.setState({
            persons: [...this.state.persons.sort((a, b) => a.issueCount > b.issueCount ? 1 : -1)],
        });
    }

    public render(): ReactElement {
        return (
            <Box className={"csv-upload"} display="flex" flexDirection="row" justifyContent="center"
                 alignItems="center">
                <Card>
                    <CardHeader title="CSV upload"/>
                    <CardContent>
                        <FileInput
                            onChange={this.handleChange}
                        />
                        <CSVTable
                            headers={this.state.headers}
                            persons={this.state.persons}
                            orderBy={this.orderBy}
                        />
                    </CardContent>
                </Card>
            </Box>
        );
    }
}


export default withRouter(CSVUpload);
