import React, { Component } from "react";
import ToolkitCardView from "./ToolkitCardView";
import NewToolkitButton from "./NewToolkitButton";

export class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dummyInfo: this.props.toolkits
    };
  }
  renderToolkitList() {
    return this.state.dummyInfo.map((info, index) => {
      return (
        <div className="col-md-4 pt-3" key={index}>
          <ToolkitCardView info={info} />
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.renderToolkitList()}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;
