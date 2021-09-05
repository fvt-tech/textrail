import axios from "axios";
import { message } from "antd";
import { API_BASE_URL } from "../../constants";

//Get all contacts
export const textrailGetContacts = async (user) => {
  console.log(user);
  const response = await axios.post(
    `${API_BASE_URL}getContacts`,
    { user },
    {
      withCredentials: true,
    }
  );
  return response.data;
};
//Get a contact
export const textrailGetContact = async () => {};

//Add a contact
// export const textrailAddContact = async () => {};
export const textrailAddContact = async (contact) => {
  await axios
  .post(`${API_BASE_URL}addContact`, contact, {
    withCredentials: true,
  })
  .then((response) => {
    message.success("Contact Created Successfully");
    setInterval(() => {
      window.location.reload();
    }, 2000);
  })
  .catch((error) => message.error(error.message));
};
//Edit a contact
export const textrailEditContact = async (id, update) => {
  await axios
    .post(
      `${API_BASE_URL}editContact`,
      { id, update },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      message.success("Contact Edited Successfully");
      setInterval(() => {
        window.location.reload();
      }, 2000);
    })
    .catch((error) => message.error(error.message));
};
//Delete a contact
export const textrailDeleteContact = async (id) => {
  await axios({
    method: "delete",
    url: `${API_BASE_URL}delContact`,
    data: { id: id },
  })
    .then((response) => {
      message.success("Contact Deleted Successfully");
      setInterval(() => {
        window.location.reload();
      }, 2000);
    })
    .catch((error) => message.error(error.message));
};
