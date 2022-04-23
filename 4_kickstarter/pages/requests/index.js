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
    // create campaign instance
    const campaignInstance = campaign(contractAddress);
    const contractSummary = await campaignInstance.methods.getSummary().call();
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
    };
  }

  render() {
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
        <RequestsTable requestData={this.props} />
      </>
    );
  }
}
