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
      return <option>{category}</option>;
    });
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
      overview: this.state.overview,
      category: this.state.category,
      steps
    };
    console.log(toolkit_data);
  }

  render() {
    return (
      <div className="container" id="uploadToolkit">
        <h2>Create a New Toolkit</h2>
        <form role="main">
          <label for="title">Title:</label>
          <input
            class="form-control"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Enter the title here"
          />
          <label for="overview">Overview:</label>
          <input
            class="form-control"
            type="text"
            name="overview"
            value={this.state.overview}
            onChange={this.handleChange}
            placeholder="Enter the overview here"
          />
          <div className="form-group">
            <label for="categoryTag">Category:</label>
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
            <label for="steps">Steps:</label>
            <NewStepComponent ref={this.stepsRef} />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={this.handleOnSubmit.bind(this)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
