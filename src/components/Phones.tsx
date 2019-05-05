import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import red from "@material-ui/core/colors/red";
import Typography from "@material-ui/core/Typography";

import { Button } from "@material-ui/core";

import { unstable_Box as Box } from "@material-ui/core/Box";
import { PhonesInterface } from "../mocks/phones";
import "./Phones.scss";

interface Props {
    classes: any;
    phones: PhonesInterface[];
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

    public render() {
        const {classes} = this.props;

        const phones = this.props.phones.map((phone) =>
            <Card className="phone-card" key={phone.id}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <CardHeader
                        avatar={<Avatar aria-label="Recipe" className={classes.avatar}>{phone.title.charAt(0)}</Avatar>}
                        title={phone.title}
                        subheader={phone.subtitle}
                    />

                    <img src={phone.img} alt={phone.title}/>

                    {/*{phone.colors.map(((color) => <Chip color={color.color}>{color.color}</Chip>))}*/}

                    <CardContent>
                        <Typography variant="h3">
                            € 46,50
                        </Typography>
                        <Typography component="p">
                            Bijbetaling toestel € 59,00 excl. eenmalige kosten 5 GB + 120 min. bellen
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button variant="contained" color="primary">
                            Vergelijken
                        </Button>
                    </CardActions>
                </Box>
            </Card>,
        );

        return (
            [phones]
        );
    }
}

export default withStyles(styles)(Phones);
