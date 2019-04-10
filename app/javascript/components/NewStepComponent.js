import React, { Component } from "react";

export default class NewStepComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numSteps: 1,
      steps: {}
    };

    this.renderSteps = this.renderSteps.bind(this);
  }
  handleOnInputChange(e) {
    const id = e.target.id;
    const value = e.target.value;
    const { steps } = this.state;
    steps[id] = value;
    this.setState({ steps });
  }
  handleOnAddStepClick(e) {
    e.preventDefault();
    let { numSteps } = this.state;
    numSteps++;
    this.setState({ numSteps });
  }
  renderSteps() {
    const numSteps = this.state.numSteps;
    return [...Array(numSteps).keys()].map(num => {
      let step = num + 1;
      return (
        <div className="input-group my-2" key={num + 1}>
          <div class="input-group-prepend">
            <span class="input-group-text">
              Step &nbsp; <span>{step}</span>
            </span>
          </div>
          <textarea
            className="form-control"
            aria-label="With textarea"
            onChange={this.handleOnInputChange.bind(this)}
            id={step}
            value={this.state.steps[step]}
          />
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        {this.renderSteps()}
        <button
          className="btn btn-primary"
          onClick={this.handleOnAddStepClick.bind(this)}
        >
          Add a step
        </button>
      </div>
    );
  }
}
