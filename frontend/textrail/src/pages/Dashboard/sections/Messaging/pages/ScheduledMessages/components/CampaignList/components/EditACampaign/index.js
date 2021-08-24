import React, { useState } from "react";
import { Modal, Form, Input, Button, Select } from "antd";
import { textrailEditCampaign } from "../../../../../../../../../../functions/campaigns";

const { Option } = Select;
const EditCampaign = ({ campaign, visible, onChange }) => {
  const { name, date, frequency } = campaign;
  const [update, setUpdate] = useState({
    name: name,
    date: date,
    frequency: frequency,
  });
  const handleChange = (value, fieldName) => {
    setUpdate({ ...campaign, [fieldName]: value });
  };
  const handleAddCampaign = async () => {
    console.log(campaign);
    await textrailEditCampaign(campaign._id, update);
   
  };
  return (
    <Modal
      footer=""
      title="Edit Campaign"
      visible={visible}
      onCancel={onChange}
    >
      <Form layout="vertical" onFinish={handleAddCampaign}>
        <Form.Item label="Campaign Name">
          <Input
            size="large"
            onChange={(e) => handleChange(e.target.value, "name")}
            value={update.name}
            placeholder="Enter name of the campaign"
          />
        </Form.Item>
        <Form.Item label="Campaign Date">
          <Input
            type="date"
            value={update.date}
            onChange={(e) => handleChange(e.target.value, "date")}
          />
        </Form.Item>
        <Form.Item label="Campaign Frequency">
          <Select
            style={{ width: "100%" }}
            defaultValue={update.frequency}
            placeholder="Select a frequency"
            onChange={(value) => handleChange(value, "frequency")}
          >
            <Option value={1}>Daily</Option>
            <Option value={2}>Weekly</Option>
            <Option value={3}>Monthly</Option>
          </Select>
        </Form.Item>
        <Form.Item style={{ textAlign: "right" }}>
          <Button className="myPrimaryButton" htmlType="submit" type="primary">
            Edit Campaign
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditCampaign;
