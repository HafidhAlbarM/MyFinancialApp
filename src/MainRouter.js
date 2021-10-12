import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Incomes from "./pages/incomes/Incomes";
import Expenses from "./pages/expenses/Expenses";

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/incomes" component={Incomes}></Route>
        <Route exact path="/expenses" component={Expenses}></Route>
      </Switch>
    </div>
  );
};

export default MainRouter;
