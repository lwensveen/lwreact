import React from "react";
import { Route, Switch } from "react-router-dom";

import asyncComponent from "./components/AsyncComponent";

const AsyncHome = asyncComponent(() => import("./containers/Home"));
const AsyncWebShop = asyncComponent(() => import("./containers/WebShop"));
const AsyncCSVUpload = asyncComponent(() => import("./containers/CSVUpload"));

export default () =>
    <Switch>
        <Route path="/" exact={true} component={AsyncHome}/>
        <Route path="/examples/webshop" exact={true} component={AsyncWebShop}/>
        <Route path="/examples/csv-upload" exact={true} component={AsyncCSVUpload}/>
    </Switch>;
