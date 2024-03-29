import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import LoginForm from "./components/LoginForm";
import "./styles.scss";
const DashboardLogin = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default DashboardLogin;
