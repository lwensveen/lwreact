import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './Header.scss';

/* tslint:disable */
import { unstable_Box as Box } from '@material-ui/core/Box';
/* tslint:enable */

import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const options = [
    {
        id: 1,
        title: 'lodewijkwensveen@gmail.com',
        url: 'lodewijkwensveen@gmail.com',
    },
    {
        id: 2,
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/lwensveen/'
    }
    ,
];

class Header extends Component<RouteComponentProps> {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    state = {
        anchorEl: null,
    };

    handleClick = (event: any) => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);

        console.log('ancherel', anchorEl);

        return (

            <header className="header">
                <Box display="flex" flexDirection="row" justifyContent="space-between">
                    <Box className="logo" flexDirection="column">
                        <h3>LWReact</h3>
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
                                onClose={this.handleClose}>
                                {options.map(option => (
                                    <MenuItem key={option.id} onClick={this.handleClose}>
                                        <a href={option.url}>{option.title}</a>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </nav>

                    </Box>
                </Box>
            </header>
        );
    }
}

export default withRouter(Header);
