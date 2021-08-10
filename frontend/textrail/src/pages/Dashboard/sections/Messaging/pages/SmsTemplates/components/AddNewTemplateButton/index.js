import React from "react";
import "./styles.scss";
import { PlusCircleOutlined } from "@ant-design/icons";
const AddNewTemplateButton = ({ onClick }) => {
  return (
    <button className="addNewTemplateButton" onClick={onClick}>
      <PlusCircleOutlined />
      <span className="label">New</span>
    </button>
  );
};

export default AddNewTemplateButton;
