import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { ReactElement } from "react";
import { Content } from "../../containers/Home";
import { createStyles } from "@material-ui/styles";

interface Props {
    classes: any;
    content?: Content;
}

const styles = createStyles({
    actions: {
        display: "flex",
        justifyContent: "flex-end",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 20,
        marginTop: 20,
        width: 400,
        "&:hover img": {
            filter: 'brightness(50%) blur(1px)'
        }
    },
    content: {
        flex: 1,
    },
    media: {
        transition: 'all 1s ease',
        filter: 'brightness(100%) blur(2px)'
    },
});

class ProjectCard extends React.PureComponent<Props> {
    public render(): ReactElement {
        const classes = this.props.classes;
        const content = this.props.content;

        return (
            <Card className={classes.card}>
                <CardHeader
                    title={content?.title}
                    subheader={content?.subtitle}
                />
                <CardMedia
                    className={classes.media}
                    component="img"
                    image={content?.img}
                    title={content?.title}
                />
                <CardContent className={classes.content}>
                    <Typography component="p">
                        {content?.content}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableSpacing={true}>
                    <Button href={content?.url} variant={"contained"} color={"primary"} disableElevation={true}>
                        {content?.title}
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(ProjectCard);
