import Lottie from "react-lottie";
import coderLottie from "../../assets/img/lottie/coder";
import curriculumVitae from "../../assets/docs/David Cruz - Currículum Vitae.pdf";
import "./styles/home.css";
import React from "react";

const Home = ({ lang }) => {
  return (
    <div
      className="container h-100 mb-5 ps-5 pe-5"
      id="home"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="row mt-5 pt-5">
        <div className="d-flex col-lg-6 col-sm-12 p-0">
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
            <div className="row mb-2">
              {[
                {
                  href: "https://www.linkedin.com/in/cruzsv",
                  icon: "bxl-linkedin",
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/cruzito-x",
                  icon: "bxl-github",
                  label: "GitHub",
                },
                {
                  href: "https://instagram.com/_cruzito.x",
                  icon: "bxl-instagram",
                  label: "Instagram",
                },
              ].map((social, index) => (
                <div
                  key={index}
                  className={`col-1 d-flex w-auto rounded-circle dark-border text-center p-0 ${
                    index === 1 ? "ms-2 me-2" : ""
                  }`}
                >
                  <a
                    href={social.href}
                    className="fs-5 ps-1 pe-1 enphasis-text-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <i className={`bx ${social.icon}`}></i>
                  </a>
                </div>
              ))}
            </div>

            <div className="row text-start">
              <a
                href={curriculumVitae}
                className="col-md-4 btn btn-primary text-white m-1"
                target="_blank"
              >
                <i className="bx bx-download me-2"></i>
                {lang.download?.text}
              </a>
              <a
                href="#contact"
                className="col-md-4 btn btn-primary-dark text-white m-1"
              >
                <i
                  className="bx bx-send me-2"
                  style={{
                    rotate: "-30deg",
                  }}
                ></i>
                {lang.contact_me?.text}
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
