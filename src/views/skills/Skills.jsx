import htmlIcon from "../../assets/img/svg/html.svg";
import cssIcon from "../../assets/img/svg/css.svg";
import javaScriptIcon from "../../assets/img/svg/javascript.svg";
import bootstrapIcon from "../../assets/img/svg/bootstrap.svg";
import tailwindIcon from "../../assets/img/svg/tailwind.svg";
import reactIcon from "../../assets/img/svg/react.svg";
import angularLogo from "../../assets/img/svg/angular.svg";
import expressLogo from "../../assets/img/svg/express.svg";
import csharpLogo from "../../assets/img/svg/csharp.svg";
import laravelLogo from "../../assets/img/svg/laravel.svg";
import mysqlLogo from "../../assets/img/svg/mysql.svg";
import postgresqlLogo from "../../assets/img/svg/postgresql.svg";
import sqlsrvrLogo from "../../assets/img/svg/sqlsrvr.svg";
import gitLogo from "../../assets/img/svg/git.svg";
import figmaLogo from "../../assets/img/svg/figma.svg";
import swaggerLogo from "../../assets/img/svg/swagger.svg";
import "./styles/skills.css";

const Skills = ({ lang }) => {
  const frontendSkills = [
    {
      icon: htmlIcon,
      name: "HTML",
      color: "var(--html-color)",
    },
    {
      icon: cssIcon,
      name: "CSS",
      color: "var(--css-color)",
    },
    {
      icon: javaScriptIcon,
      name: "JavaScript",
      color: "var(--javascript-color)",
    },
    {
      icon: bootstrapIcon,
      name: "Bootstrap",
      color: "var(--bootstrap-color)",
    },
    {
      icon: tailwindIcon,
      name: "Tailwind",
      color: "var(--tailwind-color)",
    },
    {
      icon: reactIcon,
      name: "React.js",
      color: "var(--react-color)",
    },
    {
      icon: angularLogo,
      name: "Angular",
      color: "var(--angular-color)",
    },
  ];

  const backendSkills = [
    {
      icon: expressLogo,
      name: "Express.js",
      color: "var(--express-color)",
    },
    {
      icon: laravelLogo,
      name: "Laravel",
      color: "var(--laravel-color)",
    },
    {
      icon: csharpLogo,
      name: "C Sharp",
      color: "var(--csharp-color)",
    },
    {
      icon: mysqlLogo,
      name: "MySQL",
      color: "var(--mysql-color)",
    },
    {
      icon: postgresqlLogo,
      name: "PostgreSQL",
      color: "var(--postgresql-color)",
    },
    {
      icon: sqlsrvrLogo,
      name: "SQL Server",
      color: "var(--sqlsrvr-color)",
    },
  ];

  const otherSkills = [
    {
      icon: gitLogo,
      name: "Git",
      color: "var(--git-color)",
    },
    {
      icon: figmaLogo,
      name: "Figma",
      color: "var(--figma-color)",
    },
    {
      icon: swaggerLogo,
      name: "Swagger",
      color: "var(--swagger-color)",
    },
  ];

  const renderSkillSet = (skills) => (
    <div className="row justify-content-center align-items-center">
      {skills.map((skill, index) => (
        <div key={index} className="col-4 col-lg-3 mb-3 text-center">
          <img src={skill.icon} alt={`${skill.name} logo`} />
          <label
            className="fw-semibold mt-1 mb-2 d-block"
            style={{ color: skill.color }}
          >
            {skill.name}
          </label>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container p-5 h-100" id="skills">
      <div className="text-black text-center mt-5">
        <h1 className="fw-semibold">{lang.skills?.text}</h1>
        <label className="fw-semibold enphasis-text-dark">
          {lang.skills_subtitle?.text}
        </label>
      </div>
      <div className="row mt-5 mb-3">
        <div className="col-md-6 col-sm-12" style={{ minHeight: "310px" }}>
          <div
            id="skillsCarousel"
            className="carousel slide mt-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h5 className="fw-semibold enphasis-text mb-4 d-flex w-100 justify-content-center">
                  {lang.frontend_skills?.text}
                </h5>
                {renderSkillSet(frontendSkills)}
              </div>
              <div className="carousel-item">
                <h5 className="fw-semibold enphasis-text mb-4 d-flex w-100 justify-content-center">
                  {lang.backend_skills?.text}
                </h5>
                {renderSkillSet(backendSkills)}
              </div>
              <div className="carousel-item">
                <h5 className="fw-semibold enphasis-text mb-4 d-flex w-100 justify-content-center">
                  {lang.complementary_tools?.text
                    .toLowerCase()
                    .split(" ")
                    .map(
                      (tools) => tools.charAt(0).toUpperCase() + tools.slice(1)
                    )
                    .join(" ")}
                </h5>
                {renderSkillSet(otherSkills)}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <p className="text-black">
            {lang.skills_text?.text}
            <span className="fw-semibold enphasis-text">
              {lang.frontend?.text}
            </span>
            {", "}
            <span className="fw-semibold enphasis-text">
              {lang.backend?.text}{" "}
            </span>
            {lang.and?.text}{" "}
            <span className="fw-semibold enphasis-text">
              {lang.complementary_tools?.text}
            </span>
            {lang.skills_text_backfill?.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
