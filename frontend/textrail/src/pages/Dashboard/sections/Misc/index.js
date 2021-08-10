import React from "react";
import { Switch, Route } from "react-router-dom";
import API from "./pages/API";
import Payment from "./pages/Payment";
import Reports from "./pages/Reports";
const MiscSection = (props) => {
  console.log(props.route);
  return (
    <Switch>
      <Route path={`${props.route}/api`} component={API} />
      <Route path={`${props.route}/payment`} component={Payment} />
      <Route exact path={`${props.route}/reports`} component={Reports}/>
    </Switch>
  );
};
export default MiscSection;
