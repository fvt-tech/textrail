import React from "react";
import DashboardCard from "../../../../../../components/DashboardCard";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const Reports = () => {
  return (
    <div className="dashboardPage">
      <h2>Reports</h2>
      <DashboardCard>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Dashboard" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="SMS Batch List" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="SMS General Report" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="SMS Comparison Report" key="4">
            Content of Tab Pane 4
          </TabPane>
          <TabPane tab="SMS Campaign Report" key="5">
            Content of Tab Pane 5
          </TabPane>
          <TabPane tab="SMS Credit History" key="6">
            Content of Tab Pane 6
          </TabPane>
        </Tabs>
      </DashboardCard>
    </div>
  );
};

export default Reports;
