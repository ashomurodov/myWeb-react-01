import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.buttonClassName}
        style={{ backgroundColor: this.props.buttonBgColor, color: this.props.buttonColor }}
      >
        {this.props.buttonText}
      </button>
    );
  }
}
