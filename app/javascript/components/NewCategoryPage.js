import React, { Component } from "react";
import NewStepComponent from "./NewStepComponent";

export default class NewCategoryPage extends Component {
  constructor(props) {
    super(props);

    this.stepsRef = React.createRef();
    this.state = {
      categories: this.props.categories,
      title: "",
      overview: "",
      category: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleOnSubmit(e) {
    e.preventDefault();
    const { steps } = this.stepsRef.current.state;
    const toolkit_data = {
      title: this.state.title,
      steps
    };

    // get csrfToken
    const csrfToken = document.querySelector('[name="csrf-token"]').content;
    // Make request
    fetch("/toolkit", {
      method: "POST",
      body: JSON.stringify(toolkit_data),
      headers: new Headers({
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken
      })
    })
      .then(res => {
        if (res.redirected) {
          window.location.replace(res.url);
        }
      })
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  }

  renderFormTitle() {
    return (
      <div>
        <input
          className="form-control"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Enter the category name here"
        />
      </div>
    );
  }

  render() {
    return (
      <div className="container" id="uploadCategory">
        <h2>Create a New Category</h2>
        <form role="main">
          {this.renderFormTitle()}
          <div className="mx-auto my-3" style={{ width: "100px" }}>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleOnSubmit.bind(this)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
