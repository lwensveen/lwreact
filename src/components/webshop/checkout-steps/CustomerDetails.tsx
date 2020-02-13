import React, { ReactElement } from "react";

import {
    Divider,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Props } from "../../../containers/webshop/shop/CheckoutSteps";

export default function CustomerDetails(props: Props): ReactElement {
    /* TODO implement errors and validation */
    return (
        <ExpansionPanel className={props.classes.panelStyle}
                        expanded={props.expanded === 'panel2'}
                        onChange={props.handlePanelChange('panel2')}
        >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
            >
                <Typography className={props.classes.heading}>Personal details</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={props.classes.details}>
                <h2>Type order</h2>

                <RadioGroup aria-label="type-order"
                            name="typeOrder"
                            value={props.form.typeOrder}
                            onChange={props.handleFormChange}
                            row
                >
                    <FormControlLabel value="consumer" control={<Radio/>} label="Consumer"/>
                    <FormControlLabel value="business" control={<Radio/>} label="Business"/>
                </RadioGroup>

                <Divider className={props.classes.divider}/>

                <h2>Your details</h2>

                <RadioGroup aria-label="gender"
                            name="gender"
                            value={props.form.gender}
                            onChange={props.handleFormChange}
                            row
                >
                    <FormControlLabel value="Mr." control={<Radio/>} label="Mr."/>
                    <FormControlLabel value="Mrs." control={<Radio/>} label="Mrs."/>
                </RadioGroup>

                <Divider className={props.classes.divider}/>

                <div className={props.classes.fields}>
                    <TextField id="firstName"
                               name="firstName"
                               value={props.form.firstName}
                               onChange={props.handleFormChange}
                               label="First name"
                    />
                    <TextField id="lastName"
                               name="lastName"
                               value={props.form.lastName}
                               onChange={props.handleFormChange}
                               label="Last name"
                    />
                </div>

                <div className={props.classes.fields}>
                    <TextField id="day" name="day"
                               value={props.form.day}
                               onChange={props.handleFormChange}
                               label="Day"
                    />
                    <TextField id="month" name="month"
                               value={props.form.month}
                               onChange={props.handleFormChange} label="Month"
                    />
                    <TextField id="year" name="year"
                               value={props.form.year}
                               onChange={props.handleFormChange}
                               label="Year"
                    />
                </div>

                <div className={props.classes.fields}>
                    <TextField id="mobile" name="mobile"
                               value={props.form.mobile}
                               onChange={props.handleFormChange}
                               label="Phone number"
                    />
                    <TextField id="email" name="email"
                               value={props.form.email}
                               onChange={props.handleFormChange}
                               label="Email"
                    />
                </div>

                <div className={props.classes.fields}>
                    <TextField id="zipcode" name="zipcode"
                               value={props.form.zipcode}
                               onChange={props.handleFormChange}
                               label="Zipcode"
                    />
                    <TextField id="houseNumber" name="houseNumber"
                               value={props.form.houseNumber}
                               onChange={props.handleFormChange}
                               label="Number"
                    />
                    <TextField id="street" name="street"
                               value={props.form.street}
                               onChange={props.handleFormChange}
                               label="Street"
                    />
                    <TextField id="state" name="state"
                               value={props.form.state}
                               onChange={props.handleFormChange}
                               label="State"
                    />
                    <TextField id="city" name="city"
                               value={props.form.city}
                               onChange={props.handleFormChange}
                               label="City"
                    />
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}
