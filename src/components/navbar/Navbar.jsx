import { useState, useEffect } from "react";
import cruzitoLogo from "../../assets/img/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollWindow = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollWindow);
    return () => window.removeEventListener("scroll", scrollWindow);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg d-flex align-items-center sticky-top bg-white text-black mt-3 ps-3 pe-3 transition-all ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container h-100 container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex flex-column flex-lg-row w-100 justify-content-between align-items-center">
            <div className="d-flex flex-column flex-lg-row">
              <a
                className="nav-link text-center text-lg-start"
                href="#about-me"
              >
                About me
              </a>
              <a
                className="nav-link text-center text-lg-start ms-lg-5"
                href="#experience"
              >
                Experience
              </a>
            </div>

            <div className="d-flex justify-content-center me-5">
              <a
                className="nav-link"
                href="https://github.com/cruzito-x"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={cruzitoLogo}
                  className="rounded-circle shadow mt-2 mb-3"
                  alt="cruzito's logo"
                  style={{ width: "60px" }}
                />
              </a>
            </div>

            <div className="d-flex flex-column flex-lg-row">
              <a className="nav-link text-center text-lg-end" href="#skills">
                Skills
              </a>
              <a
                className="nav-link text-center text-lg-end ms-lg-5"
                href="#projects"
              >
                Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
