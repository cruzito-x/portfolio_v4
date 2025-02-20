import coderImage from "../../assets/img/coder.png";
import "./styles/home.css";

const Home = () => {
  return (
    <div className="container h-100 mb-5 pb-5" id="home">
      <div className="row mt-5 pt-5">
        <div className="col-lg-6 col-sm-12">
          <h1 className="text-black fw-bold name">David Cruz</h1>
          <label className="fw-semibold dark-enphasis-text fs-5">
            Software Engineer
          </label>
          <p className="text-black mt-3 fs-6 mt-4">
            Graduated with a degree in Computer and Systems Engineering with a
            Pre major in Cybersecurity Engineering in progress, I have
            experience in the area of web development with JavaScript-based
            technologies such as React.js and Express.js, I also have knowledge
            in both management and handling of relational databases and web
            design using tools such as Figma. <br /> <br />
            I&apos;m always looking to expand the horizons of my knowledge and
            expand my capabilities.
          </p>
          <div className="text-start">
            <a
              href="src/assets/docs/David Cruz - Currículum Vitae.pdf"
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
        <div className="col-lg-6 d-flex justify-content-center">
          <img src={coderImage} className="w-100" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
