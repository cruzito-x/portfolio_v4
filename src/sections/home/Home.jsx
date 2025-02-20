import coderImage from "../../assets/img/coder.png";
import curriculumVitae from "../../assets/docs/David Cruz - Currículum Vitae.pdf";
import "./styles/home.css";

const Home = () => {
  return (
    <div className="container h-100 mb-5 ps-5 pe-5 pb-5" id="home">
      <div className="row mt-5">
        <div className="d-flex col-lg-6 col-sm-12">
          <div className="me-3 mt-3">
            <ul style={{ listStyle: "none" }}>
              <li>
                <a
                  href="https://instagram.com/_cruzito.x"
                  className="fs-3"
                  target="_blank"
                  title="Instagram"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/cruzito-x"
                  className="fs-3"
                  target="_blank"
                  title="GitHub"
                >
                  <i className="bx bxl-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/users/644250041594150914"
                  className="fs-3"
                  target="_blank"
                  title="Discord"
                >
                  <i className="bx bxl-discord-alt"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-100">
            <h1 className="text-black fw-bold name">
              David <span className="enphasis-text">Cruz</span>
            </h1>
            <label className="fw-semibold dark-enphasis-text fs-5">
              Software Engineer
            </label>
            <p className="text-black mt-3 fs-6 mt-4">
              I am a Graduate with a degree in Computer and Systems Engineering
              and am In the Process of a major in Cybersecurity Engineering in
              progress. <br /> I have experience in the area of web development
              with JavaScript-based technologies such as Rea. I have experience
              in the area of web development with JavaScript-based technologies
              such as React.js and Express.js, I am also knowledgeable in the
              areas of both management, handling of relational databases, and
              web design using tools such as Figma. <br /> <br />I am always
              looking to expand the horizons of my knowledge and work on my
              capabilities.
            </p>
            <div className="text-start mb-5">
              <a
                href={curriculumVitae}
                className="btn btn-primary mt-2"
                target="_blank"
              >
                <i className="bx bx-download me-2"></i>
                Download CV
              </a>
              <a href="#contact-me" className="btn btn-primary mt-2 ms-3">
                <i
                  className="bx bx-send me-2"
                  style={{
                    rotate: "-30deg",
                  }}
                ></i>
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 justify-content-center">
          <img src={coderImage} className="w-100" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
