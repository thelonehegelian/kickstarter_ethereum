import { Table, Tag, Space } from "antd";

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default function RequestsTrable() {
  return (
    <>
      <Table dataSource={data}>
        <Column title="Id" dataIndex="firstName" key="firstName" />
        <Column title="Description" dataIndex="lastName" key="lastName" />
        <Column title="Amount" dataIndex="age" key="age" />
        <Column title="Recipient" dataIndex="address" key="address" />
        <Column title="Approval Count" dataIndex="address" key="address" />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Approve</a>
              <a>Finalize</a>
            </Space>
          )}
        />
      </Table>
    </>
  );
}
