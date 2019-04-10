import React, { Component } from "react";

export default class NewToolkitPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: this.props.categories
    };
  }

  renderCategories() {
    return this.state.categories.map(category => {
      return <option>{category}</option>;
    });
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
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
