import React from "react";
import { Empty } from "antd";
import DashboardCard from "../../../../../../components/DashboardCard";
import SenderIDList from "./components/SenderIDList";
import AddSenderID from "./components/AddSenderID";
const list = [
  {
    senderId: "Issah",
  },
  {
    senderId: "Kwaku",
  },
];
const SenderIDs = () => {
  return (
    <div className="dashboardPage">
      <h1>Sender IDs</h1>
      <DashboardCard>
        <AddSenderID/>
        <SenderIDList list={list} />
      </DashboardCard>
    </div>
  );
};

export default SenderIDs;
