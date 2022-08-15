import React, { useState } from "react";
import { Button, Form, Input, message, Select } from "antd";
import xlsxParser from "xlsx-parse-json";
import { textrailAddContactsToGroup } from "../../../../../../../../../../functions/groups";
const { Option } = Select;

//This is the file upload form
const UploadContacts = ({ group, user }) => {
	const [file, setFile] = useState({});
	const [upData, setUpData] = useState([]);
	const [list, setList] = useState([]);
	const [sheet, setSheet] = useState("");
	const [columns, setColumns] = useState(0);
	const [contact, setContact] = useState([]);
  const [nameCol, setNameCol] = useState();

	//Converting the file to an array of contacts
	const handleContacts = (file) => {
		// console.log(file);
		xlsxParser.onFileSelection(file).then((data) => {
			var parsedData = data;
			setList(Object.keys(data));
			setUpData(parsedData);
		});
	};	

	const handleChange = (value) => {
		setSheet(value);
		if (value) {
			upData[value].map((item) => {
				let newArray = Object.values(item);
				let cols = [];
				for (let i = 0; i < newArray.length; i++) {
					cols.push({
						id: i,
						name: `Column ${i + 1}`,
					});
				}
				setColumns(cols);
			});
		}
	};

  const handleColumnChange = (value) => {
    setNameCol(value);
  }

  const handleNumColumnChange = (value) => {
    const newContacts = [];
			upData[sheet].map((item) => {
				let newArray = Object.values(item);
				console.log(newArray);
				let newObj = { name: newArray[nameCol], number: newArray[value], user };
				newContacts.push(newObj);
			});
			// console.log(newContacts)
			setContact(newContacts);
  }

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
				</label><hr />
				{list.length > 0 && (
					<>
						<label>Select Sheet Number</label>
						<Select
							className="items"
							placeholder="Select Sheet"
							onChange={handleChange}
						>
							{list.map((item) => (
								<Option key={item} value={item}>
									{item}
								</Option>
							))}
						</Select>
					</>
				)}
				<br /> 
				{sheet.length > 0 && (
					<>
						<label>Select Which column for Names</label>
						<Select
							className="items"
							placeholder="Select Sheet"
							onChange={handleColumnChange}
						>
							{columns.map((item) => (
								<Option key={item.id} value={item.id}>
									{item.name}
								</Option>
							))}
						</Select>

            <label>Select Which column for Numbers</label>
						<Select
							className="items"
							placeholder="Select Sheet"
							onChange={handleNumColumnChange}
						>
							{columns.map((item) => (
								<Option key={item.id} value={item.id}>
									{item.name}
								</Option>
							))}
						</Select>
					</>
				)}
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
