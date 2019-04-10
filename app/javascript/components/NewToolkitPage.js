import React, { Component } from "react";
import NewStepComponent from "./NewStepComponent";

export default class NewToolkitPage extends Component {
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

  renderCategories() {
    return this.state.categories.map(category => {
      return <option key={category}>{category}</option>;
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleOnSubmit(e) {
    e.preventDefault();
    // pack data
    const { steps } = this.stepsRef.current.state;
    const toolkit_data = {
      title: this.state.title,
      overview: this.state.overview,
      category: this.state.category,
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

  render() {
    return (
      <div className="container" id="uploadToolkit">
        <h2>Create a New Toolkit</h2>
        <form role="main">
          <label htmlFor="title">Title:</label>
          <input
            className="form-control"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Enter the title here"
          />
          <label htmlFor="overview">Overview:</label>
          <input
            className="form-control"
            type="text"
            name="overview"
            value={this.state.overview}
            onChange={this.handleChange}
            placeholder="Enter the overview here"
          />
          <div className="form-group">
            <label htmlFor="categoryTag">Category:</label>
            <select
              className="form-control"
              name="category"
              onChange={this.handleChange}
              value={this.state.category}
            >
              <option value="">-- Please Choose a Category --</option>
              {this.renderCategories()}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="steps">Steps:</label>
            <NewStepComponent ref={this.stepsRef} />
          </div>
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
