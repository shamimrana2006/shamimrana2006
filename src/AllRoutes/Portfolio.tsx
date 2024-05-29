import imga from "./img/a.jpg";
import imgb from "./img/b.jpg";
import imgc from "./img/c.jpg";
import imgd from "./img/profile.png";
import imge from "./img/client.png";
import imgf from "./img/client1.png";
import imgg from "./img/client2.png";

export default function Portfolio() {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <h2 className="section-title">Portfolio</h2>
        <span className="section-subtitle">Most recent work</span>

        <div className="portfolio-container container swiper swiper-container">
          <div className="swiper-wrapper" id="overjj">
            {/* <!-- portfolio1--------- --> */}
            <div className="portfolio-content grid swiper-slide">
              <img src={imga} alt="" className="portfolio-img" />
              <div className="portfolio-data">
                <h3 className="portfolio-title">Personal Website</h3>
                <p className="portfolio-description">
                  Website adaptable to all devices, with ui components and
                  animated interaction.
                </p>
                <a
                  href="https://mdshamimrana2006.github.io/PortFolio--ataur/"
                  className="button button-flex button-small portfolio-button"
                >
                  Demo
                  <i className="uil uil-arrow-right button-icon"></i>
                </a>
              </div>
            </div>
            {/* <!-- portfolio2--------- --> */}
            <div className="portfolio-content grid swiper-slide">
              <img src={imgb} alt="" className="portfolio-img" />
              <div className="portfolio-data">
                <h3 className="portfolio-title">Doctor Website Design</h3>
                <p className="portfolio-description">
                  Website not adaptable to all devices becuse this is example,
                  with ui components and animated interaction.
                </p>
                <a
                  href="https://mdshamimrana2006.github.io/portfolio2/"
                  className="button button-flex button-small portfolio-button"
                >
                  Demo
                  <i className="uil uil-arrow-right button-icon"></i>
                </a>
              </div>
            </div>
            {/* <!-- portfolio3--------- --> */}
            <div className="portfolio-content grid swiper-slide">
              <img src={imgc} alt="" className="portfolio-img" />
              <div className="portfolio-data">
                <h3 className="portfolio-title">Team Store Website</h3>
                <p className="portfolio-description">
                  with ui components and animated interaction.
                </p>
                <a
                  href="https://mdshamimrana2006.github.io/simple-protfolio/"
                  className="button button-flex button-small portfolio-button"
                >
                  Demo
                  <i className="uil uil-arrow-right button-icon"></i>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Add Arrows --> */}
          <div className="swiper-button-next">
            <i className="uil uil-angle-right swiper-portfolio-icon"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="uil uil-angle-left swiper-portfolio-icon"></i>
          </div>
          {/* <!-- Add Pagination --> */}
          <div className="swiper-pagination"></div>
        </div>
      </section>

      {/* <!-- project-------------------------------------- --> */}

      <section className="project section">
        <div className="project-bg">
          <div className="project-contaniner container grid">
            <div className="project-data">
              <h2 className="project-title">You have a new project</h2>
              <p className="project-description">
                Contact me now and get a 30% discount
              </p>
              <a href="#contact" className="button button-flex button-white">
                Contact Me
                <i className="uil uil-message project-icon button-icon"></i>
              </a>
            </div>

            <img src={imgd} alt="Shamim" className="project-img" />
          </div>
        </div>
      </section>

      {/* <!-- testimonium------------------ --> */}
      <section className="testimonial section">
        <h2 className="section-title">Testimonial</h2>
        <span className="section-subtitle">My client saing</span>

        <div className="testimonial-container container swiper swiper-container">
          <div className="swiper-wrapper testimonial-gird">
            {/* <!-- testimonial1 --> */}
            <div className="testimonial-content swiper-slide">
              <div className="testimonial-data">
                <div className="testimonial-header">
                  <img src={imge} alt="img" className="testimonial-img" />

                  <div>
                    <h3 className="testimonial-name">Shamim Rana</h3>
                    <span className="testimonial-clint">Client</span>
                  </div>
                </div>

                <div>
                  <i className="uil uil-star testimonial-icon-star"></i>
                  <i className="uil uil-star testimonial-icon-star"></i>
                  <i className="uil uil-star testimonial-icon-star"></i>
                  <i className="uil uil-star testimonial-icon-star"></i>
                  <i className="uil uil-star testimonial-icon-star"></i>
                </div>
              </div>
              <p className="testimonial-description">
                I get a good impression, I carry out my porject with all the
                possible quality and attention and support 24 hours a day
              </p>
            </div>
            {/* <!-- testimonial2 --> */}
            <div className="testimonial-content swiper-slide">
              <div className="testimonial-data">
                <div className="testimonial-header">
                  <img src={imgf} alt="img" className="testimonial-img" />

                  <div>
                    <h3 className="testimonial-name">Abusaeid islam</h3>
                    <span className="testimonial-clint">Client</span>
                  </div>
                </div>

                <div>
                  <i className="uil uil-star testimonial-icon-star"></i>
                  <i className="uil uil-star testimonial-icon-star"></i>
                  <i className="uil uil-star testimonial-icon-star"></i>
                  <i className="uil uil-star testimonial-icon-star"></i>
                  <i className="uil uil-star testimonial-icon-star"></i>
                </div>
              </div>
              <p className="testimonial-description">
                I get a good impression, I carry out my porject with all the
                possible quality and attention and support 24 hours a day
              </p>
            </div>
            {/* <!-- testimonial3 --> */}
            <div className="testimonial-content swiper-slide">
              <div className="testimonial-data">
                <div className="testimonial-header">
                  <img src={imgg} alt="img" className="testimonial-img" />

                  <div>
                    <h3 className="testimonial-name">AISRLVSJS</h3>
                    <span className="testimonial-clint">Client</span>
                  </div>
                </div>

                <div>
                  <i className="uil uil-star testimonial-icon-star"></i>
                  <i className="uil uil-star testimonial-icon-star"></i>
                  <i className="uil uil-star testimonial-icon-star"></i>
                  <i className="uil uil-star testimonial-icon-star"></i>
                  <i className="uil uil-star testimonial-icon-star"></i>
                </div>
              </div>
              <p className="testimonial-description">
                I get a good impression, I carry out my porject with all the
                possible quality and attention and support 24 hours a day
              </p>
            </div>
          </div>
          {/* <!-- Add Pagination --> */}
          <div className="swiper-pagination swiper-pagination-testimonial"></div>
        </div>
      </section>
    </div>
  );
}
