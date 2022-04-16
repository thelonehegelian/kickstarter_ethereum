import React from "react";
import factory from "../ethereum/factory";
import BasicCard from "../components/BasicCard";
import CreateCampaignButton from "../components/CreateCampaignButton";
import Navbar from "../components/Navbar";
import {Link} from '../routes'

// import Layout
import { Layout } from "antd";

const { Content } = Layout;

let campaignName = "Little Bittle Campaign";
class CampaignIndex extends React.Component {
  // get data from the ethereum contract and set it as props for this component
  // the function should resolve to an object
  static async getInitialProps() {
    // get the deployd campaign array from the factory contract
    const campaigns = await factory.methods.getDeployedContracts().call();
    //  return the data
    return { campaigns }; // should be returned using curly braces to give this.props[0] campaign name
  }

  renderCampaigns() {
    let items = this.props.campaigns.map((address) => {
      return {
        header: address,
        name: campaignName,
        description: <Link route ={`/campaigns/${address}`}>View Campaign</Link>,  // view campaign link, dynamic routing
      };
    });

    return <BasicCard items={items} />;
  }

  render() {
    return (
      <Layout>
        <Navbar />
        <Content>
          {" "}
          <div>{this.renderCampaigns()}</div>
          <CreateCampaignButton />
        </Content>
      </Layout>
    );
  }
}

export default CampaignIndex;
