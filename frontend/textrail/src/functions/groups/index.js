import axios from "axios";
import { API_BASE_URL } from "../../constants";

//Get all groups
export const textrailGetGroups = async () => {
  const response = await axios.post(`${API_BASE_URL}getGroups`, null, {
    withCredentials: true,
  });
  console.log(response.data);
};
//Get a group
export const textrailGetGroup = async () => {
  const response = await axios.post(`${API_BASE_URL}getGroup`, null, {
    withCredentials: true,
  });
  console.log(response.data);
};
//Add a group
export const textrailAddGroup = async () => {
  const response = await axios.post(`${API_BASE_URL}getGroups`, null, {
    withCredentials: true,
  });
  console.log(response.data);
};
//Edit a group
export const textrailEditGroup = async () => {
  const response = await axios.post(`${API_BASE_URL}getGroups`, null, {
    withCredentials: true,
  });
  console.log(response.data);
};
//Delete a group
export const textrailDeleteGroup = async () => {
  const response = await axios.post(`${API_BASE_URL}delete`, null, {
    withCredentials: true,
  });
  console.log(response.data);
};
