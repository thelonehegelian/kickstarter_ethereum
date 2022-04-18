import React from "react";
// antd imports
import { Layout, Form, Input, Button } from "antd";

export default class ContributeForm extends React.Component {
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
            <Input placeholder="Ether" value="" onChange="" />
          </Form.Item>
        </Form>
      </>
    );
  }
}
