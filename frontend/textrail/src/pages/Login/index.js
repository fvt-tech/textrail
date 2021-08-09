import React from "react";
import LoginCard from "./components/LoginCard";
import LoginForm from "./components/LoginForm";
import "./styles.scss";
const DashboardLogin = () => {
  return (
    <div className="dashboardLoginPage">
      <LoginCard>
          <LoginForm/>
      </LoginCard>
    </div>
  );
};

export default DashboardLogin;
