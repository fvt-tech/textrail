import React from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import SideBarSection from "./components/SideBarSection";
import { sampleSideBarSections } from "../../utils";

const { Content, Sider } = Layout;
const SideBarAndContentLayout = ({children}) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        style={{ backgroundColor: "white", borderRight: "1px solid gainsboro" }}
        breakpoint="lg"
        collapsedWidth="0"
      >
        {sampleSideBarSections.map((section) => (
          <SideBarSection key={section.title} {...section} />
        ))}
      </Sider>
      <Layout style={{backgroundColor:'white' }}>
        <Content style={{ margin: "24px 16px 24px"}}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideBarAndContentLayout;
