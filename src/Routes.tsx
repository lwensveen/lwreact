import React from "react";
import { Route, Switch } from "react-router-dom";

import asyncComponent from "./components/AsyncComponent";
import NoMatch from "./components/404";

const AsyncHome = asyncComponent(() => import("./containers/Home"));
const AsyncWebShop = asyncComponent(() => import("./containers/webshop/WebShop"));
const AsyncShop = asyncComponent(() => import("./containers/webshop/shop/Shop"));
const AsyncShopDetail = asyncComponent(() => import("./containers/webshop/shop/detail/Detail"));
const AsyncCSVUpload = asyncComponent(() => import("./containers/csv-upload/CSVUpload"));

export default () =>
    <Switch>
        <Route path="/" exact={true} component={AsyncHome}/>
        <Route path="/examples/webshop" exact={true} component={AsyncWebShop}/>
        <Route path="/examples/webshop/shop" exact={true} component={AsyncShop}/>
        <Route path="/examples/webshop/shop/product/:title/:id" component={AsyncShopDetail}/>
        <Route path="/examples/csv-upload" exact={true} component={AsyncCSVUpload}/>
        <Route component={NoMatch}/>
    </Switch>;
