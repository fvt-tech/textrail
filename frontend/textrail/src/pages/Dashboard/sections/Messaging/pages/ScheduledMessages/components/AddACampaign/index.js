import React, { useState } from "react";
import { Button, Form, Input, Modal, DatePicker, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { textrailAddCampaign } from "../../../../../../../../functions/campaigns";
const { Option } = Select;

//The button and modal for adding an campaign
const AddACampaign = ({ user }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ margin: "0px 6px" }}>
      <Button className="myPrimaryButton" onClick={() => setVisible(true)}>
        <PlusCircleOutlined />
        Add A Campaign
      </Button>
      <Modal
        onCancel={() => setVisible(false)}
        title="Create a New Campaign"
        visible={visible}
        footer=""
      >
        <AddCampaignForm user={user} />
      </Modal>
    </div>
  );
};

export default AddACampaign;
// The form for creating a new Campaign
const AddCampaignForm = ({ user }) => {
  const [campaign, setCampaign] = useState({
    name: "",
    date: new Date(),
    user: user,
    frequency: 1,
  });
  //Handle change  for fields
  const handleChange = (value, fieldName) => {
    setCampaign({ ...campaign, [fieldName]: value });
  };

  //Handling Adding a new Campaign
  const handleAddCampaign = async () => {
    console.log(campaign);
    const response = await textrailAddCampaign(campaign);
    console.log(response);
  };
  return (
    <Form layout="vertical" onFinish={handleAddCampaign}>
      <Form.Item label="Campaign Name">
        <Input
          size="large"
          onChange={(e) => handleChange(e.target.value, "name")}
          value={campaign.name}
          placeholder="Enter name of the campaign"
        />
      </Form.Item>
      <Form.Item label="Campaign Date">
        <Input
          type="date"
          onChange={(e) => handleChange(e.target.value, "date")}
        />
      </Form.Item>
      <Form.Item label="Campaign Frequency">
        <Select
          style={{ width: "100%" }}
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
          Create Campaign
        </Button>
      </Form.Item>
    </Form>
  );
};
