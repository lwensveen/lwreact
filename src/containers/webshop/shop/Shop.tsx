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
    withStyles,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import Phones from "../../../components/Phones";
import { Brands, BRANDS } from "../../../mocks/brands";
import { OperatingSystem, OPERATINGSYSTEM } from "../../../mocks/operating-system";
import { PHONES, PhonesInterface } from "../../../mocks/phones";

import "./Shop.scss";

interface Props extends RouteComponentProps<any> {
    classes: any;
}

interface State {
    brands: Brands[];
    checked: undefined;
    os: OperatingSystem[];
    phones: PhonesInterface[];
}

const styles = createStyles({
    root: {
        backgroundColor: "#5199FF",
        height: "100%",
    },
    toolbar: {
        backgroundColor: "#fff",
        marginBottom: "20px",
    },
});

class Shop extends React.PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            brands: BRANDS,
            checked: undefined,
            os: OPERATINGSYSTEM,
            phones: PHONES,
        };
    }

    public handleBrands = (name: string) => (evt: any) => {

        if (evt.target.checked) {
            const filtered = this.state.phones.filter((phone) => phone.brand === name);

            this.setState(
                {
                    phones: filtered,
                },
            );
            return;
        }

        this.setState({
            phones: [...PHONES],
        });
    }

    public handleOS = (name: string) => (evt: any) => {

        if (evt.target.checked) {
            const filtered = this.state.phones.filter((phone) => phone.os === name);

            this.setState(
                {
                    phones: filtered,
                },
            );
            return;
        }

        this.setState({
            phones: [...PHONES],
        });
    }

    public render() {
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

        return (
            <div className={"test"}>
                <Container>
                    <Box alignSelf="center">
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" className="banner-header">
                                Alle telefoons
                            </Typography>
                        </Toolbar>
                    </Box>

                    <Box display="flex" flexDirection="row" justifyContent="space-between">

                        <Box display="flex" flexDirection="column">
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

                        <Box display="flex" flexDirection="column">
                            <Toolbar className={classes.toolbar}>
                                <Typography variant="h6">Telefoons</Typography>
                            </Toolbar>
                            <Box display="flex" flexDirection="row">
                                <Phones phones={this.state.phones}/>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(Shop));
