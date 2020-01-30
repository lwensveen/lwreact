import React, { ReactElement } from "react";
import { Person } from "../../models/Person";
import "./CSVTable.scss";

interface Props {
    headers: string[];
    persons: Person[];
    orderBy(): void;
}

export default function CSVTable(props: Props): ReactElement | null {
    if (props.headers && props.persons) {
        return (
            <table>
                <thead>
                    <tr>
                        {props.headers.map((propHeaders) =>
                            <th key={propHeaders + 1} onClick={() => props.orderBy()}>{propHeaders}</th>,
                        )}
                    </tr>
                </thead>
                <tbody>
                {props.persons.map((persons) =>
                    <tr key={persons.firstName + 1}>
                        <td>{persons.firstName}</td>
                        <td>{persons.surname}</td>
                        <td>{persons.issueCount}</td>
                        <td>{persons.dateOfBirth}</td>
                    </tr>,
                )}
                </tbody>
            </table>
        )
    }
    return null;
}
