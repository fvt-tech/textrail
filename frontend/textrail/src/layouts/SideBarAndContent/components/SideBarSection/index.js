import React from "react";
import SideBarButton from "../SideBarButton";
import "./styles.scss"
const SideBarSection = ({ title = "Title", buttonList = [] }) => {
  return (
    <div className="sidebarSection">
      <span className="sectionHeader">{title}</span>
      <div className="sectionButtons">
        {buttonList.map((item) => (
          <SideBarButton key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SideBarSection;
