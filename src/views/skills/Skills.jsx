import htmlIcon from "../../assets/img/svg/html.svg";
import cssIcon from "../../assets/img/svg/css.svg";
import javaScriptIcon from "../../assets/img/svg/javascript.svg";
import bootstrapIcon from "../../assets/img/svg/bootstrap.svg";
import tailwindIcon from "../../assets/img/svg/tailwind.svg";
import reactIcon from "../../assets/img/svg/react.svg";
import angularIcon from "../../assets/img/svg/angular.svg";
import expressIcon from "../../assets/img/svg/express.svg";
import csharpIcon from "../../assets/img/svg/csharp.svg";
import laravelIcon from "../../assets/img/svg/laravel.svg";
import mysqlIcon from "../../assets/img/svg/mysql.svg";
import postgresqlIcon from "../../assets/img/svg/postgresql.svg";
import sqlsrvrIcon from "../../assets/img/svg/sqlsrvr.svg";
import gitIcon from "../../assets/img/svg/git.svg";
import figmaIcon from "../../assets/img/svg/figma.svg";
import swaggerIcon from "../../assets/img/svg/swagger.svg";
import postmanIcon from "../../assets/img/svg/postman.svg";
import trelloIcon from "../../assets/img/svg/trello.svg";
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
      icon: angularIcon,
      name: "Angular",
      color: "var(--angular-color)",
    },
  ];

  const backendSkills = [
    {
      icon: expressIcon,
      name: "Express.js",
      color: "var(--express-color)",
    },
    {
      icon: laravelIcon,
      name: "Laravel",
      color: "var(--laravel-color)",
    },
    {
      icon: csharpIcon,
      name: "C#",
      color: "var(--csharp-color)",
    },
    {
      icon: mysqlIcon,
      name: "MySQL",
      color: "var(--mysql-color)",
    },
    {
      icon: postgresqlIcon,
      name: "PostgreSQL",
      color: "var(--postgresql-color)",
    },
    {
      icon: sqlsrvrIcon,
      name: "SQL Server",
      color: "var(--sqlsrvr-color)",
    },
  ];

  const otherSkills = [
    {
      icon: gitIcon,
      name: "Git",
      color: "var(--git-color)",
    },
    {
      icon: figmaIcon,
      name: "Figma",
      color: "var(--figma-color)",
    },
    {
      icon: swaggerIcon,
      name: "Swagger",
      color: "var(--swagger-color)",
    },
    {
      icon: postmanIcon,
      name: "Postman",
      color: "var(--postman-color)",
    },
    {
      icon: trelloIcon,
      name: "Trello",
      color: "var(--trello-color)",
    },
  ];

  const renderSkillSet = (skills) => (
    <div className="row justify-content-center align-items-center">
      {skills.map((skill, index) => (
        <div key={index} className="col-4 col-lg-3 mb-3 text-center">
          <img
            src={skill.icon}
            alt={`${skill.name} icon`}
            width={100}
            style={{ aspectRatio: "1/1" }}
          />
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
              <div className="carousel-item active mb-4">
                <h5 className="fw-semibold enphasis-text mb-4 d-flex w-100 justify-content-center">
                  {lang.frontend_skills?.text}
                </h5>
                {renderSkillSet(frontendSkills)}
              </div>
              <div className="carousel-item mb-4">
                <h5 className="fw-semibold enphasis-text mb-4 d-flex w-100 justify-content-center">
                  {lang.backend_skills?.text}
                </h5>
                {renderSkillSet(backendSkills)}
              </div>
              <div className="carousel-item mb-4">
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

            <div className="carousel-indicators mt-5">
              <button
                type="button"
                data-bs-target="#skillsCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#skillsCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#skillsCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
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
