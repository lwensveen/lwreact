import { createStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import "./Home.css";

interface Props extends RouteComponentProps<any> {
    classes: any;
    content?: Content;
}

const styles = createStyles({
    root: {
        backgroundColor: "#5199FF",
    },
    toolbar: {
        backgroundColor: "#fff",
    },
});

export interface Content {
    id: number;
    title: string;
    subtitle: string;
    url: string;
    avatar: string;
    bulletpoints: Bulletpoints[];
    content: string;
}

export interface Bulletpoints {
    point: string;
}

export const CONTENT: Content[] = [
    {
        id: 1,
        title: "Webshop",
        subtitle: "Example e-commerce site (Telecom)",
        avatar: "/assets/javascript.svg",
        url: "examples/webshop",
        bulletpoints: [
            {
                point: "Functional Programming",
            },
            {
                point: "Prototypal Inheritance",
            },
            {
                point: "Object composition > Classical inheritance",
            },
        ],
        content: "Ik heb een ruime ervaring met Angular.",
    },
    {
        id: 2,
        title: "CSV Upload",
        subtitle: "Example CSV upload functionality",
        avatar: "/assets/javascript.svg",
        url: "examples/csv-upload",
        bulletpoints: [
            {
                point: "Functional Programming",
            },
            {
                point: "Prototypal Inheritance",
            },
            {
                point: "Object composition > Classical inheritance",
            },
        ],
        content: "Ik heb een ruime ervaring met Angular.",
    },
];

export interface ProjectCard {
    content: Content;
}

class Home extends Component<Props> {

    public render() {
        const {classes} = this.props;

        const cards = CONTENT.map((content) =>
            <ProjectCard content={content}/>,
        );

        return (
            <div className={classes.root}>
                <Container>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" className={classes.title}>
                            My React Projects
                        </Typography>
                    </Toolbar>
                    <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
                        {cards}
                    </Box>
                </Container>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(Home));
