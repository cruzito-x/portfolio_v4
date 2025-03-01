import Lottie from "react-lottie";
import owaspLogo from "../../assets/img/icons/dependencycheck.png";
import frontendIcon from "../../assets/img/icons/frontendmentor.png";
import htmxLogo from "../../assets/img/icons/htmx.png";
import pcLogo from "../../assets/img/icons/pcgamingwiki.png";
import dataSecurityLottie from "../../assets/img/lottie/data-security";
import "./styles/experience.css";

const Experience = ({ lang }) => {
  return (
    <div className="container p-5 h-100" id="experience">
      <div className="text-black text-center mt-5">
        <h1 className="fw-semibold">{lang.experience_title?.text}</h1>
        <label className="fw-semibold enphasis-text-dark">
          {lang.experience_subtitle?.text}
        </label>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 col-sm-12 d-flex align-items-center">
          <div className="timeline w-100 mb-5">
            <div className="timeline-item d-flex align-items-center">
              <div className="icon">
                <img src={owaspLogo} alt="OWASP logo" />
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
                <img src={frontendIcon} alt="Frontend Mentor logo" />
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
                <img src={htmxLogo} alt="HTMX logo" />
              </div>
              <div className="timeline-content w-100">
                <label className="fw-semibold text-white">2020 - 2024</label>
                <h3>{lang.about_description_title?.text}.</h3>
                <p>{lang.university?.text}. - El Salvador.</p>
              </div>
            </div>
            <div className="timeline-item d-flex align-items-center">
              <div className="icon">
                <img src={pcLogo} alt="PC Gaming logo" />
              </div>
              <div className="timeline-content w-100">
                <label className="fw-semibold text-white">
                  {lang.mutual_fund_time?.text}
                </label>
                <h3>{lang.mutual_fund_job?.text}</h3>
                <p>{lang.mutual_fund?.text} - El Salvador.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center lottie-container">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: dataSecurityLottie,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
