import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import { textrailEditSenderID } from "../../../../../../../../../../functions/senderID";
const EditSenderID = ({ visible, senderID, onChange }) => {
  const { name } = senderID;
  const [update, setUpdate] = useState({
    name: name,
  });
  //Handler for form field changes
  const handleChange = (e, fieldname) =>
    setUpdate({ ...senderID, [fieldname]: e.target.value });
  //Handler for editinging templates
  const handleEditSenderID = async () => {
    const body = {
      id: senderID._id,
      name: update.name,
    };
    await textrailEditSenderID(senderID._id, update.name);
  };
  return (
    <Modal
      style={{ borderRadius: "10px" }}
      title="Edit SenderID"
      visible={visible}
      footer=""
      onCancel={onChange}
    >
      <Form layout="vertical" onFinish={handleEditSenderID}>
        <Form.Item label="SenderID">
          <Input
            placeholder="Enter senderID"
            value={update.name}
            onChange={(e) => handleChange(e, "name")}
          />
        </Form.Item>
        <Form.Item style={{ textAlign: "right" }}>
          <Button className="myPrimaryButton" htmlType="submit">
            Edit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditSenderID;
