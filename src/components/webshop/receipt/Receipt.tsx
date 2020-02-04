import React, { ReactElement } from "react";
import { Card } from "@material-ui/core";
import Monthly from "./Monthly";

export default function Receipt(props: any): ReactElement {
    return (
        <Card>
            <Monthly/>
        </Card>
    )
}
