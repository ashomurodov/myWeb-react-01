import React from "react";
import Description from "../common/description";
import Button from "../common/button";


// {name: "Button", URL: '';}
export class Skill extends React.Component {
  render() {
    return (
      <div className="skillBox">
        <div className="skillBox-img">
          <img src={this.props.url} alt="" />
        </div>
        <div className="skillBox-text">
          <h2>Speaking</h2>
          <Description text={this.props.text} />
          <Button buttonText="Learn More" buttonBgColor="#000" buttonColor="#fff" buttonClassName="darkBtn" />
        </div>
      </div>
    );
  }
}
