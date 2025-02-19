import "./styles/experience.css";

const Experience = () => {
  return (
    <div className="container p-5 h-100" id="experience">
      <div className="text-black text-center">
        <h1>Experience & Education</h1>
        <label className="fw-semibold dark-enphasis-text">
          Companies I Have Worked With & My Education
        </label>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 col-sm-12">
          <div className="timeline">
            <div className="timeline-item d-flex align-items-center">
              <div className="icon">
                <img
                  src="src/assets/icons/dependencycheck.png"
                  alt="OWASP logo"
                />
              </div>
              <div className="timeline-content w-100">
                <label className="fw-semibold text-white">
                  March 2025 - In Progress
                </label>
                <h3>Cybersecurity Engineering Pre-especiality.</h3>
                <p>Universidad Tecnológica de El Salvador. - El Salvador.</p>
              </div>
            </div>
            <div className="timeline-item d-flex align-items-center">
              <div className="icon">
                <img
                  src="src/assets/icons/frontendmentor.png"
                  alt="Frontend Mentor logo"
                />
              </div>
              <div className="timeline-content w-100">
                <label className="fw-semibold text-white">
                  April 2023 - June 2024
                </label>
                <h3>Junior Software Developer.</h3>
                <p>CodeEye Inc. - Canadá / El Salvador.</p>
              </div>
            </div>
            <div className="timeline-item d-flex align-items-center">
              <div className="icon">
                <img src="src/assets/icons/htmx.png" alt="HTMX logo" />
              </div>
              <div className="timeline-content w-100">
                <label className="fw-semibold text-white">2020 - 2024</label>
                <h3>Systems and Computer Engineering.</h3>
                <p>Universidad Tecnológica de El Salvador. - El Salvador.</p>
              </div>
            </div>
            <div className="timeline-item d-flex align-items-center">
              <div className="icon">
                <img
                  src="src/assets/icons/pcgamingwiki.png"
                  alt="PC Gaming logo"
                />
              </div>
              <div className="timeline-content w-100">
                <label className="fw-semibold text-white">
                  February 2019 - August 2019
                </label>
                <h3>Technical Support Assistant</h3>
                <p>Caja Mutual de los Empleados del MINED. - El Salvador.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
          <img
            src="src/assets/img/stay-at-home.png"
            className="w-100 ms-5 ps-5"
            alt="Stay at Home"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
