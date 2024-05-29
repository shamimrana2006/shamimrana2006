export default function Footer() {
  // topup button--------------

  function topup() {
    var scrollupk = document.querySelector("#scrollup");

    if (this.scrollY >= 560) scrollupk.classList.add("scroll-up-hidden");
    else scrollupk.classList.remove("scroll-up-hidden");
  }

  
  window.addEventListener("scroll", topup);

  console.clear();
         
  return (
    <div> 
      <footer className="footer" id="footer">
        {/* <!-- <svg id="Layer_2" className="waveSvg" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.89 378.77"><path d="M-23.36,71.1S66.12,131.42,164,131.42,302.39,71.1,382.08,71.1s163.57,60.32,246.06,60.32S783.32,71.1,899.36,71.1V430.6H-9.38L-17,75.13Z"   stroke-miterlimit="10"/>
      </svg> --> */}
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <div className="footer-container container grid">
          <div className="footer-description">
            <h2 className="footer-title">
              Shamim <span className="footter-title-bold">Rana</span>
            </h2>
            <p className="footer-details">
              As a seasoned developer with a diverse skill set, I bring
              proficiency in HTML, CSS, and JavaScript, coupled with expertise
              in React for building dynamic and responsive web applications. My
              proficiency extends to database management, with a solid command
              of MySQL, ensuring robust and efficient data handling.
            </p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/shamimrana2006"
                className="social-link"
              >
                <i className="uil uil-facebook-f social-icon"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shamimrana2006/"
                className="social-link"
              >
                <i className="uil uil-linkedin-alt social-icon"></i>
              </a>
              <a
                href="https://www.instagram.com/shamimrana2006/"
                className="social-link"
              >
                <i className="uil uil-instagram social-icon"></i>
              </a>
              <a
                href="https://www.tiktok.com/@mdshamimrana200"
                className="social-link"
              >
                <i className="uil uil-presentation-play social-icon"></i>
              </a>
              <a
                href="https://www.youtube.com/@updatehistory360"
                className="social-link"
              >
                <i className="uil uil-youtube social-icon"></i>
              </a>
            </div>
          </div>
          <div className="footer-option grid">
            <div className="footer-products">
              <h3 className="footer-option-title">Product</h3>
              <a href="#portfolio" className="footer-product">
                Theme Design
              </a>
              <a href="#" className="footer-product">
                Wordpress
              </a>
              <a href="#testimonial" className="footer-product">
                Html and Css
              </a>
              <a href="#" className="footer-product">
                Figma to Html
              </a>
              <a href="#" className="footer-product">
                Psd to Html
              </a>
            </div>
            <div className="footer-products">
              <h3 className="footer-option-title">Useful Link</h3>
              <a href="blog" className="footer-product">
                Blog
              </a>
              <a href="#" className="footer-product">
                Pricing
              </a>
              <a href="#" className="footer-product">
                Sales
              </a>
              <a href="#" className="footer-product">
                Tickets
              </a>
              <a href="#" className="footer-product">
                Certifications
              </a>
              <a href="#portfolio" className="footer-product">
                Custormer Services
              </a>
            </div>
            <div className="footer-products">
              <h3 className="footer-option-title">Address</h3>
              <a
                href="https://en.wikipedia.org/wiki/Sherpur_District"
                className="footer-product"
              >
                2100,Sherpur Sodor
              </a>
              <a
                href="https://en.wikipedia.org/wiki/Mymensingh_District"
                className="footer-product"
              >
                Mymonsing Divition
              </a>
              <a
                href="https://en.wikipedia.org/wiki/Dhaka"
                className="footer-product"
              >
                Dhaka, Bangladesh
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          All rights reserved by &copy; Conceptial{" "}
          <span className="date"></span>
        </div>
        <a href="#" className="scrollup" id="scrollup">
          <i className="uil uil-arrow-up scrollup-icon"></i>
        </a>
      </footer>
    </div>
  );
}
