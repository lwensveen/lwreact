import React, { Component } from "react";
import { Person } from "../containers/CSVUpload";

interface Props {
    headers: string[];
    persons: Person[];
    orderBy: any;
}

export class CSVTable extends Component<Props> {

    render() {

        console.log('this.props.data', this.props);

        if (this.props.headers && this.props.persons) {
            const headers = this.props.headers.map((headers: any) =>
                <th key={headers + 1}>{headers}</th>
            );

            const person = this.props.persons.map((persons: any) =>
                <tr key={persons.firstName + 1}>
                    <td>{persons.firstName}</td>
                    <td>{persons.surname}</td>
                    <td>{persons.issueCount}</td>
                    <td>{persons.dateOfBirth}</td>
                </tr>
            );

            return (
                <table>
                    <thead>
                    <tr onClick={this.props.orderBy}>
                        {headers}
                    </tr>
                    </thead>
                    <tbody>
                    {person}
                    </tbody>
                </table>
            )
        }
        return null;

    }

}

export default CSVTable;
