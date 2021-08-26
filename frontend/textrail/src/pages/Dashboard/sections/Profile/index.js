import { Card } from "antd";
import React, {useState, useEffect } from "react";
import DashboardCard from "../../../../components/DashboardCard";
import Notifications from "./components/Notifications";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import "./styles.scss";
const Profile = () => {
 
  return (
    <div className="dashboardPage">
      <h1>Profile</h1>
      <Card style={{margin:'1rem 0px 0px'}} title="Personal Details">
        <PersonalDetailsForm/>
      </Card>
      <Card style={{margin:'1rem 0px'}} title="Notifications"><Notifications/></Card>
    </div>
  );
};
export default Profile;
