import React from "react";
import { Layout, Menu, Avatar, Progress } from "antd";
import SideBarSection from "./components/SideBarSection";
import { sampleSideBarSections } from "../../utils";
import { UserOutlined } from "@ant-design/icons";
import "./styles.scss";
import { useHistory } from "react-router-dom";
const { Content, Sider, Header } = Layout;
const SideBarAndContentLayout = ({ children }) => {
  const history = useHistory();
  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "flex-end",
          borderBottom: "1px solid gainsboro",
        }}
      >
        <Menu
          style={{ height: "100%", borderBottom: "none" }}
          theme="light"
          mode="horizontal"
        >
          <Menu.Item key="1" onClick={() => history.replace("/dashboard/home")}>
            <BalanceContainer />
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => history.replace("/dashboard/profile")}
          >
            <Avatar icon={<UserOutlined />} />
          </Menu.Item>
        </Menu>
      </Header>
      <Layout style={{ height: "100%" }}>
        <Sider
          style={{
            backgroundColor: "white",
            borderRight: "1px solid gainsboro",
          }}
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div style={{ overflow: "scroll", height: "100%" }}>
            {/* <BalanceContainer /> */}
            {sampleSideBarSections.map((section) => (
              <SideBarSection key={section.title} {...section} />
            ))}
          </div>
        </Sider>
        <Content
          style={{
            padding: "0px 16px 0px",
            height: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
              overflow: "scroll",
              height: "100%",
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideBarAndContentLayout;

const BalanceContainer = ({ balance = "4,507" }) => {
  return (
    <div className="balanceContainer">
      <span>Balance: </span>
      <span>{balance}</span>
    </div>
  );
};
