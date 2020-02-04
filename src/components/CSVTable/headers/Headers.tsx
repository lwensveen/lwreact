import React, { ReactElement } from "react";

interface Props {
    headers: string[];
    orderBy(): void;
}

export default function Headers(props: Props): ReactElement {
    return (
        <>
            {props.headers.map((propHeaders) =>
                <th key={propHeaders + 1} onClick={() => props.orderBy()}>{propHeaders}</th>,
            )}
        </>
    )
}
