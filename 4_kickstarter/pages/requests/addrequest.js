import React from "react";
import CreateRequestForm from "../../components/CreateRequestForm";
import { Form, Input, Button } from "antd";
export default class AddRequest extends React.Component {
  static async getInitialProps(props) {
    return { props };
  }
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
        <Button type="primary" onClick={this.handleClick}>
          Create the Request
        </Button>
      </>
    );
  }
}
