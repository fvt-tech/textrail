import React from "react";
import "./styles.scss";
import DemoColumn from "./components/DemoColumn";
import DemoPie from "./components/DemoPie";

import DashboardCard from "../../../../components/DashboardCard";
const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      <h1>Dashboard</h1>
      <DashboardCard title="Bar Chart">
        <DemoColumn />
      </DashboardCard>
      <DashboardCard title="Pie Chart">
        <DemoPie/>
      </DashboardCard>
    </div>
  );
};
export default DashboardPage;
