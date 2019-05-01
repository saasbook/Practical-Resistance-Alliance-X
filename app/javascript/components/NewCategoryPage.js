import React, { Component } from "react";
import NewStepComponent from "./NewStepComponent";

export default class NewCategoryPage extends Component {
  constructor(props) {
    super(props);

    this.stepsRef = React.createRef();
    this.state = {
<<<<<<< HEAD
      name: "",
=======
      categories: this.props.categories,
      title: "",
      overview: "",
      category: ""
>>>>>>> 65b5d9a849c691cb789489863acfcacb41586a27
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
<<<<<<< HEAD

  handleOnSubmit(e) {
    e.preventDefault();
    const category_data = {
      name: this.state.name,
=======
  handleOnSubmit(e) {
    e.preventDefault();
    const { steps } = this.stepsRef.current.state;
    const toolkit_data = {
      title: this.state.title,
      steps
>>>>>>> 65b5d9a849c691cb789489863acfcacb41586a27
    };

    // get csrfToken
    const csrfToken = document.querySelector('[name="csrf-token"]').content;
    // Make request
<<<<<<< HEAD
    fetch("/category", {
      method: "POST",
      body: JSON.stringify(category_data),
=======
    fetch("/toolkit", {
      method: "POST",
      body: JSON.stringify(toolkit_data),
>>>>>>> 65b5d9a849c691cb789489863acfcacb41586a27
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

<<<<<<< HEAD
  renderFormName() {
=======
  renderFormTitle() {
>>>>>>> 65b5d9a849c691cb789489863acfcacb41586a27
    return (
      <div>
        <input
          className="form-control"
<<<<<<< HEAD
          name="name"
          value={this.state.name}
=======
          name="title"
          value={this.state.title}
>>>>>>> 65b5d9a849c691cb789489863acfcacb41586a27
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
<<<<<<< HEAD
          {this.renderFormName()}
=======
          {this.renderFormTitle()}
>>>>>>> 65b5d9a849c691cb789489863acfcacb41586a27
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
