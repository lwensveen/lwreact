import { createStyles, WithStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ProjectCard from "../components/webshop/ProjectCard";
import "./Home.css";

// Added sleep to test Suspense
// function sleep(delay: any) {
//     const start = new Date().getTime();
//     while (new Date().getTime() < start + delay);
// }
//
// sleep(5000);

const styles = createStyles({
    root: {
        backgroundColor: "#5199FF",
    },
    toolbar: {
        backgroundColor: "#fff",
    },
});

interface Props extends WithStyles<typeof styles>, RouteComponentProps<any> {
    classes: {
        root: string;
        toolbar: string;
    };
    content?: Content;
}

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
        subtitle: "Example e-commerce site (Telecom)",
    },
    {
        id: 2,
        title: "CSV Upload",
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
        subtitle: "Example CSV upload functionality",
    },
];

export interface ProjectCard {
    content: Content;
}

class Home extends React.PureComponent<Props> {

    public render(): React.ReactElement {
        const {classes} = this.props;

        return (
            <Box className={classes.root} display="flex" flexDirection="row" justifyContent="center" alignItems="start">
                <Container>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6">
                            My React Projects
                        </Typography>
                    </Toolbar>
                    <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
                        {CONTENT.map((content) =>
                            <ProjectCard key={content.id} content={content}/>,
                        )}
                    </Box>
                </Container>
            </Box>
        );
    }
}

export default withRouter(withStyles(styles)(Home));
