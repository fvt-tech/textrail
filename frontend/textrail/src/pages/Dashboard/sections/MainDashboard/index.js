import React from "react";
import "./styles.scss";
import DemoColumn from "./components/DemoColumn";
import DemoPie from "./components/DemoPie";
import { Statistic, Card, Row, Col, Button, List } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import DashboardCard from "../../../../components/DashboardCard";
const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      <h1>Dashboard</h1>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Balance ($)"
              value={4507}
              valueStyle={{ color: "#3f8600" }}
              precision={2}
            />
            <Button style={{ marginTop: 16 }} type="primary">
              Recharge
            </Button>
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Storage Used"
              value={60.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              suffix="%"
            />
            {/* <Progress percent={80} status="exception" /> */}
            <Button style={{ marginTop: 16 }} type="primary">
              Upgrade
            </Button>
          </Card>
        </Col>
      </Row>
      <Card style={{margin:'1rem 0px'}} title="Summary">
        <DemoColumn />
      </Card>
      <Card  style={{margin:'1rem 0px'}} title="Reports">
        <DemoPie />
      </Card>
      <Card  style={{margin:'1rem 0px'}} title="Activities">
        <List />
      </Card>
    </div>
  );
};
export default DashboardPage;
