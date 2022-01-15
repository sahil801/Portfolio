import React, { useEffect } from "react";
import Aos from "aos";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import AnimatedProgressProvider from "../animations/AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import skills from "../data/skills.json";

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
          For over monts, I have studied and done some practice projects that breathe life into the realm of the internet.
          through which I tried to improve my web development skills.
          Which helped me to gain an insight of various skill mentioned below
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
