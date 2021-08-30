import React, { useState, useEffect } from "react";
import DashboardCard from "../../../../../../components/DashboardCard";
import { Row, Tabs, Col, Card } from "antd";
import SingleSMSForm from "./components/SingleSMSForm";
import BulkSMSForm from "./components/BulkSMSForm";
import PreviewBox from "./components/PreviewBox";
import { textrailGetGroups } from "../../../../../../functions/groups";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const SendSMS = () => {
  const [sms, setSms] = useState({
    sender: "Sender ID",
    message: "Your Message ",
  });
  const [groups, setGroups] = useState([]);
  const [groupContacts, setGroupContacts] = useState([]);
  //Fetching all the groups from the database
  useEffect(() => {
    const getGroups = async () => {
      const { data: user } = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      const response = await textrailGetGroups(user._id);
      console.log(response.data);
      setGroups(response.data);
    };
    getGroups();
  }, []);

  const resetToDefault = () => {
    setSms({
      sender: "Sender ID",
      message: "Your Message",
    });
  };
  const handleChange = (e, fieldname) => {
    setSms({ ...sms, [fieldname]: e.target.value });
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
            <SingleSMSForm reset={resetToDefault} onChange={handleChange} />
          </TabPane>
          <TabPane tab="Bulk SMS" key="2">
            <BulkSMSForm
              groups={groups}
              reset={resetToDefault}
              onChange={handleChange}
            />
          </TabPane>
        </Tabs>
      </Card>
        <PreviewBox message={sms.message} sender={sms.sender} />
    </div>
  );
};

export default SendSMS;
