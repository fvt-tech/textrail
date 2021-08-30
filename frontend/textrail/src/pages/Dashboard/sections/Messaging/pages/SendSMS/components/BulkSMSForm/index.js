import {
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Menu,
  Select,
  Upload,
  Button,
  Dropdown,
  Tag,
} from "antd";
import React, { useState, useEffect } from "react";
import { UsergroupAddOutlined, UploadOutlined } from "@ant-design/icons";
const { Option } = Select;
const BulkSMSForm = ({ onChange, reset, groups }) => {
  //States
  const [sms, setSms] = useState({
    numbers: [],
    sender: "",
    message: "",
    schedule: false,
  });
  const [selectedGroup, setSelectedGroup] = useState("");

  //Const Handle Group Selection
  const handleSelectGroup = (name) => setSelectedGroup(name);

  // Group Dropdown Menu
  const menu = (
    <Menu>
      {groups.map((item) => (
        <Menu.Item key={item.name} onClick={() => handleSelectGroup(item.name)}>
          {item.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  //Reset Side Effect
  useEffect(() => {
    if (sms.message.length === 0) {
      reset();
    }
  }, [sms.message]);

  const handleChange = (e, fieldname) => {
    if (fieldname === "message" || fieldname === "sender") {
      onChange(e, fieldname);
    }
    setSms({ ...sms, [fieldname]: e.target.value });
  };
  return (
    <Form layout="vertical">
      <label style={{ marginBottom: 10, display: "block" }}>
        Import Numbers
      </label>
      <Row>
        <Col style={{ marginRight: "10px" }}>
          <Form.Item>
            <Upload>
              <Button icon={<UploadOutlined />}>Upload File</Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col></Col>
        <Col>
          <Form.Item>
            <Dropdown overlay={menu} trigger={["click"]}>
              <Button icon={<UsergroupAddOutlined />}>Import Group</Button>
            </Dropdown>
          </Form.Item>
        </Col>
      </Row>

      {selectedGroup.length > 0 && (
        <div style={{ marginBottom: "1rem" }}>
          <Tag color="blue" closable onClose={() => setSelectedGroup("")}>
            {selectedGroup}
          </Tag>
        </div>
      )}
      <Form.Item label="Sender ID">
        <Select
          style={{ height: "100%" }}
          placeholder="Select a sender"
        ></Select>
      </Form.Item>
      <Form.Item label="Message">
        <div style={{ display: "flex", height: "auto" }}>
          <Input.TextArea
            type="text"
            value={sms.message}
            onChange={(e) => handleChange(e, "message")}
            style={{ marginRight: "10px" }}
          />
          <Select
            style={{ height: "100%" }}
            placeholder="Select a saved message"
          ></Select>
        </div>
      </Form.Item>
      <Form.Item>
        <Checkbox>Schedule Message</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default BulkSMSForm;
