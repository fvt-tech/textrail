import React, { useState, useEffect } from "react";
import { Empty } from "antd";
import DashboardCard from "../../../../../../components/DashboardCard";
import AddNewTemplateButton from "./components/AddNewTemplateButton";
import AddTemplateModal from "./components/AddTemplateModal";
import TemplateList from "./components/TemplateList";
import { textrailGetTemplates } from "../../../../../../functions/templates";
const SmsTemplates = () => {
  const [templates, setTemplates] = useState([]);
  //Fetching all the templates from the database
  useEffect(() => {
    const getTemplates = async () => {
      const { data: user } = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      const response = await textrailGetTemplates(user._id);
      console.log(response.data);
      setTemplates(response.data);
    };
    getTemplates();
  }, []);
  return (
    <div className="dashboardPage">
      <h1>SMS Templates</h1>
      <DashboardCard actions={<SmsTemplateAction />}>
        <TemplateList list={templates} />
      </DashboardCard>
    </div>
  );
};
export default SmsTemplates;

const SmsTemplateAction = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <AddNewTemplateButton onClick={() => setVisible(true)} />
      <AddTemplateModal visible={visible} onClose={() => setVisible(false)} />
    </>
  );
};
