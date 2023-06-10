import React from "react";
import { Navbar } from "./components/headerComponent/navbar/navbar";
import { Showcase } from "./components/showcaseComponents/showcase";
import { SkillsComponent } from "./components/skillsComponents/skillsComponents";
import { PricingComponents } from "./components/pricingComponents/pricingComponents";
import { Footer } from "./components/footerComponents/footer";


export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Showcase />
        <SkillsComponent />
        <PricingComponents />
        <Footer />
      </>
    );
  }
}

