import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import React, { ReactElement, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import "./Header.scss";

interface Props extends RouteComponentProps<any> {
    classes: any;
}

const options = [
    {
        id: 1,
        title: "lodewijkwensveen@protonmail.com",
        url: "lodewijkwensveen@protonmail.com",
    },
    {
        id: 2,
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/lwensveen/",
    },
];

const useStyles = makeStyles({
    appBar: {
        backgroundColor: "#fff",
        boxShadow: "none",
        color: "#000",
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

export default function Header(): ReactElement {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar className={classes.appBar} position="static">
            <Toolbar>
                <Typography className={classes.title} variant="h6">
                    <Link to="/">LWReact</Link>
                </Typography>
                <IconButton onClick={handleClick} edge="start" color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {options.map((option) => (
                        <MenuItem key={option.id} onClick={handleClose}>
                            <a href={option.url}>{option.title}</a>
                        </MenuItem>
                    ))}
                </Menu>
            </Toolbar>
        </AppBar>
    );
}
