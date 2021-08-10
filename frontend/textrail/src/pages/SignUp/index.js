import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import SignUpForm from "./components/SignUpForm";
import "./styles.scss";
const DashboardSignUp = () => {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};

export default DashboardSignUp;
