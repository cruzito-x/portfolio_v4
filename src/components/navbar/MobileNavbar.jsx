import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MobileNavbar = ({ lang }) => {
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="position-relative d-md-none"
      style={{
        zIndex: 1,
      }}
    >
      <button
        className="position-fixed bottom-0 end-0 m-3 btn btn-light rounded shadow"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ width: "50px", height: "50px", zIndex: 2 }}
      >
        <i className={`bx ${menuOpen ? "bx-x" : "bx bx-cube-alt"}`}></i>
      </button>

      {menuOpen && (
        <div className="position-fixed top-100 start-50 translate-middle w-100 h-75 bg-white d-flex flex-column justify-content-center align-items-center shadow-lg p-3 rounded-top">
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
  );
};

export default MobileNavbar;
