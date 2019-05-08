import React, { Component } from "react";

export default class NewToolkitButton extends Component {
  render() {
    return (
      <div className="new-toolkit-button" id="add_toolkit_button">
        <a href="/toolkit/new">
          <div className="button-content">
            <i className="fa fa-plus-circle" aria-hidden="true" />
            <br />
            Add a new toolkit
          </div>
        </a>
      </div>
    );
  }
}
