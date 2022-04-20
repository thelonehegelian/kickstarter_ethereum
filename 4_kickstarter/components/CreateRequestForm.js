import React from "react";
import { Form, Input, Button, Checkbox, InputNumber } from "antd";
/**
 *  string description;
        uint256 value; // in Wei, the money that is asked for and transferred at the finalization of the request
        address payable recipient; // the person who should receive the money at the finalization of the request. Who should be this person in real-life?
        bool complete; // to be marked as complete: approvalCount > (approverCount / 2)
        uint256 approvalCount;
        mapping(address => bool) approvals;
 * 
 */

export default function AddRequestForm() {
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
          label="Description"
          name="Description"
          rules={[
            {
              required: false,
              message: "",
            },
          ]}
        >
          {/* Convert input to Wei*/}
          <Input placeholder="Description" value="" onChange="" />
        </Form.Item>
        <Form.Item
          label="Amount in Ether"
          name="etherAmount"
          rules={[
            {
              required: true,
              message: "Please enter an amount in Ether",
            },
          ]}
        >
          <InputNumber
            style={{
              width: 200,
            }}
            defaultValue="0.0000000000000001"
            min="0"
            max=""
            step="0.0000000000000001"
            onChange=""
            stringMode
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
          <Input placeholder="Ethereum Address" value="" onChange="" />
        </Form.Item>
      </Form>
    </>
  );
}
