import { Table, Tag, Space } from "antd";

const { Column, ColumnGroup } = Table;

const data = [
  {
    id: "1",
    description: "John",
    amount: "",
    recipient: 32,
    approvalCount: "",
    approve: "",
    finalize: "",
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
