import { useEffect, useRef, useState } from "react";

export default function Home() {
  const nabToggleRef = useRef<HTMLElement>(null);
  const nabClose = useRef<HTMLAnchorElement>(null);
  const show = useRef<HTMLElement>(null);

  // dart them managment ------------===========
  const darkTheme = "dark-theme";
  const iconTheme = "uil-sun";

  const [theme, setTheme] = useState<string>("light");
  const [icon, setIcon] = useState<string>("uil-sun");

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");


    if (selectedTheme) {
      setTheme(selectedTheme);
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
    }
    if (selectedIcon) {
      setIcon(selectedIcon);
      document
        .querySelector(".change-theme")
        ?.classList[selectedIcon == "uil-sun" ? "add" : "remove"](iconTheme);
      const b = document.querySelector(".change-theme")?.classList;

    }
  }, []);

  const getCurrentTheme = (): string =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
  const getCurrentIcon = (): string =>
    icon === "uil-sun" ? "uil-moon" : "uil-sun";

  const toggleTheme = () => {
    const newTheme = getCurrentTheme() === "dark" ? "light" : "dark";  
    const newIcon = getCurrentIcon();

    setTheme(newTheme);
    setIcon(newIcon);

    document.body.classList.toggle(darkTheme);
    document.querySelector(".change-theme")?.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", newTheme);
    localStorage.setItem("selected-icon", newIcon);
  };

  ////////////////////////////////////////////////////////////////////

  useEffect(() => {
    /////////////navbar-------------
    const navmenu: HTMLElement | null = show.current;
    const navButton = nabToggleRef.current;
    const navClose = nabClose.current;
    if (navButton) {
      navButton.addEventListener("click", () => {
        navmenu.classList.add("showNave");
      });
    }
    if (navClose) {
      navClose.addEventListener("click", () => {
        navmenu.classList.remove("showNave");
      });
    }

    ///////////////////////////////////////
    const navLinks = document.querySelectorAll(".nav-link");
    const handleClick = () => {
      navmenu.classList.remove("showNave");
    };

    navLinks.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    ////////////////// activation nav bar color

    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((currenct) => {
        var sectionHeight = currenct.offsetHeight;
        var sectionTop = currenct.offsetTop - 50;
        var sectionId = currenct.getAttribute("id");
        var ii = document.querySelector(".nav-menu a[href*=" + sectionId + "]");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          ii.classList.add("active-link");
        } else {
          ii.classList.remove("active-link");
        }
        // console.log(sectionHeight+' ' + sectionTop+' ' + sectionId)
      });
    }

    window.addEventListener("scroll", () => {
      scrollActive();
    });
    // box-shadow
    function scrollHeader() {
      var nav = document.querySelector("#header");

      if (this.scrollY >= 80) nav.classList.add("scroll-header");
      else nav.classList.remove("scroll-header");
    }
    window.addEventListener("scroll", scrollHeader);
    ///////////////////////////////
    //mouse hover----------------------vanila js code
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const cursor = document.querySelector(".cursor");

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = "white";
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      cursor.style.top = x;
      cursor.style.left = y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 5 + "px";
        circle.style.top = y - 5 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);
  //////////////////////////////////

  return (
    <>
      <div className="cursor">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav-logo">
            Shamim
          </a>
          <div ref={show} className="nav-menu" id="nav-menu">
            <ul className="nav-list grid">
              <li className="nav-item">
                <a href="#home" className="nav-link activ-link">
                  <i className="uil uil-estate nav-icon"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  <i className="uil uil-user nav-icon"></i> About
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">
                  <i className="uil uil-file-alt nav-icon"></i> Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  <i className="uil uil-briefcase-alt nav-icon"></i> Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className="nav-link">
                  <i className="uil uil-scenery nav-icon"></i> Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  <i className="uil uil-message nav-icon"></i> ContactMe
                </a>
              </li>
            </ul>
            <i
              ref={nabClose}
              className="uil uil-times nav-close"
              id="nav-close"
            ></i>
          </div>
          <div className="nav-btns">
            <div
              className="uil uil-moon change-theme"
              onClick={toggleTheme}
              id="theme-button"
            ></div>
            <div ref={nabToggleRef} className="nav-toggle" id="nav-toggle">
              <i className="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
