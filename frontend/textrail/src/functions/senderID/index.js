import axios from "axios";
import { message } from "antd";
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
export const textrailEditSenderID = async (id,update) => {
  await axios
  .post(
    `${API_BASE_URL}editSenderId`,
    { id, update },
    {
      withCredentials: true,
    }
  )
  .then((response) => {
    message.success("Campaign Edited Successfully");
    setInterval(() => {
      window.location.reload();
    }, 2000);
  })
  .catch((error) => message.error(error.message));
};
//Delete a SenderID
export const textrailDeleteSenderID = async (id) => {
  await axios({
    method: "delete",
    url: `${API_BASE_URL}delSenderId`,
    data: { id: id },
  })
    .then((response) => {
      message.success("Deleting Sender ID");
      setInterval(() => {
        window.location.reload();
      }, 2000);
    })
    .catch((error) => message.error(error.message));
};
