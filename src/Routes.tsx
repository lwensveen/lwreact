import React from "react";
import { Route, Switch } from "react-router-dom";

import asyncComponent from "./components/AsyncComponent";

const AsyncHome = asyncComponent(() => import("./containers/Home"));
const AsyncWebShop = asyncComponent(() => import("./containers/WebShop"));
const AsyncCSVUpload = asyncComponent(() => import("./containers/CSVUpload"));

export default () =>
    <Switch>
        <Route path="/" exact component={AsyncHome}/>
        <Route path="/example/webshop" exact component={AsyncWebShop}/>
        <Route path="/example/csv-upload" exact component={AsyncCSVUpload}/>
    </Switch>;
