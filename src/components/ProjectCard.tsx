import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Collapse from "@material-ui/core/Collapse";
import red from "@material-ui/core/colors/red";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";

import classNames from "classnames";

interface Props {
    classes: any;
}

interface State {
    expanded: boolean;
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
        marginTop: 20,
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

class ProjectCard extends React.Component<Props, State> {
    public state = {expanded: false};

    public handleExpandClick = () => {
        this.setState((state) => ({expanded: !state.expanded}));
    }

    public render() {
        const {classes} = this.props;

        const classNames1 = classNames(classes.expand, {
            [classes.expandOpen]: this.state.expanded,
        });

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={<Avatar aria-label="Recipe" className={classes.avatar}>R</Avatar>}
                    action={<IconButton><MoreVertIcon/></IconButton>}
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableSpacing={true}>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon/>
                    </IconButton>
                    <IconButton
                        className={classNames1}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit={true}>
                    <CardContent>
                        <Typography paragraph={true}>Method:</Typography>
                        <Typography paragraph={true}>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                        </Typography>
                        <Typography paragraph={true}>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                            chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                            salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                            minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph={true}>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                            to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                            cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

export default withStyles(styles)(ProjectCard);
