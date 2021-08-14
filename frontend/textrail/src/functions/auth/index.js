import axios from "axios";
import { API_AUTH_URL } from "../../constants";

//Textrail Login
export const textrailLogin = async (user) => {
  const response = await axios.post(`${API_AUTH_URL}/login`, user,{ withCredentials: true });
  console.log(response.data)
  return response;
};
// Textrail SignUp
export const textrailSignup = async (user) => {
  const response = await axios.post(`${API_AUTH_URL}/signup`, user,{ withCredentials: true });
  return response;
};
// Textrail Logout
export const textrailLogout = async () => {
  await axios.get(`${API_AUTH_URL}/logout`,{ withCredentials: true });
};
