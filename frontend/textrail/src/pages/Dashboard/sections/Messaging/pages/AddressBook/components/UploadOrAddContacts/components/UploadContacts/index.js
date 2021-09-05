import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import xlsxParser from "xlsx-parse-json";
import { textrailAddContactsToGroup } from "../../../../../../../../../../functions/groups";

//This is the file upload form
const UploadContacts = ({ group, user }) => {
  const [file, setFile] = useState({});
  const [contact, setContact] = useState([]);

  //Converting the file to an array of contacts
  const handleContacts = (file) => {
    console.log(file);
    xlsxParser.onFileSelection(file).then((data) => {
      var parsedData = data;
      const newContacts = [];
      parsedData.Sheet1.map((item) => {
        let newArray = Object.values(item);
        console.log(newArray);
        let newObj = { name: newArray[0], number: newArray[1], user };
        newContacts.push(newObj);
      });
      setContact(newContacts);
    });
  };

  // Handling the contacts upload into the group
  const handleAddContactToGroup = async () => {
    if (contact.length > 0) {
      await textrailAddContactsToGroup(group, contact);
    } else {
      message.error("Please Choose A File");
    }
  };

  return (
    <Form layout="vertical" onFinish={handleAddContactToGroup}>
      <Form.Item
        label={
          <>
            <span>Expected Columns:</span>
            <span className="fieldsHint">Name, Number(with country code)</span>
          </>
        }
      >
        <Input
          type="file"
          accept=".xlsx,.xls"
          onChange={(e) => handleContacts(e.target.files[0])}
        />
        <label className="smallHints">
          Accepted Formats:.csv,.xls,.xlsx,.txt
        </label>
      </Form.Item>
      <Form.Item style={{ textAlign: "right" }}>
        <Button className="myPrimaryButton" htmlType="submit" type="primary">
          Upload Contacts
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UploadContacts;
