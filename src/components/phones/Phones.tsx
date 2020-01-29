import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";
import red from "@material-ui/core/colors/red";
import { Phone as PhoneInterface } from "../../mocks/phones";
import "./Phones.scss";
import Phone from "./phone/Phone";

interface Props {
    classes: any;
    phones: PhoneInterface[];
    fixUrl: any;
}

const styles = (theme: Theme) => ({
    actions: {
        display: "flex",
    },
    avatar: {
        backgroundColor: red[500],
    },
    card: {
        marginBottom: 20,
        width: 400,
    },
    expand: {
        marginLeft: "auto",
        transform: "rotate(0deg)",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
});

class Phones extends React.PureComponent<Props> {

    public render(): any {
        return this.props.phones.map((phone) =>
            <Phone key={phone.id} phone={phone} fixUrl={this.props.fixUrl}/>
        );
    }
}

export default withStyles(styles)(Phones);
