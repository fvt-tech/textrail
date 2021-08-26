import React from "react";
import "./styles.scss";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
const AddNewTemplateButton = ({ onClick }) => {
  return (
    <Button className="myPrimaryButton" onClick={onClick}>
      <PlusCircleOutlined />
      <span className="label">New</span>
    </Button>
  );
};

export default AddNewTemplateButton;
