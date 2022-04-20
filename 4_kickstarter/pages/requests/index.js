// shows a list of requests for the campaign

import React from "react";
import RequestsTable from "../../components/RequestsTable";
import { Button } from "antd";
import { Link } from "../../routes";

// TODO: Add styles
export default class RequestsIndex extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1>Show Requests</h1>

          {/* TODO: only show the button if the connected metmask address is of manager */}
          <Link route="">
            <Button type="primary">Add a Request</Button>
          </Link>
        </div>
        <RequestsTable />
      </>
    );
  }
}
