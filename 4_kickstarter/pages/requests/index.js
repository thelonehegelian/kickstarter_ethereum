// shows a list of requests for the campaign

import React from "react";
import { Button, Table, Space, Column, Divider } from "antd";
import { Link } from "../../routes";
import campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";

// TODO: Add styles
export default class RequestsIndex extends React.Component {
  static async getInitialProps(props) {
    // get contract address from the props
    const contractAddress = props.query.address;
    // create campaign instance
    const campaignInstance = campaign(contractAddress);
    const contractSummary = await campaignInstance.methods.getSummary().call();
    const approversCount = contractSummary["3"];
    // const approversCount = contractSummary.approversCount;
    const requestCount = parseInt(contractSummary["2"]);
    const requests = await Promise.all(
      /**
       * Array(): create an array with n elements
       * .map(): loop through index 0 until Array length and creates an object for each index
       * .fill: fill the array with requests
       */
      Array(requestCount)
        .fill()
        .map((element, index) => {
          return campaignInstance.methods.requests(index).call();
        })
    );

    /**
     * This code block does the same as above. My first attempt was to write using map() but I was not familiar with fill()
     * contractSummary["2"] = number of requests, 1,2,3,...
     * we need the requests index to start from 0 because that will be the first request
     * contractSummary["2"] should must be > 0, if it is not then there are no requests for the campaign
     */
    //  let requestSummary;
    //  let requests = [];
    // if (contractSummary["2"] != 0) {
    //   for (let i = contractSummary["2"] - 1; i < contractSummary["2"]; i++) {
    //     // call requests fuction on the contract
    //     requestSummary = await campaignInstance.methods.requests(i).call();
    //     requests.push(requestSummary);
    //     // console.log(requestSummary);
    //   }
    // }

    return {
      contractAddress: contractAddress,
      requests: requests,
      requestCount,
      approversCount,
    };
  }

  handleApprove = (requestId) => {
    console.log(requestId);
  };
  handleFinalize = (requestId) => {
    console.log(requestId);
  };

  render() {
    // data array
    const data = [
      this.props.requests.map((el, index) => {
        const { description, value, recipient, complete, approvalCount } = el; // just easier to read and handle

        return {
          id: index, // adds id key to the request object (isn't required though)
          description,
          value: web3.utils.fromWei(value, "ether"), // convert value to ether ether
          recipient,
          complete: complete ? "Yes" : "No", // convert complete value to string for rendering in the table
          approvalCount: `${approvalCount} / ${this.props.approversCount}`,
        };
      }),
    ];

    // Table columns array
    // const columns = [
    //   {
    //     title: "Id",
    //     dataIndex: "id",
    //     key: "id",
    //   },
    //   {
    //     title: "Description",
    //     dataIndex: "description",
    //     key: "description",
    //   },
    //   {
    //     title: "Value (Ether)",
    //     dataIndex: "value",
    //     key: "value",
    //   },
    //   { title: "Recipient", dataIndex: "recipient", key: "recipient" },
    //   {
    //     title: "Approval Count",
    //     dataIndex: "approvalCount",
    //     key: "approvalCount",
    //   },
    //   {
    //     title: "Complete",
    //     dataIndex: "complete",
    //     key: "complete",
    //   },
    //   {
    //     title: "Action",
    //     key: "action",

    //     render: (text, record) => (
    //       <Space size="middle">
    //         <a
    //           id={data[0]}
    //           onClick={(evt) => {
    //             console.log(evt.target.parentNode);
    //           }}
    //         >
    //           Approve {record.name}{" "}
    //         </a>
    //         <a onClick={null}>Finalize</a>
    //       </Space>
    //     ),
    //   },
    // ];
    return (
      <>
        <div>
          <h1>Requests</h1>
          {/* TODO: only show the button if the connected metmask address is of manager, because only the manager is allowed to add a request */}
          <Link route={`/campaigns/${this.props.contractAddress}/requests/new`}>
            <a>
              <Button type="primary">Add a Request</Button>
            </a>
          </Link>
        </div>
        <Table dataSource={data[0]} rowKey="id">
          <Column title="Id" dataIndex="id" key="id" />
          <Column
            title="Description"
            dataIndex="description"
            key="description"
          />
          <Column title="Value" dataIndex="value" key="value" />
          <Column title="Recipient" dataIndex="recipient" key="recipient" />
          <Column title="Complete" dataIndex="complete" key="complete" />
          <Column
            title="Approval Count"
            dataIndex="approvalCount"
            key="approvalCount"
          />

          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                <a onClick={(evt) => this.handleApprove(record.id)}>Approve</a>
                <Divider type="vertical" />
                <a onClick={(evt) => this.handleFinalize(record.id)}>
                  Finalize
                </a>
              </span>
            )}
          />
        </Table>
      </>
    );
  }
}
