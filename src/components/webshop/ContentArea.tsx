import React, {ReactElement} from "react";
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import ListItemText from "@material-ui/core/ListItemText";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

export default function ContentArea(): ReactElement {
    return (
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
    )
}
