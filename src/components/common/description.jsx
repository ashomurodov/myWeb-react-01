import React from "react";

export default class Description extends React.Component {
  render() {
    return <p className="description">{this.props.text}</p>;
  }
}
