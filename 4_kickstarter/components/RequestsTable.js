import { Table, Tag, Space } from "antd";

const { Column, ColumnGroup } = Table;

export default function RequestsTWable(props) {
  // create data array for rows
  let data = Array(props.requestCount)
    .fill()
    .map((element, index) => {
      return {
        id: index, // adds id key to the request object (isn't required though)
        ...props.requestData.requests[index],
        complete: requestData.complete.toString(), // convert complete value to string for rendering in the table
      };
    });
  console.log(data);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
    { title: "Recipient", dataIndex: "recipient", key: "recipient" },
    {
      title: "Approval Count",
      dataIndex: "approvalCount",
      key: "approvalCount",
    },
    {
      title: "Complete",
      dataIndex: "complete",
      key: "complete",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Approve {record.name}</a>
          <a>Finalize</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={data} columns={columns} />
    </>
  );
}
/**
 *
 *
 */
