import Lottie from "react-lottie";
import coderLottie from "../../assets/img/lottie/coder";
import curriculumVitae from "../../assets/docs/David Cruz - Currículum Vitae.pdf";
import "./styles/home.css";
import React from "react";

const Home = ({ lang }) => {
  return (
    <div
      className="container h-100 mb-5 ps-5 pe-5"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="row mt-5 pt-5">
        <div className="d-flex col-lg-6 col-sm-12 p-0">
          <div className="me-3 mt-3">
            <ul style={{ listStyle: "none" }}>
              <li>
                <a
                  href="https://instagram.com/_cruzito.x"
                  className="fs-3 enphasis-text-dark"
                  target="_blank"
                  title="Instagram"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/cruzito-x"
                  className="fs-3 enphasis-text-dark"
                  target="_blank"
                  title="GitHub"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/cruzsv"
                  className="fs-3 enphasis-text-dark"
                  target="_blank"
                  title="LinkedIn"
                  rel="noopener noreferrer"
                >
                  <i className='bx bxl-linkedin'></i>
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/users/644250041594150914"
                  className="fs-3 enphasis-text-dark"
                  target="_blank"
                  title="Discord"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-discord-alt"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-100">
            <h1 className="text-black fw-bold name">
              {lang.greeting?.text}
              <br />
              <span className="enphasis-text">David Cruz</span>
            </h1>
            <label className="fw-semibold enphasis-text-dark fs-5">
              {lang.title?.text}
            </label>
            <p className="text-black mt-3 fs-6 mt-4">
              {lang.description?.text.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <div className="text-start mb-5">
              <a
                href={curriculumVitae}
                className="btn btn-primary mt-2 me-3"
                target="_blank"
              >
                <i className="bx bx-download me-2"></i>
                {lang.download?.text}
              </a>
              <a href="#contact" className="btn btn-primary-dark mt-2">
                <i
                  className="bx bx-send me-2"
                  style={{
                    rotate: "-30deg",
                  }}
                ></i>
                {lang.contact?.text}
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 justify-content-center lottie-container">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: coderLottie,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
