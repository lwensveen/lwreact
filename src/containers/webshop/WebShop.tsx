import React, { Component } from "react";
import "./Webshop.scss";

/* tslint:disable */
import { unstable_Box as Box } from '@material-ui/core/Box';
/* tslint:enable */

import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard";

class WebShop extends Component<RouteComponentProps> {

    public render() {

        return (
            <React.Fragment>
                <Box className="banner" display="flex" flexDirection="row" justifyContent="center">
                    <h2 className="banner-header">
                        Test
                    </h2>
                </Box>

                <Box display="flex" flexDirection="row" justifyContent="center">
                    <List>
                        <ListSubheader>
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
                        <ListSubheader>
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
                        <ListSubheader>
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

                <Box className="promo-section" display="flex" flexDirection="row" justifyContent="center">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </Box>
            </React.Fragment>
        );
    }
}

export default withRouter(WebShop);