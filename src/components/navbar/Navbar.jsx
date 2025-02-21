import { useState, useEffect } from "react";
import cruzitoLogo from "../../assets/img/logo.png";
import "./styles/navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scrollWindow = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", scrollWindow);
    return () => window.removeEventListener("scroll", scrollWindow);
  }, []);

  const navLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg d-flex align-items-center sticky-top bg-white text-black ps-3 pe-3 transition-all ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container h-100 container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
          <div className="d-flex flex-column flex-lg-row w-100 justify-content-between align-items-center">
            <div className="d-flex flex-column flex-lg-row">
              <a
                href="#about"
                onClick={() => navLinkClick("#about")}
                className={`nav-link text-lg-start ${
                  activeLink === "#about" ? "nav_link active_link" : "nav_link"
                }`}
              >
                About
              </a>
              <a
                href="#experience"
                onClick={() => navLinkClick("#experience")}
                className={`nav-link text-lg-start ms-lg-5 ${
                  activeLink === "#experience" ? "nav_link active_link" : "nav_link"
                }`}
              >
                Experience
              </a>
            </div>

            <div className="d-flex justify-content-center p-2">
              <a
                onClick={() => {
                  window.scrollTo(0, 0);
                  navLinkClick("#home");
                }}
                className={`cursor-pointer ${
                  activeLink === "#home" ? "nav_link active_link" : "nav_link"
                }`}
                href="#"
              >
                <img
                  src={cruzitoLogo}
                  className="rounded-circle shadow"
                  alt="cruzito's logo"
                  style={{ width: "60px" }}
                />
              </a>
            </div>

            <div className="d-flex flex-column flex-lg-row">
              <a
                href="#skills"
                onClick={() => navLinkClick("#skills")}
                className={`nav-link text-lg-end ${
                  activeLink === "#skills" ? "nav_link active_link" : "nav_link"
                }`}
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => navLinkClick("#projects")}
                className={`nav-link text-lg-end ms-lg-5 ${
                  activeLink === "#projects" ? "nav_link active_link" : "nav_link"
                }`}
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
