import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, indigo } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css'
import Routes from './Routes';
import Header from './layout/Header';
import Footer from './layout/Footer'


const theme = createMuiTheme({
    palette: {
        secondary: {
            main: blue[900]
        },
        primary: {
            main: indigo[700]
        }
    },
    typography: {
        useNextVariants: true,
    },
});

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <Header/>
                <MuiThemeProvider theme={theme}>
                    <Routes/>
                </MuiThemeProvider>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default App;
