import React from "react";
// antd imports
import { Layout, Form, Input, Button } from "antd";
import campaign from "../ethereum/campaign";

export default class ContributeForm extends React.Component {
  state = {
    contributionValue: "",
  };

  render() {
    handleSubmit = async () => {
      // create campaign instance
      const campaignInstance = campaign(this.props.campaignAddress);
    };
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
        <Button onClick={this.handleSubmit}>Contribute</Button>
      </>
    );
  }
}
