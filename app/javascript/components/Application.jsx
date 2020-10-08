import React from "react";
import { Route, Switch } from "react-router-dom";
import TopNav from "./shared/TopNav";
import BoardsDashboardContainer from "./dashboard/BoardsDashboardContainer";
import BoardContainer from "./board/BoardContainer";

const Application = () => {
  return (
    <div>
      <TopNav />
      <Switch>
        <Route path="/boards/:id" exact component={BoardContainer} />
        <Route path="/" exact component={BoardsDashboardContainer} />
      </Switch>
    </div>
  );
};

export default Application;
