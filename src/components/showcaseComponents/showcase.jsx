import React from "react";
import Description from "../common/description";
import Button from "../common/button";
import "./showcase.scss";
import banner from "../../assets/img-showcase.svg";
import lamp from "../../assets/lamp.svg";

export class Showcase extends React.Component {
  render() {
    return (
      <div className="showcase">
        <div className="showcase__left">
          <h1 className="big__text">Learn Any Foreign Language</h1>
          <Description text="With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson." />
          <Button
            buttonText="Get Started"
            buttonBgColor="#000"
            buttonColor="#fff"
            buttonClassName="darkBtn"
          />
        </div>
        <div className="showcase__center">
          <img src={lamp} alt="Lamp" />
        </div>
        <div className="showcase__right">
          <img src={banner} alt="Showcase" />
        </div>
      </div>
    );
  }
}
