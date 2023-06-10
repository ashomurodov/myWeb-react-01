import React from "react";
import { PricingComponent } from "./pricingComponent";
import prising1 from "../../assets/pricing-1.svg";
import prising2 from "../../assets/pricing-2.svg";
import prising3 from "../../assets/pricing-3.svg";
import "./pricing.module.css";



export class PricingComponents extends React.Component {
  render() {
    return (
      <>
        <h1 className="section__title">Pricing</h1>
        <div className="pricingBoxContainer">
          <PricingComponent
            url={prising1}
            text="Start learning English online in live classes with qualified EC teachers and students from all over the world."
          />
          <PricingComponent
            url={prising2}
            text="Start learning English online in live classes with qualified EC teachers and students from all over the world."
          />
          <PricingComponent
            url={prising3}
            text="Start learning English online in live classes with qualified EC teachers and students from all over the world."
          />
        </div>
      </>
    );
  }
}
