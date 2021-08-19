import axios from "axios";
import { message } from "antd";
import { API_AUTH_URL } from "../../constants";

//Textrail Login
export const textrailLogin = async (user) => {
  await axios
    .post(`${API_AUTH_URL}/login`, user, {
      withCredentials: true,
    })
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data));
      message.success("Logging In");
      setInterval(() => {
        window.location.href = "/dashboard/home";
      }, 2000);
    })
    .catch((error) => message.error(error.message));
};
// Textrail SignUp
export const textrailSignup = async (user) => {
  await axios
    .post(`${API_AUTH_URL}/signup`, user, {
      withCredentials: true,
    })
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data));
      message.success("Signing Up");
      setInterval(() => {
        window.location.href = "/dashboard/home";
      }, 2000);
    })
    .catch((error) => message.error(error.message));
};
// Textrail Logout
export const textrailLogout = async () => {
  await axios.get(`${API_AUTH_URL}/logout`, { withCredentials: true });
};
