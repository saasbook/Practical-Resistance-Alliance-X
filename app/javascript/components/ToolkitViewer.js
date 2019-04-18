import React, { Component } from "react";

export class ToolkitViewer extends Component {
  constructor(props) {
    super(props);
  }

  renderSteps() {
    return this.props.steps.map(s => {
      return (
        <div className="row">
          <div className="col-md-2">{s.number}</div>
          <div className="col-md-10">{s.content}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.steps);
    return (
      <div>
        <div className="toolkits-list-header pt-5">
          <h1>{this.props.toolkit.title}</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-1">Author:</div>
            <div className="col-sm-11">{this.props.toolkit.author}</div>
          </div>
          <div className="row">
            <div className="col-sm-1">Overview:</div>
            <div className="col-sm-11">{this.props.toolkit.overview}</div>
          </div>
          <div>
            <div className="row">
              <div className="col-sm-1">Steps:</div>
            </div>
            {this.renderSteps()}
          </div>
        </div>
      </div>
    );
  }
}

export default ToolkitViewer;
