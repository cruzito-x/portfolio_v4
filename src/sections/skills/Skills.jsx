import htmlIcon from "../../assets/icons/skills/html.svg";
import cssIcon from "../../assets/icons/skills/css.svg";
import javaScriptIcon from "../../assets/icons/skills/javascript.svg";
import bootstrapIcon from "../../assets/icons/skills/bootstrap.svg";
import reactIcon from "../../assets/icons/skills/react.svg";
import angularLogo from "../../assets/icons/skills/angular.svg";
import expressLogo from "../../assets/icons/skills/node.svg";
import laravelLogo from "../../assets/icons/skills/laravel.svg";
import mysqlLogo from "../../assets/icons/skills/mysql.svg";
import gitLogo from "../../assets/icons/skills/git.svg";
import figmaLogo from "../../assets/icons/skills/figma.svg";
import swaggerLogo from "../../assets/icons/skills/swagger.svg";
import "./styles/skills.css";

const Skills = () => {
  return (
    <div className="container p-5 h-100" id="skills">
      <div className="text-black text-center mt-5">
        <h1>Skills</h1>
        <label className="fw-semibold dark-enphasis-text">
          Skills I Utilize to Effectively Complete Tasks
        </label>
      </div>
      <div className="row mt-5">
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img src={htmlIcon} alt="HTML logo" /> <br />
            <label className="html-text fw-semibold fs-6 mt-3">HTML</label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img src={cssIcon} alt="CSS logo" /> <br />
            <label className="css-text fw-semibold fs-6 mt-3">CSS</label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img src={javaScriptIcon} alt="JavaScript logo" /> <br />
            <label className="javascript-text fw-semibold fs-6 mt-3">
              JavaScript
            </label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img src={bootstrapIcon} alt="Bootstrap logo" /> <br />
            <label className="bootstrap-text fw-semibold fs-6 mt-3">
              Bootstrap
            </label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img src={reactIcon} alt="React.js logo" /> <br />
            <label className="react-text fw-semibold fs-6 mt-3">React.js</label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img src={angularLogo} alt="Angular logo" /> <br />
            <label className="angular-text fw-semibold fs-6 mt-3">
              Angular
            </label>
          </>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img src={expressLogo} alt="Express.js logo" /> <br />
            <label className="express-text fw-semibold fs-6 mt-3">
              Express.js
            </label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img src={laravelLogo} alt="Laravel logo" /> <br />
            <label className="laravel-text fw-semibold fs-6 mt-3">
              Laravel
            </label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img src={mysqlLogo} alt="MySQL logo" /> <br />
            <label className="mysql-text fw-semibold fs-6 mt-3">MySQL</label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img src={gitLogo} className="rounded" alt="Git logo" /> <br />
            <label className="git-text fw-semibold fs-6 mt-3">Git</label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img src={figmaLogo} alt="Figma logo" /> <br />
            <label className="figma-text fw-semibold fs-6 mt-3">Figma</label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img src={swaggerLogo} alt="Swagger logo" /> <br />
            <label className="swagger-text fw-semibold fs-6 mt-3">
              Swagger
            </label>
          </>
        </div>
      </div>
    </div>
  );
};

export default Skills;
