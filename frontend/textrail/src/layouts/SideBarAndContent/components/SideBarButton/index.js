import React from "react";
import "./styles.scss";
const SideBarButton = ({ icon, label }) => {
  return (
    <button className="sideBarButton">
      {icon}
      <span className="label">{label}</span>
    </button>
  );
};

export default SideBarButton;
