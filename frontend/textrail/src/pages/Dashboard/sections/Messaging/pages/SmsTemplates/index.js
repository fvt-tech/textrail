import React, { useState } from "react";
import { Empty } from "antd";
import DashboardCard from "../../../../../../components/DashboardCard";
import AddNewTemplateButton from "./components/AddNewTemplateButton";
import AddTemplateModal from "./components/AddTemplateModal";
const SmsTemplates = () => {
  return (
    <div className="dashboardPage">
      <h1>SMS Templates</h1>
      <DashboardCard actions={<SmsTemplateAction />}>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No templates available"
        />
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
