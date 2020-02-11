import React, { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

import { CircularProgress, Container } from "@material-ui/core";

const Home = lazy(() => import("./containers/Home"));
const WebShop = lazy(() => import("./containers/webshop/WebShop"));
const Shop = lazy(() => import("./containers/webshop/shop/Shop"));
const ShopDetail = lazy(() => import("./containers/webshop/shop/Detail"));
const ShoppingCart = lazy(() => import("./containers/webshop/shop/ShoppingCart"));
const CheckoutSteps = lazy(() => import("./containers/webshop/shop/CheckoutSteps"));
const CSVUpload = lazy(() => import("./containers/csv-upload/CSVUpload"));
const NoMatch = lazy(() => import("./components/404"));

const App = (): React.ReactElement =>
    <Suspense fallback={
        <Container>
            <CircularProgress/>
        </Container>
    }>
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/examples/webshop" exact={true} component={WebShop}/>
            <Route path="/examples/webshop/shop" exact={true} component={Shop}/>
            <Route path="/examples/webshop/shop/product/:title/:id" component={ShopDetail}/>
            <Route path="/examples/webshop/shop/shoppingcart" component={ShoppingCart}/>
            <Route path="/examples/webshop/shop/customer-details" component={CheckoutSteps}/>
            <Route path="/examples/csv-upload" component={CSVUpload}/>
            <Route component={NoMatch}/>
        </Switch>
    </Suspense>;
export default App;
