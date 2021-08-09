import React from "react";
import "./styles.scss";
const ActionButton = ({ logo, onClick, color }) => {
  return (
    <div
      className="actionButton"
      style={{ color: color, backgroundColor: color + "30" }}
    >
      {logo}
    </div>
  );
};

export default ActionButton;