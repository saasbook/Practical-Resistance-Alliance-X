import React, { Component } from "react";
<<<<<<< HEAD
=======
import Disqus from 'disqus-react';
>>>>>>> 76c6df8b005a2535e238c045ec176b83bcdb4a6b

export class ToolkitViewer extends Component {
  constructor(props) {
    super(props);
  }

  renderSteps() {
    return this.props.steps.map(s => {
      return (
        <div className="row">
<<<<<<< HEAD
          <div className="col-md-2">{s.number}</div>
          <div className="col-md-10">{s.content}</div>
=======
          <div className="col-md-1">{s.number}</div>
          <div className="col-md-20">{s.content}</div>
>>>>>>> 76c6df8b005a2535e238c045ec176b83bcdb4a6b
        </div>
      );
    });
  }

  render() {
    console.log(this.props.steps);
<<<<<<< HEAD
    return (
      <div>
        <div className="toolkits-list-header pt-5">
          <h1>{this.props.toolkit.title}</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-1">Author:</div>
            <div className="col-sm-11">{this.props.toolkit.author}</div>
          </div>
          <div className="row">
            <div className="col-sm-1">Overview:</div>
            <div className="col-sm-11">{this.props.toolkit.overview}</div>
          </div>
          <div>
            <div className="row">
              <div className="col-sm-1">Steps:</div>
            </div>
            {this.renderSteps()}
          </div>
        </div>
      </div>
=======
    const disqusShortname = 'prax-1';
    const disqusConfig = {
        //url: window.location.href,
        identifier: this.props.toolkit.id,
        title: this.props.toolkit.title,
    };
    return (
        <div id="toolkit-view">
            <div className="toolkits-list-header pt-5">
                <h1>{this.props.toolkit.title}</h1>
            </div>
            <dl class="row">
                <dt class="col-sm-1">Author</dt>
                <dd class="col-sm-11">{this.props.toolkit.author}</dd>
                <dt class="col-sm-1">Overview</dt>
                <dd class="col-sm-11">{this.props.toolkit.overview}</dd>
                <dt class="col-sm-1">Steps</dt>
                <dd class="col-sm-11">{this.renderSteps()}</dd>
            </dl>
            <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
>>>>>>> 76c6df8b005a2535e238c045ec176b83bcdb4a6b
    );
  }
}

export default ToolkitViewer;
