import aboutImg from "./img/about.png"
export default function About() {
  return (
    <div>
      <section className="about section" id="about">
        <h2 className="section-title">About Me</h2>
        <span className="section-subtitle">My introduction</span>
        <div className="about-container container grid">
          <img src={aboutImg} alt="" className="about-img" />

          <div className="about-data">
            <p className="about-description">
              Web developer, with extensive knowledge and years of experience,
              working in web technologies and ui / ux design, delivering quality
              work.
            </p>
            <div className="about-info">
              <div>
                <span className="about-info-title">05+</span>
                <span className="about-info-name">
                  Years <br />
                  experience
                </span>
              </div>
              <div>
                <span className="about-info-title">06+</span>
                <span className="about-info-name">
                  Completed <br />
                  project
                </span>
              </div>
              <div>
                <span className="about-info-title">01+</span>
                <span className="about-info-name">
                  Companies <br />
                  Work
                </span>
              </div>
            </div>
            <div className="about-buttons">
              <a
                download=""
                href="http://drive.google.com/uc?export=download&id=1lzhDhZqA2w1AYft8755QzDCCEjbb0C4b"
                className="button button-flex"
              >
                Download Stylish CV
                <i className="uil uil-download-alt button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
