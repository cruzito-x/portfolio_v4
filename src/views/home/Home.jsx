import Lottie from "react-lottie";
import coderLottie from "../../assets/img/lottie/coder";
import curriculumVitae from "../../assets/docs/David Cruz - Curriculum Vitae.pdf";
import "./styles/home.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Home = ({ lang }) => {
  const [showLottie, setShowLottie] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setShowLottie(true));
    } else {
      setTimeout(() => setShowLottie(true), 2000);
    }
  }, []);

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
          <ul
            className="mt-3 me-3 text-start p-0"
            style={{ listStyle: "none" }}
          >
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
            ].map((url, index) => (
              <li key={index}>
                <a
                  href={url.href}
                  className="fs-3 enphasis-text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={url.label}
                >
                  <i className={`bx ${url.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
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
                <label key={index}>{line}</label>
              ))}
            </p>

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
          {showLottie && (
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: coderLottie,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
