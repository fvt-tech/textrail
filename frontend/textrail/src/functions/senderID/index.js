import axios from "axios";
import { API_BASE_URL } from "../../constants";

//Get all SenderIDs
export const textrailGetSenderIDs = async (user) => {
  const response = await axios.post(
    `${API_BASE_URL}getSenderIds`,
    { user },
    {
      withCredentials: true,
    }
  );
  return response.data;
};
//Add a SenderID
export const textrailAddSenderID = async (senderId, user) => {
  const response = await axios.post(
    `${API_BASE_URL}addSenderID`,
    { senderId, user },
    {
      withCredentials: true,
    }
  );
  return response.data;
};
//Edit a SenderID
export const textrailEditSenderID = async () => {};
//Delete a SenderID
export const textrailDeleteSenderID = async (id) => {
  const response = await axios.delete(
    `${API_BASE_URL}delSenderId`,
    { id },
    {
      withCredentials: true,
    }
  );
  return response.message;
};
