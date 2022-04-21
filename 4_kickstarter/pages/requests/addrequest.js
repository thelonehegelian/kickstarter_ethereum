import React from "react";
import CreateRequestForm from "../../components/CreateRequestForm";
import { Button } from "antd";
export default class AddRequest extends React.Component {
  render() {
    return (
      <>
        <h1>Add Request</h1>
        <CreateRequestForm />
      </>
    );
  }
}
