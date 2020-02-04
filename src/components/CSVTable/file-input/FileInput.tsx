import React, { ReactElement } from "react";

interface Props {
    onChange(evt: React.ChangeEvent): void;
}

export default function FileInput(props: Props): ReactElement {
    const fileInput = React.createRef<HTMLInputElement>();

    return (
        <input type="file" accept=".csv" onChange={props.onChange} ref={fileInput}/>
    );
}
