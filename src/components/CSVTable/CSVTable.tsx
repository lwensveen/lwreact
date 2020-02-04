import React, { ReactElement } from "react";
import "./CSVTable.scss";
import Rows from "./rows/Rows";
import Headers from "./headers/Headers";

interface Props {
    headers: string[];
    rows: any[];

    orderBy(): void;
}

export default function CSVTable(props: Props): ReactElement | null {
    if (props.headers && props.rows) {
        return (
            <table>
                <thead>
                <tr>
                    <Headers headers={props.headers} orderBy={props.orderBy}/>
                </tr>
                </thead>
                <tbody>
                <Rows rows={props.rows}/>
                </tbody>
            </table>
        )
    }
    return null;
}
