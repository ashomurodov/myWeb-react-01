import React from "react";
import "./footer.scss";
import Description from "../common/description";
import Button from "../common/button";
import contactImg from "../../assets/contact-us.svg";

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer_container">
        <img src={contactImg} alt="contact-us" />
        <div className="subscribe_container">
          <h1 className="section__title">Contacts</h1>
          <Description text="Discover your current English level by taking our free online English test. Sign up to our newsletter for learning tips and free resource" />
          <form>
            <input type="text" placeholder="your email" required />
            <Button
              buttonText="Subscribe"
              buttonBgColor="#000"
              buttonColor="#fff"
              buttonClassName="darkBtn"
            />
          </form>
        </div>
      </div>
    );
  }
}
