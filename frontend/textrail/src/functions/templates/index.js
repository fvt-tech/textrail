import axios from "axios";
import { message } from "antd";
import { API_BASE_URL } from "../../constants";

//Get all Templates
export const textrailGetTemplates = async (user) => {
  console.log(user);
  const response = await axios.post(
    `${API_BASE_URL}getTemplates`,
    { user },
    {
      withCredentials: true,
    }
  );
  return response.data;
};
//Get a Template
export const textrailGetTemplate = async (id) => {
  const response = await axios.post(
    `${API_BASE_URL}getTemplate`,
    { id },
    {
      withCredentials: true,
    }
  );
  console.log(response.data);
  return response;
};
//Add a Template
export const textrailAddTemplate = async (template) => {
  await axios
    .post(`${API_BASE_URL}addTemplate`, template, {
      withCredentials: true,
    })
    .then((response) => {
      message.success("Template Created Successfully");
      setInterval(() => {
        window.location.reload();
      }, 2000);
    })
    .catch((error) => message.error(error.message));
};
//Edit a Template
export const textrailEditTemplate = async (id, message) => {
  const response = await axios.post(
    `${API_BASE_URL}editCampaign`,
    { id, message },
    {
      withCredentials: true,
    }
  );
  console.log(response.data);
  return response;
};
//Delete a Template
export const textrailDeleteTemplate = async (id) => {
  const response = await axios.post(
    `${API_BASE_URL}delTemplate`,
    { id },
    {
      withCredentials: true,
    }
  );
  console.log(response.data);
};
