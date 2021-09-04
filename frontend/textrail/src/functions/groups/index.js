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
  await axios
    .post(
      `${API_BASE_URL}editGroup`,
      { id, update },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      message.success("Group Edited Successfully");
      setInterval(() => {
        window.location.reload();
      }, 2000);
    })
    .catch((error) => message.error(error.message));
};
//Delete a group
export const textrailDeleteGroup = async (id) => {
  await axios({
    method: "delete",
    url: `${API_BASE_URL}delGroup`,
    data: { id: id },
  })
    .then((response) => {
      message.success("Group Deleted Successfully");
      setInterval(() => {
        window.location.reload();
      }, 2000);
    })
    .catch((error) => message.error(error.message));
};

//Add contacts to a group
export const textrailAddContactsToGroup = async (id, contact, user) => {
  await axios
    .post(
      `${API_BASE_URL}addContactToGroup`,
      { id, contact, user },
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
