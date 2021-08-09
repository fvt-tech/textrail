import React from "react";
import "./styles.scss";
const SideBarButton = ({ icon, label, link }) => {
  const handleRoute = () => (window.location.href = link);
  return (
    <button onClick={handleRoute} className="sideBarButton">
      {icon}
      <span className="label">{label}</span>
    </button>
  );
};

export default SideBarButton;
