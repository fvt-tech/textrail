import React from "react";
import "./styles.scss";
const DashboardCard = ({ children, title }) => {
  return (
    <div className="dashboardCard">
      {title && (
        <div className="cardTitle">
          <span>{title}</span>
        </div>
      )}
      {children}
    </div>
  );
};

export default DashboardCard;
