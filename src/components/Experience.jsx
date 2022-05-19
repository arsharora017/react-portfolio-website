import React from "react";
import "./experience.css";
import { BiCheck } from "react-icons/bi";

const Experience = () => {
  return (
    <section id="experience">
      {/* <h5> What I Offer</h5> */}
      <h2>Experience</h2>

      <div className="container experience__container">
        <article className="experience">
          <div className="experience__head">
            <h3>Technical Support Advisor</h3>
            <h4>Concentrix</h4>
          </div>

          <ul className="experience__list">
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Expertise in collecting information on business process and user
                requirements
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Collect, Organize and maintain problems and solutions log for
                use by other technical support analysts.
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Participate in redesign of applications and other softwares.
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Wrote Ad-Hoc queries using SQL Server Management Studio.</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Report bugs and interact with team to resolve them.</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Mentor new team members and hold KT sessions.</p>
            </li>
          </ul>
        </article>

        {/* END OF Concentrix */}

        <article className="experience">
          <div className="experience__head">
            <h3>Project Coordinator</h3>
            <h4>Ottawa-Carleton District School Board</h4>
          </div>

          <ul className="experience__list">
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Analyzed school's energy usage profile; performed benchmark and
                performance analysis using MS Excel and visualized the results
                using Tableau.
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Performed data analysis using 8 years of utility data
                (Electricity, Natural gas and Water).
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Worked extensively on MS Excel to manage large chunk of data,
                perform calculations and generate various graphs for visual
                representation.
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Efficiently documented the reports and presented the findings to
                the client.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF Project Coordinator */}
      </div>
    </section>
  );
};

export default Experience;
