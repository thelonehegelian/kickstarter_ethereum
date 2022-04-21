import React from "react";
// import CreateRequestForm from "../../components/CreateRequestForm";
import { Form, Input, Button, Alert } from "antd";
import campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import { PoweroffOutlined } from "@ant-design/icons";
import Router from "next/router";
export default class AddRequest extends React.Component {
  state = {
    requestDescription: "",
    amountRequested: "",
    recipientAddress: "",
    isLoading: false,
    error: { error: false, errorMessage: "" },
  };

  static async getInitialProps(props) {
    const campaignAddress = props.query.address;
    return { campaignAddress: campaignAddress };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async () => {
    const { requestDescription, amountRequested, recipientAddress } =
      this.state;

    this.setState({ isLoading: true });
    try {
      // get metmask addresses
      const accounts = await web3.eth.getAccounts();
      // create the contract instance
      const campaignInstance = await campaign(this.props.campaignAddress);
      // call addRequest function on the contract
      await campaignInstance.methods
        .createRequest(
          requestDescription,
          web3.utils.toWei(amountRequested, "ether"),
          recipientAddress
        )
        .send({
          from: accounts[0],
        });
      Router.pushRoute(`/campaigns/${this.props.campaignAddress}/requests`);
    } catch (err) {
      this.setState({ error: { errror: true, errorMessage: err } });
    }
    this.setState({ isLoading: false });
  };

  render() {
    return (
      <>
        <h1>Add Request</h1>
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
            label="Request Description"
            rules={[
              {
                required: false,
                message: "",
              },
            ]}
          >
            {/* Description */}
            <Input
              type="text"
              name="requestDescription"
              placeholder="Description"
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Amount Requested"
            name="etherAmount"
            rules={[
              {
                required: true,
                message: "Please enter an amount in Ether",
              },
            ]}
          >
            {/* Amount Requested */}
            <Input
              type="number"
              name="amountRequested"
              placeholder="Ether"
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Recipient"
            name="recipient"
            rules={[
              {
                required: true,
                message: "Please enter an Ethereum Address",
              },
            ]}
          >
            {/* Ethereum Address */}
            <Input
              name="recipientAddress"
              placeholder="Ethereum Address"
              onChange={this.handleChange}
            />
          </Form.Item>
        </Form>
        {this.state.error.error && (
          <Alert message={this.state.error.errorMessage} type="error" />
        )}
        {this.state.isLoading ? (
          <Button type="primary" icon={<PoweroffOutlined />} loading />
        ) : (
          <Button onClick={this.handleSubmit} type="primary" htmlType="submit">
            Create Request
          </Button>
        )}
      </>
    );
  }
}
