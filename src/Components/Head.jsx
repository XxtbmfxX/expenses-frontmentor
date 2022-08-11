import React, { Component } from "react";

export default class Head extends Component {
  render() {
    return (
      <div className="Head_Balance">
        <div className="Head_data">
          <span>My balance</span>
          <h2>$921.48</h2>
        </div>
        <img src="../images/logo.svg" alt="" />
      </div>
    );
  }
}
