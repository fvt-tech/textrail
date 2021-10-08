import React, { useState, useEffect } from "react";
import DashboardCard from "../../../../../../components/DashboardCard";
import { Row, Tabs, Col, Card } from "antd";
import SingleSMSForm from "./components/SingleSMSForm";
import BulkSMSForm from "./components/BulkSMSForm";
import PreviewBox from "./components/PreviewBox";
import { textrailGetGroups } from "../../../../../../functions/groups";
import { textrailGetSenderIDs } from "../../../../../../functions/senderID";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const SendSMS = () => {
  const [mainUser, setMainUser] = useState();
  const [senderIds, setSenderIds] = useState([]);
  const [sms, setSms] = useState({
    senderID: "Sender ID",
    message: "Your Message ",
  });
  const [groups, setGroups] = useState([]);
  const [groupContacts, setGroupContacts] = useState([]);

  //fetching all sender ids from the database
  //Get all sender ids
  useEffect(() => {
    const getSenderIds = async () => {
      const { data: user } = JSON.parse(localStorage.getItem("user"));
      const response = await textrailGetSenderIDs(user._id);
      console.log(response);
      let filteredData = response.data.filter((item) => item != null);
      setSenderIds(filteredData);
    };
    getSenderIds();
  }, []);

  //Fetching all the groups from the database
  useEffect(() => {
    const getGroups = async () => {
      const { data: user } = JSON.parse(localStorage.getItem("user"));
      setMainUser(user);
      console.log(user);
      const response = await textrailGetGroups(user._id);
      console.log(response.data);
      setGroups(response.data);
    };
    getGroups();
  }, []);

  const resetToDefault = () => {
    setSms({
      senderID: "Sender ID",
      message: "Your Message",
    });
  };
  const handleChange = (value, fieldname) => {
    setSms({ ...sms, [fieldname]: value });
  };
  return (
    <div className="dashboardPage">
      <h1>Send SMS</h1>
      <Card>
        <Tabs
          defaultActiveKey="1"
          onChange={callback}
          onTabClick={resetToDefault}
        >
          <TabPane tab="Single SMS" key="1">
            <SingleSMSForm
              user={mainUser}
              reset={resetToDefault}
              onChange={handleChange}
              senders={senderIds}
            />
          </TabPane>
          <TabPane tab="Bulk SMS" key="2">
            <BulkSMSForm
              user={mainUser}
              groups={groups}
              reset={resetToDefault}
              onChange={handleChange}
              senders={senderIds}
            />
          </TabPane>
        </Tabs>
      </Card>
      <PreviewBox message={sms.message} sender={sms.senderID} />
    </div>
  );
};

export default SendSMS;
