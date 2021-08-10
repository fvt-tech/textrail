import React from "react";
import { Layout } from "antd";
import SideBarSection from "./components/SideBarSection";
import { sampleSideBarSections } from "../../utils";
import "./styles.scss";
const { Content, Sider } = Layout;
const SideBarAndContentLayout = ({ children }) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        style={{
          backgroundColor: "white",
          borderRight: "1px solid gainsboro",
        }}
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div style={{overflow:'scroll',height:'100vh',width:'100%'}}>
          <BalanceContainer />
          {sampleSideBarSections.map((section) => (
            <SideBarSection key={section.title} {...section} />
          ))}
        </div>
      </Sider>
      <Layout style={{ backgroundColor: "white",height:"100vh" }}>
        <Content style={{ margin: "24px 16px 0px" ,height:'100%'}}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360,overflow:'scroll',height:'100%'}}
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
      <span>Balance</span>
      <span>{balance}</span>
    </div>
  );
};
