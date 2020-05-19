import { createStyles, WithStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { ReactElement } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ProjectCard from "../components/webshop/ProjectCard";
import "./Home.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
    img: string;
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
        img: "/assets/webshop.png",
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
        content: "Voorbeeld Webshop",
        subtitle: "Example e-commerce site (Telecom)",
    },
    {
        id: 2,
        title: "CSV Upload",
        avatar: "/assets/javascript.svg",
        url: "examples/csv-upload",
        img: "/assets/csv.png",
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
        content: "Voorbeeld CSV Upload",
        subtitle: "Example CSV upload functionality",
    },
];

export interface ProjectCard {
    content: Content;
}

class Home extends React.PureComponent<Props> {
    public render(): ReactElement {
        const {classes} = this.props;

        return (
            <Box className={classes.root} display="flex" flexDirection="row" justifyContent="center" alignItems="start">
                <Container>
                    <CSSTransition in={true} timeout={0} appear={true} classNames="item">
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6">
                                My React Projects
                            </Typography>
                        </Toolbar>
                    </CSSTransition>
                    <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
                        <TransitionGroup component={null} appear={true}>
                            {CONTENT.map((content) =>
                                <CSSTransition key={content.id} timeout={0} classNames="item">
                                    <ProjectCard key={content.id} content={content}/>
                                </CSSTransition>,
                            )}
                        </TransitionGroup>
                    </Box>
                </Container>
            </Box>
        );
    }
}

export default withRouter(withStyles(styles)(Home));
