import logo from "./logo.svg";
import "./App.css";
import { Button, Space, Table, Alert, Spin, Checkbox } from "antd";
import { useState } from "react";

function App() {
  const CustomHeader = ({ text, className }) => (
    <div className={` ${className} checkBox checkBoxHeader`}>
      {text}
    </div>
  );

  const columns = [
    {
      title: <CustomHeader text="Items/Inspection Type" />,
      dataIndex: "name",
      key: "name",
      width: 300,
      render: (_, record) => (
        <div className="checkBox itemName">
          Item Numbers
        </div>
      ),
    },
    {
      title: <CustomHeader text="Name" className="inspectionType" />,
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (_, record, rowIndex) => (
        <div className={`checkBox inspectionType ${rowIndex === 2 ? 'showCheckbox' : ''}`}>
          {rowIndex > 0 ? <Checkbox /> : 250}
        </div>
      )
    },
    {
      title: <CustomHeader text="Name" />,
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (_, record, rowIndex) => (
        <div className={`checkBox ${rowIndex === 2 ? 'showCheckbox' : ''}`}>
          {rowIndex > 0 ? <Checkbox /> : 250}
        </div>
      )
    },
    {
      title: <CustomHeader text="Name" />,
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (_, record, rowIndex) => (
        <div className={`checkBox ${rowIndex === 2 ? 'showCheckbox' : ''}`}>
          {rowIndex > 0 ? <Checkbox /> : 250}
        </div>
      )
    },
    {
      title: <CustomHeader text="Name" />,
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (_, record, rowIndex) => (
        <div className={`checkBox ${rowIndex === 2 ? 'showCheckbox' : ''}`}>
          {rowIndex > 0 ? <Checkbox /> : 250}
        </div>
      )
    },
    {
      title: <CustomHeader text="Name" />,
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (_, record, rowIndex) => (
        <div className={`checkBox ${rowIndex === 2 ? 'showCheckbox' : ''}`}>
          {rowIndex > 0 ? <Checkbox /> : 250}
        </div>
      )
    },
    {
      title: <CustomHeader text="Name" />,
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (_, record, rowIndex) => (
        <div className={`checkBox ${rowIndex === 2 ? 'showCheckbox' : ''}`}>
          {rowIndex > 0 ? <Checkbox /> : 250}
        </div>
      )
    },
    {
      title: <CustomHeader text="Name" />,
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (_, record, rowIndex) => (
        <div className={`checkBox ${rowIndex === 2 ? 'showCheckbox' : ''}`}>
          {rowIndex > 0 ? <Checkbox /> : 250}
        </div>
      )
    },
    {
      title: <CustomHeader text="Name" />,
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (_, record, rowIndex) => (
        <div className={`checkBox ${rowIndex === 2 ? 'showCheckbox' : ''}`}>
          {rowIndex > 0 ? <Checkbox /> : 250}
        </div>
      )
    },
    {
      title: <CustomHeader text="Name" />,
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (_, record, rowIndex) => (
        <div className={`checkBox ${rowIndex === 2 ? 'showCheckbox' : ''}`}>
          {rowIndex > 0 ? <Checkbox /> : 250}
        </div>
      )
    },
    {
      title: <CustomHeader text="Address" />,
      dataIndex: "address",
      key: "address",
      width: 200,
      render: (_, record, rowIndex) => (
        <div className={`checkBox ${rowIndex === 2 ? 'showCheckbox' : ''}`}>
          {rowIndex > 0 ? <Checkbox /> : 250}
        </div>
      )
    },
    {
      title: <CustomHeader text="PhoneNumber" />,
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: 200,
      render: (_, record, rowIndex) => (
        <div className={`checkBox ${rowIndex === 2 ? 'showCheckbox' : ''}`}>
          {rowIndex > 0 ? <Checkbox /> : 250}
        </div>
      )
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      address: "10 Downing Street",
      phoneNumber: 32,
    },
    {
      key: "2",
      name: "John",
      address: "10 Downing Street",
      phoneNumber: 42,
    },
    {
      key: "3",
      name: "John",
      address: "10 Downing Street",
      phoneNumber: 42,
    },
    {
      key: "4",
      name: "John",
      address: "10 Downing Street",
      phoneNumber: 42,
    },
    {
      key: "5",
      name: "John",
      address: "10 Downing Street",
      phoneNumber: 42,
    },
  ];

  const [selectionType, setSelectionType] = useState('checkbox');

  return (
    <div className="App">
      <Table
        columns={columns}
        dataSource={dataSource}
        className="table"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}

export default App;
