import { Table, Tag, Space } from "antd";

const { Column, ColumnGroup } = Table;

export default function RequestsTWable(props) {
  // console.log(props.requestData.requests[0].description);

  let data = Array(props.requestCount)
    .fill()
    .map((element, index) => {
      return {
        id: index,
        ...props.requestData.requests[index],
      };
    });
  console.log(data);
  // const data = [
  //   {
  //     id: "1",
  //     description: "John",
  //     value: "150",
  //     recipient: 32,
  //     complete: "",
  //     approvalCount: "",
  //     finalize: "",
  //   },
  // ];

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
