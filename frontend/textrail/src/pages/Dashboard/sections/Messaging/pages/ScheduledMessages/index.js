import React, { useState, useEffect } from "react";
import { Empty } from "antd";
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
      <DashboardCard actions={<AddACampaign user={mainUser._id} />}>
        <CampaignList list={campaigns} />
      </DashboardCard>
    </div>
  );
};

export default ScheduledMessages;
