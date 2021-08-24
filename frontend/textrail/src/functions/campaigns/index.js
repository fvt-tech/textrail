import axios from "axios";
import { message } from "antd";
import { API_BASE_URL } from "../../constants";

//Get all Campaigns
export const textrailGetCampaigns = async (user) => {
  console.log(user);
  const response = await axios.post(
    `${API_BASE_URL}getCampaigns`,
    { user },
    {
      withCredentials: true,
    }
  );
  return response.data;
};
//Get a Campaign
export const textrailGetCampaign = async (id) => {
  const response = await axios.post(
    `${API_BASE_URL}getCampaign`,
    { id },
    {
      withCredentials: true,
    }
  );
  return response.data;
};
//Add a Campaign
export const textrailAddCampaign = async (campaign) => {
  const { name, date, user, frequency } = campaign;
  await axios
    .post(
      `${API_BASE_URL}addCampaign`,
      { name, date, user, frequency },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      message.success("Campaign Created Successfully");
      setInterval(() => {
        window.location.reload();
      }, 2000);
    })
    .catch((error) => message.error(error.message));
};
//Edit a Campaign
export const textrailEditCampaign = async (id, update) => {
  await axios
    .post(
      `${API_BASE_URL}editCampaign`,
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
//Delete a Campaign
export const textrailDeleteCampaign = async (id) => {
  await axios
    .delete(
      `${API_BASE_URL}delCampaign`,
      { id },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      message.success("Deleting Campaign");
      setInterval(() => {
        window.location.reload();
      }, 2000);
    })
    .catch((error) => message.error(error.message));
};
