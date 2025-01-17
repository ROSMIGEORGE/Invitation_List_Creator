import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../_helpers/history";
import "../scss/style.scss";
import Login from "./Login";
import Details from "./Details";

//root component
const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/details" exact component={Details} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
