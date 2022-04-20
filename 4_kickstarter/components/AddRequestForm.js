import React from "react";

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
              required: true,
              message: "Please add minimum contribution for the campaign",
            },
          ]}
        >
          {/* Convert input to Wei*/}
          <Input placeholder="D" value="" onChange="" />

          <Input placeholder="E" value="" onChange="" />
          <Input placeholder="E" value="" onChange="" />
        </Form.Item>
      </Form>
    </>
  );
}
