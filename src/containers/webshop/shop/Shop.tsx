import React, { Component } from "react";
import "./Shop.scss";
/* tslint:disable */
import Box from '@material-ui/core/Box';
import { ExpansionPanelDetails } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { Brands, BRANDS } from "../../../mocks/brands";
import { OperatingSystem, OPERATINGSYSTEM } from "../../../mocks/operating-system";
import { PHONES, PhonesInterface } from "../../../mocks/phones";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Phones from "../../../components/Phones";

/* tslint:enable */

interface State {
    brands: Brands[];
    checked: undefined;
    os: OperatingSystem[];
    phones: PhonesInterface[];
}

class Shop extends Component<RouteComponentProps, State> {

    constructor(props: RouteComponentProps) {
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
            phones: PHONES,
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
            phones: PHONES,
        });
    }

    public render() {

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
            <Box display="flex" flexDirection="row" justifyContent="space-around">
                <Box display="flex" flexDirection="column">
                    <Box alignSelf="center">
                        <h1 className="banner-header">
                            Alle telefoons
                        </h1>
                        <p>Hier vindt u alle telefoons</p>
                    </Box>

                    <Box display="flex" flexDirection="row">

                        <Box display="flex" flexDirection="column">
                            <h2>Filters</h2>

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
                            <h2>Telefoons</h2>
                            <Box display="flex" flexDirection="row">
                                <Phones phones={this.state.phones}/>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
        );
    }
}

export default withRouter(Shop);
