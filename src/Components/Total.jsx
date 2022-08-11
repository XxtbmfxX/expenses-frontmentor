import React, { Component } from "react";

export default class Total extends Component {
  render() {
    return (
      <div className="Total_Month">
        <div className="Total_current">
          <span>Total this month</span>
          <h2>$478.33</h2>
        </div>
        <div className="Total_last">
          <span>+2.4%</span>
          <span>form last month</span>
        </div>
      </div>
    );
  }
}
