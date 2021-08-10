import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import LoginForm from "./components/SignUpForm";
import "./styles.scss";
const DashboardSignUp = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default DashboardSignUp;
