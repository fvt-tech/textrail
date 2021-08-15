import axios from "axios";
import { API_BASE_URL } from "../../constants";

//Get all groups
export const textrailGetGroups = async (user) => {
  const response = await axios.post(`${API_BASE_URL}getGroups`, {user}, {
    withCredentials: true,
  });
  return response.data;
};
//Get a group
export const textrailGetGroup = async (user,id) => {
  const response = await axios.post(`${API_BASE_URL}getGroup`, {user,id}, {
    withCredentials: true,
  });
  console.log(response.data);
  return response;
};
//Add a group
export const textrailAddGroup = async (group) => {
  const response = await axios.post(`${API_BASE_URL}addGroup`, group, {
    withCredentials: true,
  });
  console.log(response.data);
  return response;
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

//Add contacts to a group
export const textrailAddContactsToGroup=()=>{

}