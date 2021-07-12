import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
/*Components */
import Dishes from "../components/dishes";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <Dishes />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
