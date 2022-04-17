import React from "react";
import campaign from "../ethereum/campaign";
/**
 * 1. get the address from the props
 * 2. get the campaign from ethereum using the address
 * 3. show minimum contribution
 * 4. show campaign balance
 * 5. show pending requests
 * 6. show contributors
 * 7. Contribute to this campaign button
 * 8. View requests button
 */
export default class ShowCampaign extends React.Component {
  static async getInitialProps(props) {
    // get contract address from the props
    const contractAddress = props.query.address;
    const campaignInstance = campaign(contractAddress);
    const campaignSummary = await campaignInstance.methods.getSummary().call();
    console.log(props.query);
    // summary object returns an object, the keys are 0,1,2...
    // create summary object using named keys
    return {
      minimumContribution: campaignSummary[0],
      contractBalance: campaignSummary[1],
      numRequests: campaignSummary[2],
      approversCount: campaignSummary[3],
      managerAddress: campaignSummary[4],
    }; // returns an object
  }

  render() {
    return (
      <div>
        <h1>Show Campaign </h1>

        <p>
          Minimum Contribution:
          {this.props.minimumContribution}
        </p>

        <p>
          Contract Balance:
          {this.props.contractBalance}
        </p>
        <p>
          Number of Requests:
          {this.props.numRequests}
        </p>
        <p>
          Approvers Count:
          {this.props.approversCount}
        </p>

        <p>
          Contract Manager:
          {this.props.managerAddress}
        </p>
      </div>
    );
  }
}
