import React from "react";
import { Route, Switch } from "react-router-dom";
import TopNav from "./shared/TopNav";
import BoardsDashboardContainer from "./dashboard/BoardsDashboardContainer";
import BoardContainer from "./board/BoardContainer";
import CardContainer from './card/CardContainer';

const Application = () => {
  return (
    <div>
      <TopNav />
      <Switch>
        <Route path="/boards/:id" component={BoardContainer} />
        <Route path="/" exact component={BoardsDashboardContainer} />
      </Switch>
      <Route path="/boards/:id/cards/:card_id" exact component={CardContainer} />
    </div>
  );
};

export default Application;
