import axios from "axios";
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
export const textrailAddContact = async () => {};
//Edit a contact
export const textrailEditContact = async () => {};
//Delete a contact
export const textrailDeleteContact = async () => {};
