import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardSignUp from "./pages/SignUp";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" component={DashboardSignUp} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path='/'>
            <Redirect to='login'/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
