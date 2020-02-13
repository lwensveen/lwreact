import React, { ReactElement } from "react";
import Monthly from "./Monthly";
import OneTime from "./OneTime";

export default function Receipt(): ReactElement {
    /* TODO pull receipt and steps states up or use a store */
    return (
        <>
            <Monthly/>
            <OneTime/>
        </>
    )
}
