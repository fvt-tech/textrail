import React from "react";
import DashboardCard from "./components/DashboardCard";
import DashboardList from "./components/List";
import { HeadingWithSearchBar } from "./components/SimpleComponents";

import "./styles.scss";
const DashboardContent = () => {
  return (
    <div className="dashboardContent">
      <h3>Hi Macol RD</h3>
      <h1>Inbox</h1>
      <DashboardCard>
        <HeadingWithSearchBar/>
        <DashboardList/>
      </DashboardCard>
    </div>
  );
};

export default DashboardContent;
