import axios from "axios";
const API_AUTH_BASE_URL = "http://localhost:8000/auth";

//Textrail Login
export const textrailLogin = async (user) => {
  const data = JSON.stringify(user);
  const result = await axios.post(`${API_AUTH_BASE_URL}/login`, data);
  return result;
};
// Textrail SignUp
export const textrailSignup = async (user) => {
  const data = JSON.stringify(user);
  const result = await axios.post(`${API_AUTH_BASE_URL}/signup`, data);
  return result;
};
// Textrail Logout
export const textrailLogout = async () => {
  await axios.get(`${API_AUTH_BASE_URL}/logout`);
};
