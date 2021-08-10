import React from "react";
import { Modal, Form, Input } from "antd";
const AddTemplateModal = ({ visible, onClose }) => {
  const handleCancel = () => onClose();
  const handleOk = () => onClose();

  return (
    <Modal
        style={{borderRadius:'10px'}}
      title="Message Template"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form layout="vertical">
        <Form.Item label="Reference Name">
          <Input />
        </Form.Item>
        <Form.Item label="SMS Template">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddTemplateModal;
