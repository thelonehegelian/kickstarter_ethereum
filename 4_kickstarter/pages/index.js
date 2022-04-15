import React from "react";
import factory from "../ethereum/factory";
import BasicCard from "../components/BasicCard";
import CreateCampaignButton from "../components/CreateCampaignButton";

// import Layout
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

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
        description: <a>View Campaign</a>, // dynamic routing
      };
    });

    return <BasicCard items={items} />;
  }

  render() {
    return (
      <Layout>
        <Header>NavBar</Header>
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
