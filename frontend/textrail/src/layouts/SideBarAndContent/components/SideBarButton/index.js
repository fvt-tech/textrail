import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./styles.scss";
const SideBarButton = ({ icon, label, link }) => {
  const history = useHistory();
  const {pathname}=useLocation()
  const classs=pathname.includes(link)?"active":"";
  const handleRoute = () => history.replace(link);
  return (
    <button onClick={handleRoute} className={`sideBarButton ${classs}`}>
      {icon}
      <span className="label">{label}</span>
    </button>
  );
};

export default SideBarButton;
