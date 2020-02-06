import React, { ReactElement } from "react";
import Monthly from "./Monthly";
import OneTime from "./OneTime";

export default function Receipt(): ReactElement {
    return (
        <>
            <Monthly/>
            <OneTime/>
        </>
    )
}
