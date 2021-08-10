import { Button } from "antd";
import AuthCard from "./components/AuthCard";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./styles.scss";
const AuthLayout = ({ children }) => {
  const { path } = useRouteMatch();
  const history = useHistory();
  console.log(path);
  const handleChangePath = () =>
    path === "/signup" ? history.replace("/login") : history.replace("/signup");
  return (
    <div className="authLayout">
      <AuthCard>{children}</AuthCard>
      <Button type="link" onClick={handleChangePath}>
        {path === "/signup"
          ? "Have An Account? Login"
          : "Do not have An Account? Sign Up"}
      </Button>
    </div>
  );
};

export default AuthLayout;
