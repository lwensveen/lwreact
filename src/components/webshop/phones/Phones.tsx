import React from "react";
import { Phone as PhoneInterface } from "../../../mocks/phones";
import "./Phones.scss";
import Phone from "./phone/Phone";

interface Props {
    phones: PhoneInterface[];
    fixUrl(url: string): string;
}

export default function Phones(props: Props): any {
    return (
        <>{props.phones.map((phone) =>
            <Phone key={phone.id} phone={phone} fixUrl={props.fixUrl}/>
        )}</>
    )
}
