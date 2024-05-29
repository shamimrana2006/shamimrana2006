import { useEffect, useRef, useState } from "react";

export default function Skills() {


  useEffect(() => {
    //skill section alll
    const skillContents = document.querySelectorAll<HTMLElement>('.skills-content');
    const skillHeaders = document.querySelectorAll<HTMLElement>('.skills-header');

    function toggleSkills(this: HTMLElement) {
      let itemClass = this.parentNode?.className;

      skillContents.forEach((element) => {
        element.className = 'skills-content skill-close';
      });

      if (itemClass === 'skills-content skill-close') {
        this.parentNode!.className = 'skills-content skill-oepn';
      }
    }

    skillHeaders.forEach((element) => {
      element.addEventListener('click', toggleSkills);
    });

    return () => {
      skillHeaders.forEach((element) => {
        element.removeEventListener('click', toggleSkills);
      });
    };
  }, );

//----------percentage changing

useEffect(() => {
  const skillNumberElements = document.querySelectorAll<HTMLElement>('.skills-number');
  const skillPercentageElements = document.querySelectorAll<HTMLElement>('.skills-percentage');

  const storedPercentages: string[] = [];
  skillNumberElements.forEach((element) => {
    storedPercentages.push(element.innerHTML);
  });

  skillPercentageElements.forEach((element, index) => {
    if (storedPercentages[index]) {
      element.style.width = storedPercentages[index];
    }
  });
}, []);


// qualification = section
useEffect(()=>{
  const tabs = document.querySelectorAll("[data-target]"),
  tabContacts = document.querySelectorAll("[data-contect]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContacts.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });

    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });
    tab.classList.add("qualification-active");
  });
});
},[])






  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">My technical level</span>

        <div className="skills-container container grid">
          <div>
            {/* <!-- skills 1----------- --> */}
            <div className="skills-content skill-oepn">
              <div className="skills-header">
                <i className="uil uil-brackets-curly skills-icon"></i>
                <div>
                  <h1 className="skils-title">Frontend developer</h1>
                  <span className="skills-subtitile">More than 4 years</span>
                </div>

                <i className="uil uil-angle-down skills-arrow"></i>
              </div>

              <div className="skills-list grid">
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skill-name">HTML</h3>
                    <span className="skills-number">90%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage skills-html"></span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skill-name">CSS</h3>
                    <span className="skills-number">85%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage skills-css"></span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skill-name">JavaScript</h3>
                    <span className="skills-number">70%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage skills-js"></span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skill-name">React</h3>
                    <span className="skills-number">50%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage skills-react"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- skills 2----------- --> */}
            <div className="skills-content skill-close">
              <div className="skills-header">
                <i className="uil uil-server-network skills-icon"></i>
                <div>
                  <h1 className="skils-title">Backend developer</h1>
                  <span className="skills-subtitile">More than 2 years</span>
                </div>

                <i className="uil uil-angle-down skills-arrow"></i>
              </div>

              <div className="skills-list grid">
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skill-name">PHP</h3>
                    <span className="skills-number">40%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage skills-php"></span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skill-name">Node js</h3>
                    <span className="skills-number s-no">10%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage skills-node"></span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skill-name">Firbase</h3>
                    <span className="skills-number">10%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage skills-firbase"></span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skill-name">Python</h3>
                    <span className="skills-number">55%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage skills-py"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- skills 3----------- --> */}
            <div className="skills-content skill-close">
              <div className="skills-header">
                <i className="uil uil-swatchbook skills-icon"></i>
                <div>
                  <h1 className="skils-title">Designer</h1>
                  <span className="skills-subtitile">More than 5 years</span>
                </div>

                <i className="uil uil-angle-down skills-arrow"></i>
              </div>

              <div className="skills-list grid">
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skill-name">Figma</h3>
                    <span className="skills-number">90%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage skills-figma"></span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skill-name">Sketch</h3>
                    <span className="skills-number">30%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage skills-sketch"></span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skill-name">Photoshop</h3>
                    <span className="skills-number">80%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage skills-photoshop"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="qualification section">
        <h2 className="section-title">Qualification</h2>
        <span className="section-subtitle">My personal journey</span>

        <div className="qualification-container container">
          <div className="qualification-tabs">
            <div
              className="qualification-button button-flex qualification-active"
              data-target="#education"
            >
              <i className="uil uil-graduation-cap qualification-icon"></i>
              Education
            </div>
            <div
              className="qualification-button button-flex"
              data-target="#work"
            >
              <i className="uil uil-briefcase-alt qualification-icon"></i>
              Work
            </div>
          </div>

          <div className="qualification-section">
            {/* <!-- qualification content 1 --> */}
            <div
              className="qualification-content qualification-active"
              data-contect
              id="education"
            >
              {/* <!-- qualification1 --> */}
              <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">Computer Engineering</h3>
                  <span className="qualification-subtitle">
                    Sherpur Polytechincal Institute
                  </span>
                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i>
                    2021 - RUNNING
                  </div>
                </div>
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
              </div>

              {/* <!-- qualification4--> */}
              <div className="qualification-data">
                <div></div>
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>

                <div>
                  <h3 className="qualification-title">Master in Ui/Ux</h3>
                  <span className="qualification-subtitle">
                    Graphic design (personal)
                  </span>
                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i>
                    2017 - RUNNING
                  </div>
                </div>
              </div>
              {/* <!-- qualification1 --> */}
              <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">Softwer Enginner</h3>
                  <span className="qualification-subtitle">DUET(my hobby)</span>
                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i>
                    FUTURE - ...
                  </div>
                </div>
                <div>
                  <span className="qualification-rounder"></span>
                </div>
              </div>
            </div>

            {/* <!-- qualification content 2 --> */}
            <div className="qualification-content" data-contect id="work">
              {/* <!-- qualification3--> */}
              <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">Web Development</h3>
                  <span className="qualification-subtitle">
                    Personally Practice
                  </span>
                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i>
                    2017 - RUNNING
                  </div>
                </div>
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
              </div>
              {/* <!-- qualification2 --> */}
              <div className="qualification-data">
                <div></div>

                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>

                <div>
                  <h3 className="qualification-title">Frontend Developer</h3>
                  <span className="qualification-subtitle">
                    CSE Department(my hobby)
                  </span>
                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i>
                    2019 - RUNNING
                  </div>
                </div>
              </div>

              {/* <!-- qualification3--> */}
              <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">Ui Design</h3>
                  <span className="qualification-subtitle">
                    Graphic design (Personal)
                  </span>
                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i>
                    RUNNING
                  </div>
                </div>
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
              </div>
              {/* <!-- qualification2 --> */}
              <div className="qualification-data">
                <div></div>

                <div>
                  <span className="qualification-rounder"></span>
                </div>

                <div>
                  <h3 className="qualification-title">Web Design</h3>
                  <span className="qualification-subtitle">
                    CSE Department (my hobby)
                  </span>
                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i>
                    Completing...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
