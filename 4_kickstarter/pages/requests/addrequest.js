import React from "react";
import CreateRequestForm from "../../components/CreateRequestForm";

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
