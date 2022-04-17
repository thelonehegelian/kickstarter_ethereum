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

    return { campaignSummary };
  }

  render() {
    return <h1>Show Campaign {this.props.contractAddress}</h1>;
  }
}
