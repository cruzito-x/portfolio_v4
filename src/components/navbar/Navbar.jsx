import { useState, useEffect } from "react";
import cruzitoLogo from "../../assets/img/logo.png";
import "./styles/navbar.css";

const Navbar = ({ lang }) => {
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectedLink = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  const navItems = [
    {
      id: "#home",
      label: lang.home?.text,
      icon: <i className="bx bx-home-alt-2"></i>,
    },
    {
      id: "#about",
      label: lang.about?.text,
      icon: <i className="bx bx-planet"></i>,
    },
    {
      id: "#skills",
      label: lang.skills?.text,
      icon: <i className="bx bx-code"></i>,
    },
    {
      id: "#experience",
      label: lang.experience?.text,
      icon: <i className="bx bx-laptop"></i>,
    },
    {
      id: "#projects",
      label: lang.projects?.text,
      icon: <i className="bx bx-image"></i>,
    },
    {
      id: "#contact",
      label: lang.contact?.text,
      icon: (
        <i
          className="bx bx-send"
          style={{
            rotate: "-30deg",
          }}
        ></i>
      ),
    },
  ];

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg d-none d-md-flex align-items-center sticky-top bg-white text-black ps-3 pe-3 transition-all ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="container h-100">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <div className="d-flex flex-column flex-lg-row w-100 justify-content-between align-items-center">
              <div className="d-flex flex-column flex-lg-row">
                <a
                  href="#about"
                  onClick={() => selectedLink("#about")}
                  className={`nav-link text-lg-start ${
                    activeLink === "#about"
                      ? "nav_link active_link"
                      : "nav_link"
                  }`}
                >
                  {lang.about?.text}
                </a>
                <a
                  href="#experience"
                  onClick={() => selectedLink("#experience")}
                  className={`nav-link text-lg-start ms-lg-5 ${
                    activeLink === "#experience"
                      ? "nav_link active_link"
                      : "nav_link"
                  }`}
                >
                  {lang.experience?.text}
                </a>
              </div>

              <div className="d-flex justify-content-center p-2">
                <a
                  onClick={() => {
                    window.scrollTo(0, 0);
                    selectedLink("#home");
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
                  onClick={() => selectedLink("#skills")}
                  className={`nav-link text-lg-end ${
                    activeLink === "#skills"
                      ? "nav_link active_link"
                      : "nav_link"
                  }`}
                >
                  {lang.skills?.text}
                </a>
                <a
                  href="#projects"
                  onClick={() => selectedLink("#projects")}
                  className={`nav-link text-lg-end ms-lg-5 ${
                    activeLink === "#projects"
                      ? "nav_link active_link"
                      : "nav_link"
                  }`}
                >
                  {lang.projects?.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="position-relative d-md-none"
        style={{
          zIndex: 1,
        }}
      >
        <button
          className="position-fixed bottom-0 end-0 m-1 btn btn-white rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ width: "50px", height: "50px", zIndex: 2 }}
        >
          <i className={`bx ${menuOpen ? "bx-x" : "bx bx-cube-alt"}`}></i>
        </button>

        {menuOpen && (
          <div className="position-fixed top-100 start-50 translate-middle w-100 h-50 bg-white d-flex flex-column justify-content-center align-items-center shadow-lg p-3 rounded-top">
            <div className="container text-center">
              <div className="row row-cols-3 g-3">
                {navItems.map((item) => (
                  <div className="col" key={item.id}>
                    <a
                      href={item.id}
                      className="d-flex flex-column align-items-center text-dark text-decoration-none"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.icon}
                      <span className="mt-2">{item.label}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
