import React from "react";
import { Form, Input, Button } from "antd";
/**
 *  string description;
        uint256 value; // in Wei, the money that is asked for and transferred at the finalization of the request
        address payable recipient; // the person who should receive the money at the finalization of the request. Who should be this person in real-life?
        bool complete; // to be marked as complete: approvalCount > (approverCount / 2)
        uint256 approvalCount;
        mapping(address => bool) approvals;
 * 
 */

export default class AddRequestForm extends React.Component {
  state = {
    requestDescription: "",
    amountRequested: "",
    recipientAddress: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  handleClick = () => {
    console.log("handleClick called");
    // create the contract instance
    // call the request method and send the transaction
  };

  render() {
    console.log(this.props);
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
        <Button type="primary" onClick={this.handleClick}>
          Create the Request
        </Button>
      </>
    );
  }
}
