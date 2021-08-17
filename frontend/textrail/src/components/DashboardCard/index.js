import React from "react";
import "./styles.scss";
const DashboardCard = ({ children, title, actions }) => {
  return (
    <div className="dashboardCard">
      {title ||
        (actions && (
          <div className="cardTitle">
            {title && <span>{title}</span>}
            {actions && <div>{actions}</div>}
          </div>
        ))}
      {children}
    </div>
  );
};

export default DashboardCard;
