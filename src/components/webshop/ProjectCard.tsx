import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Content } from "../../containers/Home";

interface Props {
    classes: any;
    content?: Content;
}

const styles = () => ({
    actions: {
        display: "flex",
        justifyContent: "flex-end",
    },
    card: {
        marginBottom: 20,
        marginTop: 20,
        width: 400,
    },
});

class ProjectCard extends React.PureComponent<Props> {
    public render() {
        const classes = this.props.classes;
        const content = this.props.content;

        return (
            <Card className={classes.card}>
                <CardHeader
                    title={content?.title}
                    subheader={content?.subtitle}
                />
                <CardMedia
                    component="img"
                    image="https://material.angular.io/assets/img/examples/shiba2.jpg"
                    title={content?.title}
                />
                <CardContent>
                    <Typography component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
