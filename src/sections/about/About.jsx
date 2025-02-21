import profilePhoto from "../../assets/img/me.png";

const About = () => {
  return (
    <div className="container p-5 h-100" id="about">
      <div className="row mt-5 align-items-center">
        <div className="text-black text-center">
          <h1 className="fw-semibold">About Me</h1>
          <label className="fw-semibold enphasis-text-dark">
            {" "}
            Who&apos;s David Cruz?{" "}
          </label>
        </div>
        <div className="col-lg-6 col-sm-12 mt-5">
          <img
            src={profilePhoto}
            className="w-100 rounded shadow"
            alt="David's Photo"
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <p className="text-black mt-3">
            I am currently 22 years old, I am a graduate student of
            <span className="fw-semibold enphasis-text">
              {" "}
              Systems and Computer Engineering
            </span>
            , I have experience as{" "}
            <span className="fw-semibold enphasis-text">Web Designer</span>{" "}
            using design tools such as Figma and as{" "}
            <span className="fw-semibold enphasis-text">Software Engineer</span>{" "}
            I have experience in web application development using
            JavaScript-based technologies such as React.js, Node.js and
            Express.js, and Php-based such as Laravel, I also handle various
            database engines such as MySQL, SQL Server and PostgreSQL for{" "}
            <span className="fw-semibold enphasis-text">development</span> and{" "}
            <span className="fw-semibold enphasis-text">management</span> of{" "}
            <span className="fw-semibold enphasis-text">
              relational database
            </span>
            .
          </p>

          <p className="text-black">
            I am currently pursuing a pre-specialty in{" "}
            <span className="fw-semibold enphasis-text">
              Cybersecurity Engineering
            </span>{" "}
            at the{" "}
            <span className="fw-semibold enphasis-text">
              Universidad Tecnológica de El Salvador
            </span>
            .
          </p>

          <p className="text-black">
            Beyond my professional life, I am also an{" "}
            <span className="fw-semibold enphasis-text">
              occasional cosplayer
            </span>
            , a creative passion that allows me to bring my favorite characters
            to life through crafting and design. This hobby enhances my
            creativity and problem-solving skills, which I also bring to my work
            as an engineer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
