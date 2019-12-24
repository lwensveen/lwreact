import React from "react";
import { Person } from "../models/Person";

interface Props {
    headers: string[];
    persons: Person[];
    orderBy: any;
}

export class CSVTable extends React.PureComponent<Props, any> {

    public render() {

        if (this.props.headers && this.props.persons) {

            const headers = this.props.headers.map((propHeaders) =>
                <th key={propHeaders + 1}>{propHeaders}</th>,
            );

            const person = this.props.persons.map((persons) =>
                <tr key={persons.firstName + 1}>
                    <td>{persons.firstName}</td>
                    <td>{persons.surname}</td>
                    <td>{persons.issueCount}</td>
                    <td>{persons.dateOfBirth}</td>
                </tr>,
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
            );
        }
        return null;
    }
}

export default CSVTable;
