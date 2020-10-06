import React from "react";
import { Route, Switch } from "react-router-dom";
import TopNav from "./shared/TopNav";
import BoardsDashboardContainer from "./dashboard/BoardsDashboardContainer";
import Board from "./board/Board";

const Application = () => {
  return (
    <div>
      <TopNav />
      <Switch>
        <Route path="/boards/:id" exact component={Board} />
        <Route path="/" exact component={BoardsDashboardContainer} />
      </Switch>
    </div>
  );
};

export default Application;
