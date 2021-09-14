import { Checkbox, Col, Form, Input, message, Row, Select, Button } from "antd";
import React, { useState, useEffect } from "react";
import { SendOutlined } from "@ant-design/icons";
import uniqid from "uniqid";
import { textrailAddCampaign } from "../../../../../../../../functions/campaigns";
const { Option } = Select;
const SingleSMSForm = ({ onChange, reset, user, senders }) => {
  const [recurring, setRecurring] = useState(false);
  //State for the general campaign
  const [campaignInfo, setCampaignInfo] = useState({
    name: uniqid("campaign-"),
    startDate: "",
    closeDate: "",
    user: "",
    frequency: "",
  });

  //Setting the user in campaignInfo side effect
  useEffect(() => {
    if (user) {
      setCampaignInfo({ ...campaignInfo, user: user._id });
    }
  }, [user]);
  //Main Message state
  const [sms, setSms] = useState({
    contacts: "",
    senderID: "",
    message: "",
  });

  //Reseting the sender ID and Message in the preview box
  useEffect(() => {
    if (sms.message.length === 0) {
      reset();
    }
  }, [sms.message]);

  //Logging full campaign info side effect
  useEffect(() => {
    console.log(campaignInfo, "sms", sms);
  }, [campaignInfo, sms]);

  //Handling changes for the main message state object
  const handleChange = (value, fieldname) => {
    if (fieldname === "message" || fieldname === "senderID") {
      onChange(value, fieldname);
    }
    setSms({ ...sms, [fieldname]: value });
  };

  //Handler for creating a campaign
  const handleSendMessage = async () => {
    let campaign = {
      message: sms,
      ...campaignInfo,
    };
    await textrailAddCampaign(campaign);
  };

  return (
    <Form layout="vertical" onFinish={handleSendMessage}>
      <Row>
        <Col sm={24} md={12}>
          <Form.Item label="Phone Number">
            <Input
              type="tel"
              value={sms.contacts}
              style={{ width: "90%" }}
              onChange={(e) => handleChange(e.target.value, "contacts")}
              required
            />
          </Form.Item>
        </Col>
        <Col sm={24} md={12}>
          <Form.Item label="Sender ID">
            <Select
              style={{ width: "90%" }}
              placeholder="Select a sender"
              onChange={(value) => handleChange(value, "senderID")}
            >
              {senders.map((sender, index) => (
                <Option key={index} value={sender.name}>
                  {sender.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="Message">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Select
            style={{ width: "min(800px,100%)", marginBottom: "1rem" }}
            placeholder="Select a saved message"
          ></Select>
          <Input.TextArea
            type="text"
            style={{ width: "min(800px,100%)" }}
            value={sms.message}
            onChange={(e) => handleChange(e.target.value, "message")}
          />
        </div>
      </Form.Item>
      <Form.Item label="Start Date" style={{ width: "min(400px,100%)" }}>
        <Input
          type="datetime-local"
          value={campaignInfo.startDate}
          onChange={(e) =>
            setCampaignInfo({
              ...campaignInfo,
              startDate: e.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <Checkbox onChange={(e) => setRecurring(e.target.checked)}>
          Recurring
        </Checkbox>
      </Form.Item>
      {recurring && (
        <Row>
          <Col sm={24} md={12}>
            <Form.Item label="Frequency" style={{ width: "90%" }}>
              <Select
                placeholder="Select the frequency"
                onChange={(value) =>
                  setCampaignInfo({ ...campaignInfo, frequency: value })
                }
              >
                <Option value="daily">Daily</Option>
                <Option value="monthly">Monthly</Option>
                <Option value="yearly">Yearly</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col sm={24} md={12}>
            <Form.Item label="End Date" style={{ width: "90%" }}>
              <Input
                type="datetime-local"
                value={campaignInfo.closeDate}
                onChange={(e) =>
                  setCampaignInfo({
                    ...campaignInfo,
                    closeDate: e.target.value,
                  })
                }
              />
            </Form.Item>
          </Col>
        </Row>
      )}
      <Form.Item style={{ textAlign: "right" }}>
        <Button type="primary" icon={<SendOutlined />} htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SingleSMSForm;
