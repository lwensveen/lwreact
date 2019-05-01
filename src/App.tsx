import { blue, indigo } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import React, { Component } from "react";

import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Routes from "./Routes";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: indigo[700],
        },
        secondary: {
            main: blue[900],
        },
    },
    typography: {
        useNextVariants: true,
    },
});

class App extends Component {
    public render() {
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
