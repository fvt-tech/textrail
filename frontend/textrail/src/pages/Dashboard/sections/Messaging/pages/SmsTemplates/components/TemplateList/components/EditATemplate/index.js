import React,{useState} from "react";
import {Modal,Form,Input,Button} from "antd"
import { textrailEditTemplate } from "../../../../../../../../../../functions/templates";
const EditTemplate = ({visible,template,onChange}) => {
    const {message}=template;
    const [update, setUpdate] = useState({
        message: message,
      });
      //Handler for form field changes
      const handleChange = (e, fieldname) =>
        setUpdate({ ...template, [fieldname]: e.target.value });
      //Handler for editinging templates
      const handleEditTemplate = async () => {
          const body={
              id:template._id,
              message:update.message
          }
        await textrailEditTemplate(body);
      };
  return (
    <Modal
      style={{ borderRadius: "10px" }}
      title="Message Template"
      visible={visible}
      footer=""
      onCancel={onChange}
    >
      <Form layout="vertical" onFinish={handleEditTemplate}>
        <Form.Item label="Reference Name">
          <Input
            placeholder="Enter template name"
            value={template.name}
            readOnly
            disabled
            onChange={(e) => handleChange(e, "name")}
          />
        </Form.Item>
        <Form.Item label="SMS Template">
          <Input.TextArea
            placeholder="Enter template message"
            value={update.message}
            onChange={(e) => handleChange(e, "message")}
          />
        </Form.Item>
        <Form.Item style={{ textAlign: "right" }}>
          <Button className="myPrimaryButton" htmlType="submit">
            Edit Template
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditTemplate;
