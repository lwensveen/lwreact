import { createStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "./Header.scss";

interface Props extends RouteComponentProps<any> {
    classes: any;
}

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
    },
];

const styles = createStyles({
    appBar: {
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "none",
    },
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        backgroundColor: "blue",
    },
});

class Header extends Component<Props> {

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
        const {classes} = this.props;

        const menuItems = options.map((option) => (
            <MenuItem key={option.id} onClick={this.handleClose}>
                <a href={option.url}>{option.title}</a>
            </MenuItem>
        ));

        return (
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6">
                        LWReact
                    </Typography>
                    <IconButton onClick={this.handleClick} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={this.handleClose}
                    >
                        {menuItems}
                    </Menu>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withRouter(withStyles(styles)(Header));
