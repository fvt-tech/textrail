import axios from "axios";
import { API_BASE_URL } from "../../constants";

//Get all groups
export const textrailGetGroups = async () => {
  const response = await axios.post(`${API_BASE_URL}getGroups`);
  //   const data = await response.data();
  console.log(response.statusText);
};
//Get a group
export const textrailGetGroup = async () => {};
//Add a group
export const textrailAddGroup = async () => {};
//Edit a group
export const textrailEditGroup = async () => {};
//Delete a group
export const textrailDeleteGroup = async () => {};
