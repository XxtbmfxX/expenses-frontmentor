import React, { Component, useState } from "react";
import Data from "../../data.json";

const Main = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  let Amount = [];
  Data.forEach((x) => {
    Amount.push(x.amount);
  });

  let CurrentMax = Math.max(...Amount);

  return (
    <div className="Main_Spends">
      <h1>Spending - Last 7 days</h1>
      <div className="Main_chart">
        <div className="Main_chart-stats">
          {Data &&
            Data.map((x) => (
              <span key={x.day} className="Manage-bar">
                <span
                  id="redto"
                  title={x.day}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    padding: "20px",
                    paddingBlockStart: `${(x.amount * 500) / CurrentMax}% `,
                  }}
                ></span>
                <span className="ammount">${x.amount}</span>
              </span>
            ))}
        </div>
        <div className="Main_chart-days">
          {Data && Data.map((x) => <span key={x.day}>{x.day}</span>)}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Main;
