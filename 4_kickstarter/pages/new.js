import React from "react";
import { Form, Input, Button } from "antd";
import { Layout } from "antd";
import factory from "../ethereum/factory";
import web3 from "../ethereum/web3";
const { Header, Content } = Layout;

export default class CampaignNew extends React.Component {
  state = {
    minimumContribution: "",
    errorMessage: "",
  };

  handleSubmit = async (event) => {
    try {
      // get all the accounts from metamask
      const accounts = await web3.eth.getAccounts();
      // send the transaction to the network and deploy a campaign
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0], // sender
          // gas is automatically calculated by metamask
        });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    // TODO: once the campaign is created user should be updated about the new contract
    // TODO: error handling and message display for user
    // TODO: work in progress button spinner to indicate to user that computation is happening behind the scenes
  };

  render() {
    return (
      <>
        <Layout>
          <Header>Navbar</Header>
          <Content>
            <h1>Create a Campaign</h1>
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
                <Input
                  placeholder="Wei"
                  value={this.state.minimumContribution}
                  onChange={(event) => {
                    this.setState({ minimumContribution: event.target.value });
                  }}
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                {/* Using onClick instead of form onSubmit, because onSubmit is not working */}
                <Button
                  onClick={this.handleSubmit}
                  type="primary"
                  htmlType="submit"
                >
                  Create
                </Button>
              </Form.Item>
            </Form>
          </Content>
        </Layout>
      </>
    );
  }
}
