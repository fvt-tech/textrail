import React from "react";
import { Empty } from "antd";
import DashboardCard from "../../../../../../components/DashboardCard";
const SendSMS = () => {
  return (
    <div className="dashboardPage">
      <h1>Send SMS</h1>
      <DashboardCard>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Address Book" />
      </DashboardCard>
    </div>
  );
};

export default SendSMS;
