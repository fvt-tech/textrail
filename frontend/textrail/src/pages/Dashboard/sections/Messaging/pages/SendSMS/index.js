import React, { useState } from "react";
import DashboardCard from "../../../../../../components/DashboardCard";
import { Row, Tabs, Col, Card } from "antd";
import SingleSMSForm from "./components/SingleSMSForm";
import BulkSMSForm from "./components/BulkSMSForm";
import PreviewBox from "./components/PreviewBox";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const SendSMS = () => {
  const [sms, setSms] = useState({
    sender: "Sender ID",
    message: "Your Message",
  });


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
      <Row>
        <Col md={16}>
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
                <BulkSMSForm reset={resetToDefault} onChange={handleChange} />
              </TabPane>
            </Tabs>
          </Card>
        </Col>
        <Col md={8}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PreviewBox message={sms.message} sender={sms.sender} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SendSMS;
