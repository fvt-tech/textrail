import React from "react";
import { Empty } from "antd";
import DashboardCard from "../../../../../../components/DashboardCard";
const ScheduledMessages = () => {
  return (
    <div className="dashboardPage">
      <h1>Scheduled Messages</h1>
      <DashboardCard>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No scheduled messages"
        />
      </DashboardCard>
    </div>
  );
};

export default ScheduledMessages;
