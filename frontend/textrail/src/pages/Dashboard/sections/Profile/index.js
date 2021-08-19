import React, {useState, useEffect } from "react";
import DashboardCard from "../../../../components/DashboardCard";
import Notifications from "./components/Notifications";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import "./styles.scss";
const Profile = () => {
 
  return (
    <div className="dashboardPage">
      <h1>Profile</h1>
      <DashboardCard title="Personal Details">
        <PersonalDetailsForm/>
      </DashboardCard>
      <DashboardCard title="Notifications"><Notifications/></DashboardCard>
    </div>
  );
};
export default Profile;
