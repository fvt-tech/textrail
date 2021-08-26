import React from "react";
import DashboardCard from "../../../../../../components/DashboardCard";
import { Tabs,Card, List } from "antd";
import DemoColumn from "../../../MainDashboard/components/DemoColumn";
import DemoPie from '../../../MainDashboard/components/DemoPie'
import DemoLine from "../../../MainDashboard/components/DemoLine";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const Reports = () => {
  return (
    <div className="dashboardPage">
      <h2>Reports</h2>
      <Card>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Dashboard" key="1">
            <DemoColumn/>
          </TabPane>
          <TabPane tab="SMS Batch List" key="2">
            <List/>
          </TabPane>
          <TabPane tab="SMS General Report" key="3">
           <DemoPie/>
          </TabPane>
          <TabPane tab="SMS Comparison Report" key="4">
            <DemoColumn/>
          </TabPane>
          <TabPane tab="SMS Campaign Report" key="5">
            <DemoLine/>
          </TabPane>
          <TabPane tab="SMS Credit History" key="6">
            <List/>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default Reports;
