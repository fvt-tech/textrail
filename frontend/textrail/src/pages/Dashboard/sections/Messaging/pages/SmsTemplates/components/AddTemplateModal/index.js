import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import { textrailAddTemplate } from "../../../../../../../../functions/templates";
const AddTemplateModal = ({ visible, onClose }) => {
  const [template, setTemplate] = useState({
    name: "",
    message: "",
  });
  //Handler for form field changes
  const handleChange = (e, fieldname) =>
    setTemplate({ ...template, [fieldname]: e.target.value });
  //Handler for adding templates
  const handleAddTemplate = async () => {
    const { data: user } = JSON.parse(localStorage.getItem("user"));
    await textrailAddTemplate({ ...template, user: user._id });
  };
  return (
    <Modal
      style={{ borderRadius: "10px" }}
      title="Message Template"
      visible={visible}
      footer=""
      onCancel={onClose}
    >
      <Form layout="vertical" onFinish={handleAddTemplate}>
        <Form.Item label="Reference Name">
          <Input
            placeholder="Enter template name"
            value={template.name}
            onChange={(e) => handleChange(e, "name")}
          />
        </Form.Item>
        <Form.Item label="SMS Template">
          <Input.TextArea
            placeholder="Enter template message"
            value={template.message}
            onChange={(e) => handleChange(e, "message")}
          />
        </Form.Item>
        <Form.Item style={{ textAlign: "right" }}>
          <Button className="myPrimaryButton" htmlType="submit">
            Add Template
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddTemplateModal;
