import React, { Component } from "react";
import ToolkitView from "./ToolkitView";

export class ToolkitsListPage extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.kind}</h2>
        <ToolkitView />
      </div>
    );
  }
}

export default ToolkitsListPage;
