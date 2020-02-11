import {Button, Container} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import React, { ReactElement } from "react";
import MediaCard from "../../components/webshop/MediaCard";
import "./Webshop.scss";
import {Link} from "react-router-dom";

export default function WebShop(): ReactElement {
    return (
        <>
            <Box className="banner">
                <img className="img-responsive" src="http://localhost:5000/images/webshop/banner.jpg" alt="Banner"/>
            </Box>

            <Box className="buttons">
                <Link to="/examples/webshop/shop">
                    <Button variant="contained" color="secondary">Telefoons</Button>
                </Link>
            </Box>

            <Box className="content">
                <Container>
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <List>
                            <ListSubheader disableSticky={true}>
                                BESTELLEN
                            </ListSubheader>
                            <Divider/>
                            <ListItem>
                                <Avatar>
                                    <ImageIcon/>
                                </Avatar>
                                <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
                            </ListItem>
                            <ListItem>
                                <Avatar>
                                    <WorkIcon/>
                                </Avatar>
                                <ListItemText primary="Work" secondary="Jan 7, 2014"/>
                            </ListItem>
                            <ListItem>
                                <Avatar>
                                    <BeachAccessIcon/>
                                </Avatar>
                                <ListItemText primary="Vacation" secondary="July 20, 2014"/>
                            </ListItem>
                        </List>
                        <List>
                            <ListSubheader disableSticky={true}>
                                ZELF REGELEN
                            </ListSubheader>
                            <Divider/>
                            <ListItem>
                                <Avatar>
                                    <ImageIcon/>
                                </Avatar>
                                <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
                            </ListItem>
                            <ListItem>
                                <Avatar>
                                    <WorkIcon/>
                                </Avatar>
                                <ListItemText primary="Work" secondary="Jan 7, 2014"/>
                            </ListItem>
                            <ListItem>
                                <Avatar>
                                    <BeachAccessIcon/>
                                </Avatar>
                                <ListItemText primary="Vacation" secondary="July 20, 2014"/>
                            </ListItem>
                        </List>
                        <List>
                            <ListSubheader disableSticky={true}>
                                SERVICE
                            </ListSubheader>
                            <Divider/>
                            <ListItem>
                                <Avatar>
                                    <ImageIcon/>
                                </Avatar>
                                <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
                            </ListItem>
                            <ListItem>
                                <Avatar>
                                    <WorkIcon/>
                                </Avatar>
                                <ListItemText primary="Work" secondary="Jan 7, 2014"/>
                            </ListItem>
                            <ListItem>
                                <Avatar>
                                    <BeachAccessIcon/>
                                </Avatar>
                                <ListItemText primary="Vacation" secondary="July 20, 2014"/>
                            </ListItem>
                        </List>
                    </Box>
                </Container>
            </Box>

            <Box className="promo-section">
                <Container>
                    <Box display="flex" flexDirection="row" justifyContent="space-evenly">
                        <MediaCard/>
                        <MediaCard/>
                        <MediaCard/>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
