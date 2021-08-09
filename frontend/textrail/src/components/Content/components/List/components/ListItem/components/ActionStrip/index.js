import React from "react";
import {
  MailOutlined,
  DeleteOutlined,
  ClockCircleOutlined,
  MoreOutlined
} from "@ant-design/icons";
import ActionButton from "./components/ActionButton";
import "./styles.scss"
const defaultActions = [
  {
    logo: <MailOutlined />,
    onClick: "",
    color: "#d87093",
  },
  {
    logo: <DeleteOutlined />,
    onClick: "",
    color: "#ffd900",
  },
  {
    logo: <ClockCircleOutlined />,
    onClick: "",
    color: "#007599",
  },
];
const ActionStrip = ({ actions = defaultActions }) => {
  return (
    <>
    <div className="actionStrip">
      {actions.map((action, index) => (
        <ActionButton key={index} {...action} />
      ))}
    </div>
    <MoreOutlined className="showMore"/>
    </>
  );
};

export default ActionStrip;
