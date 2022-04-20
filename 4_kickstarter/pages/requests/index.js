// shows a list of requests for the campaign

import React from "react";
import RequestsTable from "../../components/RequestsTable";

export default class RequestsIndex extends React.Component {
  render() {
    return (
      <>
        <h1>Show Requests</h1>
        <RequestsTable />
      </>
    );
  }
}
