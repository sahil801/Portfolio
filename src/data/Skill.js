import React, { useEffect } from "react";
import Aos from "aos";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import AnimatedProgressProvider from "../animations/AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import skills from "./skills.json";

function Skill() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    let all = document.getElementsByClassName("CircularProgressbar-text");
    for (let i = 0; i < all.length; i++) {
      all[i].setAttribute("x", 55);
      all[i].setAttribute("y", 52);
    }
  }, []);
  return (
    <section id="skills" class="skills section-bg">
      <div class="container1">
        <div class="section-title">
          <h2>Skills</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row skillContainer">
          {skills.map((skill) => {
            return (
              <div className="skillitem col-xl-4 col-lg-4  col-md-4 col-sm-4 col-xs-6 row ">
                <div
                  className="progressBar col-xl-5 col-lg-12"
                  data-aos="zoom-in"
                >
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={skill.value}
                    duration={1.5}
                    easingFunction={easeQuadInOut}
                  >
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          /* This is important to include, because if you're fully managing the
                                        animation yourself, you'll want to disable the CSS animation. */
                          styles={buildStyles({
                            pathTransition: "none",
                            pathColor: "green",
                          })}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
                <div className="skillDis col-xl-7 col-lg-12">
                  <h4>{skill.title}</h4>
                  <p>{skill.comment}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skill;
