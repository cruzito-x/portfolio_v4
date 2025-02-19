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
            <img src="../../assets/icons/skills/html.svg" alt="HTML logo" />{" "}
            <br />
            <label className="html-text fw-semibold fs-6 mt-3">HTML</label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img src="../../assets/icons/skills/css.svg" alt="CSS logo" />{" "}
            <br />
            <label className="css-text fw-semibold fs-6 mt-3">CSS</label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img
              src="../../assets/icons/skills/javascript.svg"
              alt="JavaScript logo"
            />{" "}
            <br />
            <label className="javascript-text fw-semibold fs-6 mt-3">
              JavaScript
            </label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img
              src="../../assets/icons/skills/bootstrap.svg"
              alt="Bootstrap logo"
            />{" "}
            <br />
            <label className="bootstrap-text fw-semibold fs-6 mt-3">
              Bootstrap
            </label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img
              src="../../assets/icons/skills/react.svg"
              alt="React.js logo"
            />{" "}
            <br />
            <label className="react-text fw-semibold fs-6 mt-3">React.js</label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img
              src="../../assets/icons/skills/angular.svg"
              alt="Angular logo"
            />{" "}
            <br />
            <label className="angular-text fw-semibold fs-6 mt-3">
              Angular
            </label>
          </>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img
              src="../../assets/icons/skills/node.svg"
              alt="Express.js logo"
            />{" "}
            <br />
            <label className="express-text fw-semibold fs-6 mt-3">
              Express.js
            </label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img
              src="../../assets/icons/skills/laravel.svg"
              alt="Laravel logo"
            />{" "}
            <br />
            <label className="laravel-text fw-semibold fs-6 mt-3">
              Laravel
            </label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img src="../../assets/icons/skills/mysql.svg" alt="MySQL logo" />{" "}
            <br />
            <label className="mysql-text fw-semibold fs-6 mt-3">MySQL</label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img
              src="../../assets/icons/skills/git.svg"
              className="rounded"
              alt="Git logo"
            />{" "}
            <br />
            <label className="git-text fw-semibold fs-6 mt-3">Git</label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img src="../../assets/icons/skills/figma.svg" alt="Figma logo" />{" "}
            <br />
            <label className="figma-text fw-semibold fs-6 mt-3">Figma</label>
          </>
        </div>
        <div className="col-md-2 col-sm-3 text-center">
          <>
            <img
              src="../../assets/icons/skills/swagger.svg"
              alt="Swagger logo"
            />{" "}
            <br />
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
