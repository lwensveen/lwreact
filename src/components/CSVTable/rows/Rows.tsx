import React, { ReactElement } from "react";

interface Props {
    rows: any[];
}

export default function Rows(props: Props): ReactElement {
    console.log('rows', props.rows);
    return (
        <>
            {props.rows.map((rows) =>
                <tr key={rows.firstName + 1}>
                    <td>{rows.firstName}</td>
                    <td>{rows.surname}</td>
                    <td>{rows.issueCount}</td>
                    <td>{rows.dateOfBirth}</td>
                </tr>,
            )}
        </>
    )
}
