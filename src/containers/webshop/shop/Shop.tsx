import { Box, CircularProgress, Container, createStyles, Toolbar, Typography, WithStyles, } from "@material-ui/core";

import withStyles from "@material-ui/core/styles/withStyles";
import React, { ReactElement } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { Brands, BRANDS } from "../../../mocks/brands";
import { OperatingSystem, OPERATINGSYSTEM } from "../../../mocks/operating-system";
import { Phone as PhoneInterface } from "../../../mocks/phones";

import Filters from "../../../components/webshop/Filters";
import Phones from "../../../components/webshop/phones/Phones";

const styles = createStyles({
    root: {
        backgroundColor: "#6d9cbe",
    },
    toolbar: {
        backgroundColor: "#fff",
        marginBottom: "20px",
    },
    filters: {
        marginRight: "20px",
    }
});

interface Props extends WithStyles<typeof styles>, RouteComponentProps<any> {
    classes: {
        root: string;
        filters: string;
        toolbar: string;
    };
}

interface State {
    brands: Brands[];
    checked: undefined;
    os: OperatingSystem[];
    phones: PhoneInterface[];
    loaded: boolean;
    error: any;
    filterBrands: string[];
    filterOS: string[];
    filterUrl: any;
}

class Shop extends React.PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            brands: BRANDS,
            checked: undefined,
            os: OPERATINGSYSTEM,
            phones: [],
            loaded: false,
            error: null,
            filterUrl: '',
            filterBrands: [],
            filterOS: []
        };
    }

    public componentDidMount(): void {
        fetch("http://localhost:5000/api/phones")
            .then((response) => response.json())
            .then((phones: PhoneInterface[]) => {
                this.setState({
                    phones: [...phones],
                    loaded: true,
                });
            }, (error) => {
                this.setState({
                    error: error,
                    loaded: false
                })
            });
    }

    public handleBrands = (name: string) => (evt: any) => {

        if (evt.target.checked) {
            this.setState({
                filterBrands: [...this.state.filterBrands, name]
            });
            return
        }

        this.setState({
            filterBrands: []
        });
    };

    public fixUrl(url: string): string {
        return url.replace(/\s/g, '');
    }

    public handleOS = (name: string) => (evt: any) => {

        if (evt.target.checked) {
            this.setState({
                filterOS: [...this.state.filterOS, name]
            });
            return
        }

        this.setState({
            filterOS: []
        });
    };

    public render(): ReactElement {
        const {classes} = this.props;

        const phones = this.state.filterBrands.length || this.state.filterOS.length ?
            this.state.phones.filter(phone => {
                return this.state.filterOS.indexOf(phone.os) !== -1 || this.state.filterBrands.indexOf(phone.brand) !== -1;
            }) : this.state.phones;

        if (this.state.error) {
            return (
                <Box className={classes.root} display="flex" flexDirection="row" justifyContent="center"
                     alignItems="center">
                    <div>Error: {this.state.error.message}</div>
                </Box>
            )
        } else if (!this.state.loaded) {
            return (
                <Box className={classes.root} display="flex" flexDirection="row" justifyContent="center"
                     alignItems="center">
                    <CircularProgress/>
                </Box>
            )
        } else {
            return (
                <div className={classes.root}>
                    <Container>
                        <Box alignSelf="center">
                            <Toolbar className={classes.toolbar}>
                                <Typography variant="h6" className="banner-header">
                                    Alle telefoons
                                </Typography>
                            </Toolbar>
                        </Box>

                        <Box display="flex" flexDirection="row">
                            <Filters brands={this.state.brands}
                                     os={this.state.os}
                                     handleBrands={this.handleBrands}
                                     handleOS={this.handleOS}/>

                            <Phones phones={phones} fixUrl={this.fixUrl}/>
                        </Box>
                    </Container>
                </div>
            );
        }
    }
}

export default withRouter(withStyles(styles)(Shop));
