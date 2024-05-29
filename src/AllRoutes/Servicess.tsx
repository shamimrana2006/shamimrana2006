import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; 
import './all css/swiper-bundle.min.css'
import './all css/styles.css'

Swiper.use([Navigation, Pagination]);
 

export default function Servicess() {



  const [activeModal, setActiveModal] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const navMenu = document.querySelector('.nav-menu');
      if (navMenu) {
        navMenu.classList.remove('showNave');
      }
    };
 
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize state on component mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const swiperProject = new Swiper('.portfolio-container', {
      loop: true,
      grabCursor: true,
      spaceBetween: 48,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
    });

    const swiperTestimonial = new Swiper('.testimonial-container', {
      loop: true,
      grabCursor: true,
      spaceBetween: 48,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        700: {
          slidesPerView: 2,
        },
      },
    });
  }, []);     

  useEffect(() => {
    const datee = new Date();
    const monthe = datee.getMonth();
    const todayBar = datee.getDay();
    const todayDate = datee.getDate();
    const mothName = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'November',
      'December',
    ];
    const today = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const y = datee.getFullYear();

    const dateElement = document.querySelector('.date');
    if (dateElement) {
      dateElement.innerHTML = `${y} ${todayDate} ${mothName[monthe]} ${today[todayBar]}`;
    }
  }, []);






  return (
    <div>
      <section className="services section" id="services">
        <h2 className="section-title">Services</h2>
        <span className="section-subtitle">What i offer</span>

        <div className="services-container container grid">
          {/* <!-- sevices 1--------- --> */}
          <div className="sevices-content">
            <div>
              <i className="uil uil-web-grid services-icon"></i>
              <h3 className="services-title">
                Ui/Ux <br />
                Design
              </h3>
            </div>
         
            
            <span  className="button button-flex button-small button-link services-button">
              View More
              <i className="uil uil-arrow-right button-icon"></i>
            </span>
            <div className="services-modal">
              <div className="services-modal-content">
                <h4 className="services-modal-title">
                  Ui/Ux <br />
                  Designer
                </h4>
                <i className="uil uil-times services-modal-close"></i>

                <ul className="service-modal-services grid">
                  <li className="services-modal-services">
                    <i className="uil uil-check-circle sercices-modal-icon"></i>
                    <p>I develop the user interface.</p>
                  </li>
                  <li className="services-modal-services">
                    <i className="uil uil-check-circle sercices-modal-icon"></i>
                    <p>Web page development</p>
                  </li>
                  <li className="services-modal-services">
                    <i className="uil uil-check-circle sercices-modal-icon"></i>
                    <p>I creat ux element interactions.</p>
                  </li>
                  <li className="services-modal-services">
                    <i className="uil uil-check-circle sercices-modal-icon"></i>
                    <p>I position your company brand.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- sevices 2--------- --> */}
          <div className="sevices-content">
            <div>
              <i className="uil uil-arrow services-icon"></i>
              <h3 className="services-title">
                Frontend <br />
                Developer
              </h3>
            </div>

            <span className="button button-flex button-small button-link services-button">
              View More
              <i className="uil uil-arrow-right button-icon"></i>
            </span>

            <div className="services-modal">
              <div className="services-modal-content">
                <h4 className="services-modal-title">
                  Frontend <br />
                  Developer
                </h4>
                <i className="uil uil-times services-modal-close"></i>

                <ul className="service-modal-services grid">
                  <li className="services-modal-services">
                    <i className="uil uil-check-circle sercices-modal-icon"></i>
                    <p>I develop the user interface.</p>
                  </li>
                  <li className="services-modal-services">
                    <i className="uil uil-check-circle sercices-modal-icon"></i>
                    <p>Frontend development</p>
                  </li>
                  <li className="services-modal-services">
                    <i className="uil uil-check-circle sercices-modal-icon"></i>
                    <p>I creat React App interactions.</p>
                  </li>
                  <li className="services-modal-services">
                    <i className="uil uil-check-circle sercices-modal-icon"></i>
                    <p>I position your company brand.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- sevices 3--------- --> */}
          <div className="sevices-content">
            <div>
              <i className="uil uil-pen services-icon"></i>
              <h3 className="services-title">
                Branding <br />
                Designer
              </h3>
            </div>

            <span className="button button-flex button-small button-link services-button">
              View More
              <i className="uil uil-arrow-right button-icon"></i>
            </span>
            <div className="services-modal">
              <div className="services-modal-content">
                <h4 className="services-modal-title">
                  Branding <br />
                  Designer
                </h4>
                <i className="uil uil-times services-modal-close"></i>

                <ul className="service-modal-services grid">
                  <li className="services-modal-services">
                    <i className="uil uil-check-circle sercices-modal-icon"></i>
                    <p>I develop Any webpage with user interface.</p>
                  </li>
                  <li className="services-modal-services">
                    <i className="uil uil-check-circle sercices-modal-icon"></i>
                    <p>Web page Fully development</p>
                  </li>
                  <li className="services-modal-services">
                    <i className="uil uil-check-circle sercices-modal-icon"></i>
                    <p>I creat ux element interactions.</p>
                  </li>
                  <li className="services-modal-services">
                    <i className="uil uil-check-circle sercices-modal-icon"></i>
                    <p>I position your company Hight.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
