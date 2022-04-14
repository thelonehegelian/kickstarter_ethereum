import React from "react";
import factory from "../ethereum/factory";
import BasicCard from "../components/BasicCard";

let campaignName = "Little Bittle Campaign";
class CampaignIndex extends React.Component {
  // get data from the ethereum contract and set it as props for this component
  // the function should resolve to an object
  static async getInitialProps() {
    // get the deployd campaign array from the factory contract
    const campaigns = await factory.methods.getDeployedContracts().call();
    console.log(campaigns);
    //  return the data
    return { campaigns }; // should be returned using curly braces to give this.props[0] campaign name
  }

  renderCampaigns() {
    console.log(this.props)
    let items = this.props.campaigns.map((address) => {
      return {
        header: address,
        name: campaignName,
        description: <a>View Campaign</a>,

      };
    });
    return <BasicCard items = {items}/>
  }

  render() {
    return (
      <div>{this.renderCampaigns()}
      </div>
    );
  }
}

export default CampaignIndex;
