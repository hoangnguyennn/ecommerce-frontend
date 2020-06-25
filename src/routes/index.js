import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";

import { MainLayout, CheckoutLayout } from "../components/Layouts";
import { Home, SingleProduct, Cart, Shipping, Review } from "../containers";
import { CheckoutProvider } from "../contexts/checkout.context";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" exact component={Home} layout={MainLayout} />
        <PublicRoute
          path="/products/:id"
          exact
          component={SingleProduct}
          layout={MainLayout}
        />
        <PublicRoute path="/cart" exact component={Cart} layout={MainLayout} />

        <CheckoutProvider>
          <PrivateRoute
            path="/checkout/shipping"
            exact
            component={Shipping}
            layout={CheckoutLayout}
          />
          <PrivateRoute
            path="/checkout/review"
            exact
            component={Review}
            layout={CheckoutLayout}
          />
        </CheckoutProvider>
      </Switch>
    </Router>
  );
};

export default Routes;
