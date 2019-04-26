import React, { Component } from "react";
import Disqus from "disqus-react";
import moment from "moment";

export class ToolkitViewer extends Component {
  constructor(props) {
    super(props);
  }

  renderSteps() {
    return this.props.steps.map(s => {
      return (
        <div className="row my-3 py-2" key={s.number}>
          <div className="col-md-2">
            <div className="step-num-card">{s.number}</div>
          </div>
          <div className="col-md-9 step-centent">{s.content}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.steps);
    const disqusShortname = "prax-1";
    const disqusConfig = {
      //url: window.location.href,
      identifier: this.props.toolkit.id,
      title: this.props.toolkit.title
    };
    return (
      <div id="toolkit-view">
        <div className="toolkits-list-header pt-5">
          <h1>{this.props.toolkit.title}</h1>
        </div>
        <div className="container">
          <div className="mx-auto w-50 text-center">
            <div className="text-muted">
              BY {this.props.toolkit.author}
              <span className="mx-2">|</span>
              <span>
                {moment(this.props.toolkit.updated_at)
                  .format("YYYY-MM-DD")
                  .toString()}
              </span>
            </div>
          </div>
          <div className="w-75 mx-auto font-weight-light overview">
            <p className="text-secondary">{this.props.toolkit.overview}</p>
          </div>
          <div className="container w-75">{this.renderSteps()}</div>

          <div className="m-5">
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ToolkitViewer;
