import React from "react";
import SideBarAndContentLayout from "../../layouts/SideBarAndContent";
import "./styles.scss";
import { DashboardMainContent } from "./utils";
import { Switch, Route } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="fmarket">
      <SideBarAndContentLayout>
        <Switch>
          {DashboardMainContent.map((item) => (
            <Route key={item.route} path={item.route} exact={item.exact}>
              {typeof item.component !== "string" ? (
                <item.component {...item} />
              ) : (
                item.component
              )}
            </Route>
          ))}
        </Switch>
      </SideBarAndContentLayout>
    </div>
  );
};

export default Dashboard;
