import React, { Component } from "react";
import ToolkitCardView from "./ToolkitCardView";
import { renderToolkitList } from "./ToolkitsListPage";
import { renderCards } from "./CategoryPage";
export class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toolkits: this.props.toolkits,
      categoryList: this.props.categories,
      backgroundColor: ["#02b3e4", "#BF4C69", "#44A094", "#F4A54D", "#A36CDC"]
    };
  }
  renderElements(str) {
    return (
      <div className="container py-5">
        <div className="row">
          <h5>Relevant {str}</h5>
        </div>
        <div className="row">
          {str == "Categories"
            ? renderCards(this.state)
            : renderToolkitList(this.state)}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="toolkits-list-header pt-5">
          <i className="fa fa-search" aria-hidden="true" />
          <h1>Search Results for '{this.props.search_term}'</h1>
          <hr />
        </div>
        {this.renderElements("Categories")}
        {this.renderElements("Toolkits")}
      </div>
    );
  }
}

export default SearchResults;
