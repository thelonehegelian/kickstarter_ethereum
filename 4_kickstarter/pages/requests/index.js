// shows a list of requests for the campaign

import React from "react";
import RequestsTable from "../../components/RequestsTable";
import { Button } from "antd";
import { Link } from "../../routes";
import campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";

// TODO: Add styles
export default class RequestsIndex extends React.Component {
  static async getInitialProps(props) {
    // get contract address from the props
    const contractAddress = props.query.address;
    // // create campaign instance
    // const campaignInstance = campaign(contractAddress);
    // // call requests fuction on the contract
    // const requestSummary = await campaignInstance.methods.requests(0).call();
    // console.log(requestSummary);

    return { contractAddress: contractAddress };
  }

  render() {
    return (
      <>
        <div>
          <h1>Show Requests</h1>
          {/* TODO: only show the button if the connected metmask address is of manager */}
          <Link route={`/campaigns/${this.props.contractAddress}/addrequest`}>
            <a>
              <Button type="primary">Add a Request</Button>
            </a>
          </Link>
        </div>
        <RequestsTable />
      </>
    );
  }
}
