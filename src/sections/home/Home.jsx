import "./styles/home.css";

const Home = () => {
  return (
    <div className="container" id="home">
      <nav className="navbar navbar-expand-lg mt-3">
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
          <a className="nav-link mx-auto" href="#home">
            Logo
          </a>
          <div className="d-flex">
            <div className="w-50">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </div>
            <div className="w-50 ms-5">
              <a className="nav-link" href="#contact-me">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="row mt-5 pt-5">
        <div className="col-lg-6 col-sm-12">
          <h1
            className="fw-bold"
            style={{
              fontSize: "4rem",
            }}
          >
            David Cruz
          </h1>
          <label className="fw-semibold">Software Engineer </label>
          <p className="mt-3">
            Graduated with a degree in Systems Engineering with a Pre-Specialty
            in Cybersecurity Engineering in progress. I have experience in the
            area of web development with JavaScript based technologies, such as
            React.js and Express.js. <br />
            I&apos;m always looking to expand the horizons of my knowledge and
            expand my capabilities.
          </p>
          <div className="text-center">
            <a href="" className="btn btn-primary mt-2" target="_blank">
              Download CV
            </a>
            <a href="" className="btn btn-primary mt-2 ms-3" target="_blank">
              Contact Me
            </a>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <img src="src/assets/img/coder.png" className="w-75" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
