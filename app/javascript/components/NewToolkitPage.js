import React, { Component } from "react";
import NewStepComponent from "./NewStepComponent";

export default class NewToolkitPage extends Component {
  constructor(props) {
    super(props);

    this.stepsRef = React.createRef();
    this.state = {
      categories: this.props.categories,
      steps: null
    };
  }

  renderCategories() {
    return this.state.categories.map(category => {
      return <option>{category}</option>;
    });
  }
  handleOnSubmit(e) {
    e.preventDefault();
    console.log(this.stepsRef.current.state.steps);
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
            placeholder="Enter the title here"
          />
          <label for="overview">Overview:</label>
          <input
            class="form-control"
            type="text"
            placeholder="Enter the overview here"
          />
          <div className="form-group">
            <label for="categoryTag">Category:</label>
            <select className="form-control" id="category">
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
