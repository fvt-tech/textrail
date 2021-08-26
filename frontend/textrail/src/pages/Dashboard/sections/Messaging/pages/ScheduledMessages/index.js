import React, { useState, useEffect } from "react";
import { Card } from "antd";
import DashboardCard from "../../../../../../components/DashboardCard";
import CampaignList from "./components/CampaignList";
import AddACampaign from "./components/AddACampaign";
import { textrailGetCampaigns } from "../../../../../../functions/campaigns";
const ScheduledMessages = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [mainUser, setMainUser] = useState({});
  //Get all sender ids
  useEffect(() => {
    const getCampaigns = async () => {
      const { data: user } = JSON.parse(localStorage.getItem("user"));
      setMainUser(user);
      const response = await textrailGetCampaigns(user._id);
      console.log(response);
      setCampaigns(response.data);
    };
    getCampaigns();
  }, []);
  return (
    <div className="dashboardPage">
      <h1>SMS Campaigns</h1>
      <Card title={<AddACampaign user={mainUser._id} />}>
        <CampaignList list={campaigns} />
      </Card>
    </div>
  );
};

export default ScheduledMessages;
