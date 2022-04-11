import React from "react";
import factory from "../ethereum/factory";

class CampaignIndex extends React.Component {
  // get data from the ethereum contract and set it as props
 // the function should resolve to an object   
  static async getInitialProps() {
    // get the deployd campaign array from the factory contract
    const campaigns = await factory.methods.getDeployedContracts().call();
    console.log(campaigns);
    //  return the data
     return (campaigns);
  }

 

  render() {
    return <div>{this.props.campaings}</div>;
  }
}

export default CampaignIndex;
