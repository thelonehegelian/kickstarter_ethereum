import { Table, Tag, Space } from "antd";
import web3 from "../ethereum/web3";
import campaign from "../ethereum/campaign";

export default function RequestsTable(props) {
  // click handlers
  const handleApprove = async () => {};

  // create data array for rows
  let data = Array(props.requestCount)
    .fill()
    .map((element, index) => {
      const requestData = props.requestData.requests[index]; // just easier to read
      return {
        id: index + 1, // adds id key to the request object (isn't required though)
        ...requestData,
        complete: requestData.complete.toString(), // convert complete value to string for rendering in the table
        value: web3.utils.fromWei(requestData.value, "ether"), // convert value to ether ether
      };
    });

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
      title: "Value (Ether)",
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
        <Space size="middle" onClick={handleApprove}>
          <a>Approve {record.name} </a>
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
