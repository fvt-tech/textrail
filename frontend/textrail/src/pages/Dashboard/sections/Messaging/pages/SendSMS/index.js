import React from "react";
import DashboardCard from "../../../../../../components/DashboardCard";
import { Row, Tabs, Col } from "antd";
import SingleSMSForm from "./components/SingleSMSForm";
import BulkSMSForm from "./components/BulkSMSForm";
import PreviewBox from "./components/PreviewBox";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const SendSMS = () => {
  return (
    <div className="dashboardPage">
      <h1>Send SMS</h1>
      <Row>
        <Col md={16}>
          <DashboardCard>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Single SMS" key="1">
                <SingleSMSForm />
              </TabPane>
              <TabPane tab="Bulk SMS" key="2">
                <BulkSMSForm />
              </TabPane>
            </Tabs>
          </DashboardCard>
        </Col>
        <Col md={8}>
          <div style={{ width: "100%", display:'flex',justifyContent:'center',alignItems:'center' }}>
            <PreviewBox />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SendSMS;
