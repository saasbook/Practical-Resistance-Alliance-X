import React, { Component } from "react";
import ToolkitView from "./ToolkitView";

export class ToolkitsListPage extends Component {
  renderToolkitList() {
    return <div>List</div>;
  }
  render() {
    return (
      <div>
        <div className="toolkits-list-header pt-5">
          <i className="fa fa-diamond" aria-hidden="true" />
          <h1>{this.props.kind}</h1>
          <hr />
        </div>
        <div className="container">
          <div className="row">{this.renderToolkitList()}</div>
        </div>
      </div>
    );
  }
}

export default ToolkitsListPage;
