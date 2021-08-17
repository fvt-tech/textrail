import React, { useState, useEffect } from "react";
import { Empty } from "antd";
import DashboardCard from "../../../../../../components/DashboardCard";
import SenderIDList from "./components/SenderIDList";
import AddSenderID from "./components/AddSenderID";
import { textrailGetSenderIDs } from "../../../../../../functions/senderID";

const SenderIDs = () => {
  const [senderIds, setSenderIds] = useState([]);
  const [user, setUser] = useState();
  //Get all sender ids
  useEffect(() => {
    const getSenderIds = async () => {
      const {
        data: { user: current_user },
      } = JSON.parse(localStorage.getItem("user"));
      setUser(current_user);
      const response = await textrailGetSenderIDs(current_user._id);
      console.log(response);
      // setSenderIds(response.data)
    };
    getSenderIds();
  }, []);
  return (
    <div className="dashboardPage">
      <h1>Sender IDs</h1>
      <DashboardCard>
        <AddSenderID user={user} />
        <SenderIDList list={senderIds} />
      </DashboardCard>
    </div>
  );
};

export default SenderIDs;
