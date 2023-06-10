import React from "react";
import "./skillsComponents.scss";
import { Skill } from "./skill";
import gallery1 from "../../assets/gallery-1.svg";
import gallery2 from "../../assets/gallery-2.svg";
import gallery3 from "../../assets/gallery-3.svg";
import gallery4 from "../../assets/gallery-4.svg";

export class SkillsComponent extends React.Component {
  render() {
    return (
      <>
        <h1 className="section__title">Skills</h1>
        <div className="skillsContainer">
          <Skill
            url={gallery1}
            text="Improve your English skills and confidence. Live classes and interactive lessons online. 20% extra free for a limited time only Improve your English skills and confidence. Live classes and interactive lessons online. 20% extra free for a limited time only
Learn English online and improve your skills through our high-quality courses and resources – all designed for adult Improve your English skills and confidenc language learners."
          />
          <Skill
            url={gallery2}
            text="Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners."
          />
          <Skill
            url={gallery3}
            text="Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners."
          />
          <Skill
            url={gallery4}
            text="Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners."
          />
        </div>
      </>
    );
  }
}
