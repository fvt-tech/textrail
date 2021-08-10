import React from "react";
import { Switch, Route } from "react-router-dom";
const MessagingSection = (props) => {
  console.log(props.route);
  return (
    <Switch>
      <Route path={`${props.route}/addressBook`}>This is messaging address book</Route>
      <Route path={`${props.route}/templates`}>This is messaging templates</Route>
      <Route path={`${props.route}/scheduled`}>This is scheduled messages </Route>
      <Route exact path={props.route}>
        This is messaging home( send sms)
      </Route>
    </Switch>
  );
};
export default MessagingSection;