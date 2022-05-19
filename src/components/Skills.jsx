import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const dataExpA = [
  {
    skill: "React (Redux)",
    level: "Intermediate",
  },
  {
    skill: "JavaScript",
    level: "Intermediate",
  },
  {
    skill: "HTML5",
    level: "Intermediate",
  },
  {
    skill: "CSS3",
    level: "Intermediate",
  },
];

const dataExpB = [
  {
    skill: "SQL",
    level: "Intermediate",
  },
  {
    skill: "MS-Excel",
    level: "Intermediate",
  },
  {
    skill: "MS-Project",
    level: "Intermediate",
  },
  {
    skill: "VBA (Macros)",
    level: "Intermediate",
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <h5>Skills I Have</h5>
      <h2>Technical Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Web Development</h3>
          <div className="skills__content">
            {dataExpA.map(({ skill, level }) => {
              return (
                <article className="skills__details">
                  <BsPatchCheckFill className="skills__details-icons" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="skills__backend">
          <h3>Other Technical Skills</h3>
          <div className="skills__content">
            {dataExpB.map(({ skill, level }) => {
              return (
                <article className="skills__details">
                  <BsPatchCheckFill className="skills__details-icons" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
