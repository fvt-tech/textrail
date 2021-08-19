import axios from "axios";
import { message } from "antd";
import { API_BASE_URL } from "../../constants";

//Get all groups
export const textrailGetGroups = async (user) => {
  console.log(user);
  const response = await axios.post(
    `${API_BASE_URL}getGroups`,
    { user },
    {
      withCredentials: true,
    }
  );
  return response.data;
};
//Get a group
export const textrailGetGroup = async (user, id) => {
  const response = await axios.post(
    `${API_BASE_URL}getGroup`,
    { user, id },
    {
      withCredentials: true,
    }
  );
  console.log(response.data);
  return response;
};
//Add a group
export const textrailAddGroup = async (group) => {
  await axios
    .post(`${API_BASE_URL}addGroup`, group, {
      withCredentials: true,
    })
    .then((response) => {
      message.success("Group Created Successfully");
      setInterval(() => {
        window.location.reload();
      }, 2000);
    })
    .catch((error) => message.error(error.message));
};
//Edit a group
export const textrailEditGroup = async (id, update) => {
  const response = await axios.post(
    `${API_BASE_URL}editCampaign`,
    { id, update },
    {
      withCredentials: true,
    }
  );
  console.log(response.data);
  return response;
};
//Delete a group
export const textrailDeleteGroup = async (id) => {
  const response = await axios.post(
    `${API_BASE_URL}delGroup`,
    { id },
    {
      withCredentials: true,
    }
  );
  console.log(response.data);
};

//Add contacts to a group
export const textrailAddContactsToGroup = async (id, contact) => {
  await axios
    .post(
      `${API_BASE_URL}addContactToGroup`,
      { id, contact },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      message.success("Contacts Added Successfully");
      setInterval(() => {
        window.location.reload();
      }, 2000);
    })
    .catch((error) => message.error(error.message));
};
