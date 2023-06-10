import React from "react";
import Button from "../../common/button";
import "./navbar.scss";

export class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="navbar__left">
          <h3>
            Brit<span>lex</span>
          </h3>
        </div>
        <div className="navbar__right">
          <ul className="navbar__right-menus">
            <li>Home</li>
            <li>Skills</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <Button buttonText="Let's Talk" buttonBgColor="#fff" buttonColor="#000" buttonClassName="lightBtn"/>
        </div>
      </nav>
    );
  }
}
