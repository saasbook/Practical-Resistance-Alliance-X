import React, { Component } from "react";

export default class NewStepComponent extends Component {
  constructor(props) {
    super(props);

    const {edit} = this.props;
    console.log(this.props);
    this.state = {
      numSteps: edit ? this.props.steps.length : 1,
      steps: edit ? this.props.steps.map(s => s.content) :{}
    };

    this.renderSteps = this.renderSteps.bind(this);
  }
  handleOnInputChange(e) {
    const id = e.target.id;
    const value = e.target.value;
    const { steps } = this.state;
    steps[id-1] = value;
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
          <div className="input-group-prepend">
            <span className="input-group-text">
              Step &nbsp; <span>{step}</span>
            </span>
          </div>
          <textarea
            className="form-control"
            aria-label="With textarea"
            onChange={this.handleOnInputChange.bind(this)}
            id={step}
            value={this.state.steps[step-1]}
          />
        </div>
      );
    });
  }
  render() {
    console.log("state", this.state)
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
