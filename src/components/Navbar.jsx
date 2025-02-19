const Navbar = () => {
  return (
    <div className="container h-100">
      <nav className="navbar navbar-expand-lg d-flex align-items-center sticky-top bg-white text-black mt-3 ps-5 pe-5">
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
              src="src/assets/img/logo.png"
              className="rounded-circle shadow"
              alt=""
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
    </div>
  );
};

export default Navbar;
