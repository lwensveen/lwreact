import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Menu from './Menu';
import { createStyles, Theme } from "@material-ui/core";

const logo = 'test';

//require('../images/logo.svg');

interface Props extends RouteComponentProps<any> {
    classes?: any;
}

const styles = (theme: Theme) => createStyles({
    appBar: {
        position: 'relative',
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.grey['100']}`,
        backgroundColor: 'white',

    },
    inline: {
        display: 'inline'
    },
    flex: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    productLogo: {
        display: 'inline-block',
        borderLeft: `1px solid ${theme.palette.grey['A100']}`,
        marginLeft: 32,
        paddingLeft: 24,
        [theme.breakpoints.up('md')]: {
            paddingTop: '1em'
        }
    },
    tagline: {
        display: 'inline-block',
        marginLeft: 10,
    },
    iconContainer: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    iconButton: {
        float: 'right'
    },
    tabContainer: {
        marginLeft: 32,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    tabItem: {
        paddingTop: 20,
        paddingBottom: 20,
        minWidth: 'auto'
    }
});

class Header extends Component<Props> {
    state = {
        value: 0,
        menuDrawer: false
    };

    handleChange = (event: any, value: number) => {
        this.setState({value});
    };

    mobileMenuOpen = (event: React.MouseEvent<HTMLInputElement>) => {
        this.setState({menuDrawer: true});
    };

    mobileMenuClose = (event: React.MouseEvent<HTMLInputElement>) => {
        this.setState({menuDrawer: false});
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {classes} = this.props;

        return (
            <AppBar position="sticky" color="default" className={classes.appBar}>
                <Toolbar>
                    <Grid container spacing={24} alignItems="baseline">
                        <Grid item xs={12} className={classes.flex}>
                            <React.Fragment>
                                <div className={classes.productLogo}>
                                    <Typography variant="h6" color="inherit" noWrap>
                                        <Link to='/' className={classes.link}>
                                            <img width={20} src={logo} alt=""/>
                                            <span className={classes.tagline}>LWReact</span>
                                        </Link>
                                    </Typography>
                                </div>
                                <div className={classes.iconContainer}>
                                    <IconButton onClick={this.mobileMenuOpen} className={classes.iconButton}
                                                color="inherit" aria-label="Menu">
                                        <MenuIcon/>
                                    </IconButton>
                                </div>
                                <div className={classes.tabContainer}>
                                    <SwipeableDrawer anchor="right" open={this.state.menuDrawer}
                                                     onClose={this.mobileMenuClose} onOpen={this.mobileMenuOpen}>
                                        <AppBar title="Menu"/>
                                        <List>
                                            {Menu.map((item, index) => (
                                                <Link to={{
                                                    pathname: item.pathname,
                                                    search: this.props.location.search
                                                }} key={item.label}>
                                                    <ListItemText primary={item.label}/>
                                                </Link>
                                            ))}
                                        </List>
                                    </SwipeableDrawer>
                                    <Tabs
                                        value={this.state.value}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        onChange={this.handleChange}>
                                        {Menu.map((item, index) => (
                                            <Tab key={index} classes={{root: classes.tabItem}} label={item.label}>
                                                <Link
                                                    to={{pathname: item.pathname, search: this.props.location.search}}/>
                                            </Tab>
                                        ))}
                                    </Tabs>
                                </div>
                            </React.Fragment>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withRouter(withStyles(styles)(Header));
