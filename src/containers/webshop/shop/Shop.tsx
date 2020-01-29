import {
    Box,
    Checkbox,
    Container,
    createStyles,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    FormControlLabel,
    FormGroup,
    Toolbar,
    Typography,
    WithStyles,
} from "@material-ui/core";

import withStyles from "@material-ui/core/styles/withStyles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { ReactElement } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import Phones from "../../../components/phones/Phones";
import { Brands, BRANDS } from "../../../mocks/brands";
import { OperatingSystem, OPERATINGSYSTEM } from "../../../mocks/operating-system";
import { Phone as PhoneInterface } from "../../../mocks/phones";

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
            filterUrl: '',
            filterBrands: [],
            filterOS: []
        };
    }

    public componentDidMount(): void {
        fetch("http://localhost:5000/api/phones")
            .then((response) => response.json())
            .then((phones: PhoneInterface[]) => {
                this.setState({phones: [...phones]});
            });
    }

    public handleBrands = (name: string) => (evt: any) => {

        console.log(name);

        if (evt.target.checked) {
            this.setState({
                filterBrands: [name]
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
                filterOS: [name]
            });
            return
        }

        this.setState({
            filterOS: []
        });
    };

    public render(): ReactElement {
        const {classes} = this.props;

        const brands = this.state.brands.map((brand) =>
            <FormControlLabel
                key={brand.id}
                /* tslint:disable-next-line:jsx-no-multiline-js */
                control={
                    <Checkbox
                        checked={this.state.checked}
                        onChange={this.handleBrands(brand.name)}
                        value={brand.name}
                    />
                }
                label={brand.name}
            />,
        );

        const os = this.state.os.map((os) =>
            <FormControlLabel
                key={os.id}
                /* tslint:disable-next-line:jsx-no-multiline-js */
                control={
                    <Checkbox
                        checked={this.state.checked}
                        onChange={this.handleOS(os.name)}
                        value={os.name}
                    />
                }
                label={os.name}
            />,
        );

        const phones = this.state.filterBrands.length || this.state.filterOS.length ?
            this.state.phones.filter(phone => {
                return this.state.filterOS.indexOf(phone.os) !== -1 && this.state.filterBrands.indexOf(phone.brand) !== -1;
            }) : this.state.phones;

        console.log(phones);

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

                        <Box className={classes.filters} display="flex" flexDirection="column">
                            <Toolbar className={classes.toolbar}>
                                <Typography variant="h6">Filters</Typography>
                            </Toolbar>

                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Typography>Merken</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <FormGroup>
                                        {brands}
                                    </FormGroup>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Typography>Besturingssysteem</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    {os}
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Box>

                        <Box display="flex" flex="1" flexDirection="column">
                            <Toolbar className={classes.toolbar}>
                                <Typography variant="h6">Telefoons</Typography>
                            </Toolbar>
                            <Box display="flex" flexDirection="row">
                                <Phones phones={phones} fixUrl={this.fixUrl}/>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(Shop));
