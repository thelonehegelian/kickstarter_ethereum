import React from "react";
import campaign from "../ethereum/campaign";
import { Card, Col, Row } from "antd";
import web3 from "../ethereum/web3";
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
      <>
        <h1>Show Campaign</h1>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={6}>
              <Card title="Minimum Contribution" bordered={false}>
                {this.props.minimumContribution}
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Contract Balance" bordered={false}>
                {web3.utils.fromWei(this.props.contractBalance, "ether")}
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Number of Requests" bordered={false}>
                {this.props.numRequests}
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Approvers Count" bordered={false}>
                {this.props.approversCount}
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Contract Manager's Address" bordered={false}>
                {this.props.managerAddress}
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
