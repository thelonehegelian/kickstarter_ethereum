import { Table, Tag, Space } from "antd";
import web3 from "../ethereum/web3";
import campaign from "../ethereum/campaign";

export default function RequestsTable(props) {
  // click handlers
  const handleApprove = async (evt) => {
    console.log(evt.target);
    // get contract address from the props
    const contractAddress = props.contractAddress;
    // create campaign instance
    const campaignInstance = campaign(contractAddress);
    // await campaignInstance.methods.approveRequest().call(campaignInstance)
  };

  const handleFinalize = async () => {};
  // create data array for rows
  let data = Array(props.requestCount)
    .fill()
    .map((element, index) => {
      const { description, value, recipient, complete, approvalCount } =
        props.requestData.requests[index]; // just easier to read and handle

      return {
        id: index + 1, // adds id key to the request object (isn't required though)
        description,
        value: web3.utils.fromWei(value, "ether"), // convert value to ether ether
        recipient,
        complete: complete ? "Yes" : "No", // convert complete value to string for rendering in the table
        approvalCount: `${approvalCount} / ${props.requestData.approversCount}`,
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
        <Space size="middle">
          <a onClick={handleApprove}>Approve {record.name} </a>
          <a onClick={handleFinalize}>Finalize</a>
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
