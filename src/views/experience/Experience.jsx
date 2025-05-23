import Lottie from "react-lottie";
import pythonLogo from "../../assets/img/icons/python.webp";
import buyMeACoffeeLogo from "../../assets/img/icons/coffee.webp";
import htmxLogo from "../../assets/img/icons/htmx.webp";
import assistantLogo from "../../assets/img/icons/assistant.webp";
import webLogo from "../../assets/img/icons/web.webp";
import preSpecialtyLottie from "../../assets/img/lottie/pre-specialty.json";
import "./styles/experience.css";
import { useEffect, useState } from "react";

const Experience = ({ lang }) => {
  const [showLottie, setShowLottie] = useState(false);
  const [activeTab, setActiveTab] = useState("Laboral");

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setShowLottie(true));
    } else {
      setTimeout(() => setShowLottie(true), 2000);
    }
  }, []);

  return (
    <div className="container p-5 h-100" id="experience">
      <div className="text-black text-center mt-5">
        <h1 className="fw-semibold">{lang.experience_title?.text}</h1>
        <label className="fw-semibold enphasis-text-dark">
          {lang.experience_subtitle?.text}
        </label>
      </div>
      <div className="row mt-5 align-items-center">
        <div className="col-lg-6 col-sm-12 d-flex align-items-center">
          <div className="timeline w-100 mb-5">
            <div className="d-flex w-100 justify-content-center align-items-center mb-3">
              <button
                className={`btn me-1 fw-semibold fs-6 border-0 ${
                  activeTab === lang.laboral_title?.text
                    ? "enphasis-text"
                    : "enphasis-text-dark"
                }`}
                onClick={() => setActiveTab(lang.laboral_title?.text)}
              >
                {lang.laboral_title?.text}
              </button>
              <button
                className={`btn ms-1 fw-semibold fs-6 border-0 ${
                  activeTab === lang.education_title?.text
                    ? "enphasis-text"
                    : "enphasis-text-dark"
                }`}
                onClick={() => setActiveTab(lang.education_title?.text)}
              >
                {lang.education_title?.text}
              </button>
            </div>
            {activeTab === lang.laboral_title?.text && (
              <>
                <div className="timeline-item d-flex align-items-center">
                  <div className="icon">
                    <img src={webLogo} alt="Web Logo" />
                  </div>
                  <div className="timeline-content w-100">
                    <label className="fw-semibold text-white">
                      {lang.sms_time?.text}
                    </label>
                    <h3>{lang.sms_job?.text}</h3>
                    <p>Software Mobile Solutions S.A de C.V. - El Salvador.</p>
                  </div>
                </div>
                <div className="timeline-item d-flex align-items-center">
                  <div className="icon">
                    <img src={buyMeACoffeeLogo} alt="Buy me a Coffee Logo" />
                  </div>
                  <div className="timeline-content w-100">
                    <label className="fw-semibold text-white">
                      {lang.tec101_time?.text}
                    </label>
                    <h3>{lang.tec101_job?.text}</h3>
                    <p>Tecnologías 101 S.A de C.V. - El Salvador.</p>
                  </div>
                </div>
                <div className="timeline-item d-flex align-items-center">
                  <div className="icon">
                    <img src={buyMeACoffeeLogo} alt="Buy me a Coffee Logo" />
                  </div>
                  <div className="timeline-content w-100">
                    <label className="fw-semibold text-white">
                      {lang.codeEye_time?.text}
                    </label>
                    <h3>{lang.codeEye_job?.text}</h3>
                    <p>CodeEye Solutions Inc. - Canadá / El Salvador.</p>
                  </div>
                </div>
                <div className="timeline-item d-flex align-items-center">
                  <div className="icon">
                    <img src={assistantLogo} alt="Google Assistant logo" />
                  </div>
                  <div className="timeline-content w-100">
                    <label className="fw-semibold text-white">
                      {lang.mutual_fund_time?.text}
                    </label>
                    <h3>{lang.mutual_fund_job?.text}</h3>
                    <p>{lang.mutual_fund?.text} - El Salvador.</p>
                  </div>
                </div>
              </>
            )}
            {activeTab === lang.education_title?.text && (
              <>
                <div className="timeline-item d-flex align-items-center">
                  <div className="icon">
                    <img src={pythonLogo} alt="Python Logo" />
                  </div>
                  <div className="timeline-content w-100">
                    <label className="fw-semibold text-white">
                      {lang.pre_specialty_time?.text}
                    </label>
                    <h3>{lang.pre_specialty_title?.text}</h3>
                    <p>{lang.university?.text}. - El Salvador.</p>
                  </div>
                </div>
                <div className="timeline-item d-flex align-items-center">
                  <div className="icon">
                    <img src={htmxLogo} alt="HTMX logo" />
                  </div>
                  <div className="timeline-content w-100">
                    <label className="fw-semibold text-white">
                      2020 - 2024
                    </label>
                    <h3>{lang.about_description_title?.text}.</h3>
                    <p>{lang.university?.text}. - El Salvador.</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center lottie-container">
          {showLottie && (
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: preSpecialtyLottie,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
