import React from "react";
import DashboardCard from "../../../../components/DashboardCard";
import "./styles.scss";
const Profile = () => {
  return (
    <div className="dashboardPage">
      <h1>Profile</h1>
      <DashboardCard title="Personal Details"></DashboardCard>
      <DashboardCard title="Notifications"></DashboardCard>

    </div>
  );
};
export default Profile;
