import React, { Component } from "react";

export class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <div className="text-center landing-center">
          <h1>Practical Resistance Alliance X</h1>

          <button type="button" className="btn btn-primary" id="start_button">
            <a href="/category/index">GET STARTED</a>
          </button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
