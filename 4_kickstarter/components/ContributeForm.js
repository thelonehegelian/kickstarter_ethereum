import React from "react";
// antd imports
import { Layout, Form, Input, Button } from "antd";
import campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { DownloadOutlined, PoweroffOutlined } from "@ant-design/icons";
export default class ContributeForm extends React.Component {
  state = {
    contributionValue: "",
    isLoading: false,
  };

  handleSubmit = async () => {
    this.setState({ isLoading: true });
    // get all the accounts from metamask
    const accounts = await web3.eth.getAccounts();
    // create campaign instance
    const campaignInstance = campaign(this.props.campaignAddress);
    // convert contribution value to wei
    const contributionValue = web3.utils.toWei(
      this.state.contributionValue,
      "ether"
    );
    // call contribute function on the campaign
    await campaignInstance.methods.contribute(contributionValue).send({
      from: accounts[0], // gas is calculated automatically
    });

    this.setState({ isLoading: false });
  };

  render() {
    return (
      <>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Minimum Contribution"
            name="minimumContribution"
            rules={[
              {
                required: true,
                message: "Please add minimum contribution for the campaign",
              },
            ]}
          >
            {/* Convert input to Wei*/}
            <Input
              placeholder="Ether"
              value={this.state.contributionValue}
              onChange={(event) => {
                this.setState({ contributionValue: event.target.value });
              }}
            />
          </Form.Item>
        </Form>

        {this.state.isLoading ? (
          <Button type="primary" icon={<PoweroffOutlined />} loading />
        ) : (
          <Button onClick={this.handleSubmit}>Contribute</Button>
        )}
      </>
    );
  }
}
