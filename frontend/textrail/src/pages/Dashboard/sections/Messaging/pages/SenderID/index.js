import React, { useState, useEffect } from "react";
import { Card } from "antd";
import DashboardCard from "../../../../../../components/DashboardCard";
import SenderIDList from "./components/SenderIDList";
import AddSenderID from "./components/AddSenderID";
import { textrailGetSenderIDs } from "../../../../../../functions/senderID";

const SenderIDs = () => {
  const [senderIds, setSenderIds] = useState([]);
  const [mainUser, setMainUser] = useState();
  //Get all sender ids
  useEffect(() => {
    const getSenderIds = async () => {
      const {
        data:user
      } = JSON.parse(localStorage.getItem("user"));
      setMainUser(user);
      const response = await textrailGetSenderIDs(user._id);
      console.log(response);
      // setSenderIds(response.data)
    };
    getSenderIds();
  }, []);
  return (
    <div className="dashboardPage">
      <h1>Sender IDs</h1>
      <Card>
        <AddSenderID user={mainUser} />
        <SenderIDList list={senderIds} />
      </Card>
    </div>
  );
};

export default SenderIDs;
