import React from "react";
import DashboardContent from "../../components/Content";
import SideBarAndContentLayout from "../../layouts/SideBarAndContent";
import "./styles.scss";
const Dashboard = () => {
  return (
    <div className="fmarket">
      <SideBarAndContentLayout>
        <DashboardContent />
      </SideBarAndContentLayout>
    </div>
  );
};

export default Dashboard;
