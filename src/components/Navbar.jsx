import cruzitoLogo from "../assets/img/logo.png";

const Navbar = () => {
  return (
    <nav className="container h-100 navbar navbar-expand-lg d-flex align-items-center sticky-top bg-white text-black mt-3 ps-5 pe-5">
      <div className="container-fluid">
        <div className="d-flex">
          <div className="w-50">
            <a className="nav-link" href="#about-me">
              About me
            </a>
          </div>
          <div className="w-50 ms-5">
            <a className="nav-link" href="#experience">
              Experience
            </a>
          </div>
        </div>
        <a
          className="nav-link mx-auto"
          href="https://github.com/cruzito-x"
          target="_blank"
        >
          <img
            src={cruzitoLogo}
            className="rounded-circle shadow"
            alt="cruzito's logo"
            style={{
              width: "60px",
            }}
          />
        </a>
        <div className="d-flex">
          <div className="w-50">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </div>
          <div className="w-50 ms-5">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
