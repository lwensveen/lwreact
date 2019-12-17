import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "./Header.scss";

/* tslint:disable */
import Box from '@material-ui/core/Box';
/* tslint:enable */

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const options = [
    {
        id: 1,
        title: "lodewijkwensveen@gmail.com",
        url: "lodewijkwensveen@gmail.com",
    },
    {
        id: 2,
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/lwensveen/",
    }
    ,
];

class Header extends Component<RouteComponentProps> {

    public state = {
        anchorEl: null,
    };

    public componentDidMount() {
        window.scrollTo(0, 0);
    }

    public handleClick = (event: any) => {
        this.setState({anchorEl: event.currentTarget});
    }

    public handleClose = () => {
        this.setState({anchorEl: null});
    }

    public render() {
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);

        const menuItems = options.map((option) => (
            <MenuItem key={option.id} onClick={this.handleClose}>
                <a href={option.url}>{option.title}</a>
            </MenuItem>
        ));

        return (

            <header className="header">
                <Box display="flex" flexDirection="row" justifyContent="space-between">
                    <Box className="logo" flexDirection="column">
                        <h1>LWReact</h1>
                    </Box>
                    <Box alignSelf="center">
                        <nav>
                            <IconButton onClick={this.handleClick}>
                                <MoreVertIcon/>
                            </IconButton>

                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={this.handleClose}
                            >
                                {menuItems}
                            </Menu>
                        </nav>

                    </Box>
                </Box>
            </header>
        );
    }
}

export default withRouter(Header);
