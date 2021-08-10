import AuthCard from "./components/AuthCard";
import "./styles.scss";
const AuthLayout = ({children}) => {
  return (
    <div className="authLayout">
      <AuthCard>
          {children}
      </AuthCard>
    </div>
  );
};

export default AuthLayout;