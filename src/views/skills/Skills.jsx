import htmlIcon from "../../assets/img/svg/html.svg";
import cssIcon from "../../assets/img/svg/css.svg";
import javaScriptIcon from "../../assets/img/svg/javascript.svg";
import bootstrapIcon from "../../assets/img/svg/bootstrap.svg";
import tailwindIcon from "../../assets/img/svg/tailwind.svg";
import reactIcon from "../../assets/img/svg/react.svg";
import angularLogo from "../../assets/img/svg/angular.svg";
import expressLogo from "../../assets/img/svg/express.svg";
import laravelLogo from "../../assets/img/svg/laravel.svg";
import mysqlLogo from "../../assets/img/svg/mysql.svg";
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
      level: lang.intermediate?.text,
    },
    {
      icon: cssIcon,
      name: "CSS",
      color: "var(--css-color)",
      level: lang.junior?.text,
    },
    {
      icon: javaScriptIcon,
      name: "JavaScript",
      color: "var(--javascript-color)",
      level: lang.junior?.text,
    },
    {
      icon: bootstrapIcon,
      name: "Bootstrap",
      color: "var(--bootstrap-color)",
      level: lang.intermediate?.text,
    },
    {
      icon: tailwindIcon,
      name: "Tailwind CSS",
      color: "var(--tailwind-color)",
      level: lang.junior?.text,
    },
    {
      icon: reactIcon,
      name: "React.js",
      color: "var(--react-color)",
      level: lang.junior?.text,
    },
    {
      icon: angularLogo,
      name: "Angular",
      color: "var(--angular-color)",
      level: lang.junior?.text,
    },
  ];

  const backendSkills = [
    {
      icon: expressLogo,
      name: "Express.js",
      color: "var(--express-color)",
      level: lang.junior?.text,
    },
    {
      icon: laravelLogo,
      name: "Laravel",
      color: "var(--laravel-color)",
      level: lang.junior?.text,
    },
    {
      icon: mysqlLogo,
      name: "MySQL",
      color: "var(--mysql-color)",
      level: lang.junior?.text,
    },
    {
      icon: sqlsrvrLogo,
      name: "SQL Server",
      color: "var(--sqlsrvr-color)",
      level: lang.junior?.text,
    },
  ];

  const otherSkills = [
    {
      icon: gitLogo,
      name: "Git",
      color: "var(--git-color)",
      level: lang.intermediate?.text,
    },
    {
      icon: figmaLogo,
      name: "Figma",
      color: "var(--figma-color)",
      level: lang.junior?.text,
    },
    {
      icon: swaggerLogo,
      name: "Swagger",
      color: "var(--swagger-color)",
      level: lang.junior?.text,
    },
  ];

  const renderSkillSet = (skills) => (
    <div className="row justify-content-center align-items-center">
      {skills.map((skill, index) => (
        <div key={index} className="col-md-3 col-sm-4 mb-3 text-center">
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
                {renderSkillSet(frontendSkills)}
              </div>
              <div className="carousel-item">
                {renderSkillSet(backendSkills)}
              </div>
              <div className="carousel-item">{renderSkillSet(otherSkills)}</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <p className="text-black">{lang.skills_text?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
