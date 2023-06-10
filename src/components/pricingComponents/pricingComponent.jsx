import React from "react";
import Description from "../common/description";
import "./pricing.module.css";

export class PricingComponent extends React.Component {
  render() {
    return (
      <div className="component_container">
        <img src={this.props.url} alt="" />
        <h3>Self-study online course</h3>
        <Description text={this.props.text} />
        <span className="priceBox">
          <h3>£5.99</h3>
          <p>per month</p>
        </span>
      </div>
    );
  }
}
