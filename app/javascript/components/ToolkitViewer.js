import React, { Component } from "react";

export class ToolkitViewer extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    return (
      <div>
        <div className="toolkits-list-header pt-5">
          <h1>{this.props.toolkit.title}</h1>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-1">Author:</div>
                <div class="col-sm-11">{this.props.toolkit.author}</div>
            </div>
            <div class="row">
                <div class="col-sm-1">Overview:</div>
                <div class="col-sm-11">{this.props.toolkit.overview}</div>
            </div>
            <div class="row">
                <div class="col-sm-1">Steps:</div>
                <div class="col-sm-11">{this.props.toolkit.steps}</div>
            </div>
        </div>
      </div>
    );
  }
}

export default ToolkitViewer;
