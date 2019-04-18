import React, { Component } from "react";

export default class NewToolkitButton extends Component {
  render() {
    return (
      <div className="new-button" id="add_toolkit_button">
        <a href="/newtoolkit">
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
