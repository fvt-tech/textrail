import React from "react";
import { Switch, Route } from "react-router-dom";
const MiscSection = (props) => {
  console.log(props.route);
  return (
    <Switch>
      <Route path={`${props.route}/api`}>This is misc api</Route>
      <Route path={`${props.route}/payment`}>This is misc payment</Route>
      <Route exact path={props.route}>
        This is misc home( reports)
      </Route>
    </Switch>
  );
};
export default MiscSection;
