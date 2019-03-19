import React, { Component } from "react";
import ToolkitCardView from "./ToolkitCardView";

export class ToolkitsListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dummyInfo: [
        {
          title: "How to Neque porr",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt augue sit amet nunc ultricies pellentesque. Mauris iaculis sapien eros, vel accumsan sem sollicitudin vitae. "
        },
        {
          title: "How to ac luctus m",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt augue sit amet nunc ultricies pellentesque. Mauris iaculis sapien eros, vel accumsan sem sollicitudin vitae. "
        },
        {
          title: "How to quis blandit lacus",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt augue sit amet nunc ultricies pellentesque. Mauris iaculis sapien eros, vel accumsan sem sollicitudin vitae. "
        },
        {
          title: "How to sit amet luctus",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt augue sit amet nunc ultricies pellentesque. Mauris iaculis sapien eros, vel accumsan sem sollicitudin vitae. "
        }
      ]
    };
  }
  renderToolkitList() {
    return this.state.dummyInfo.map(info => {
      return (
        <div className="col-md-4 pt-3">
          <ToolkitCardView info={info} />
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="toolkits-list-header pt-5">
          <i className="fa fa-diamond" aria-hidden="true" />
          <h1>{this.props.kind}</h1>
          <hr />
        </div>
        <div className="container">
          <div className="row">{this.renderToolkitList()}</div>
        </div>
      </div>
    );
  }
}

export default ToolkitsListPage;
