import React, { Component } from "react";

export class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <div className="text-center landing-center">
          <h1>Practical Resistance Alliance X</h1>
          <a href="/category/index">
            <button type="button" className="btn btn-outline-primary">
              GET STARTED
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default LandingPage;
