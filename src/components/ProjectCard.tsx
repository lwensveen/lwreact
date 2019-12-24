import {withStyles} from "@material-ui/core/styles";
import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {Content} from "../containers/Home";

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
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
});

class ProjectCard extends React.PureComponent<Props> {
    public render() {
        const classes = this.props.classes;
        const content = this.props.content;

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={<Avatar aria-label="Recipe">{content!.avatar}</Avatar>}
                    action={<IconButton><MoreVertIcon/></IconButton>}
                    title={content!.title}
                    subheader={content!.subtitle}
                />
                <CardMedia
                    className={classes.media}
                    image="https://material.angular.io/assets/img/examples/shiba2.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableSpacing={true}>
                    <Button href={content!.url} variant={"contained"} color={"primary"} disableElevation={true}>
                        {content!.title}
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(ProjectCard);
