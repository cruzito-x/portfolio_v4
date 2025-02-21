import profilePhoto from "../../assets/img/me.png";

const About = () => {
  return (
    <div className="container p-5 h-100" id="about">
      <div className="row mt-5 align-items-center">
        <div className="text-black text-center">
          <h1 className="fw-semibold">About Me</h1>
          <label className="fw-semibold dark-enphasis-text">
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
            I&apos;m currently 22 years old, I&apos;m a graduate student of
            <span className="fw-semibold enphasis-text">
              {" "}
              Systems and Computer Engineering
            </span>
            , I have experience as a{" "}
            <span className="fw-semibold enphasis-text">Designer</span> and{" "}
            <span className="fw-semibold enphasis-text">Software Engineer</span>{" "}
            using various design tools such as Figma. As for development, I have
            experience in web application development using technologies such as
            JavaScript using React.js, Node.js and Express.js, Php using Laravel
            and MySQL, SQL Server and PostgreSQL to{" "}
            <span className="fw-semibold enphasis-text">
              relational database development
            </span>
            .
          </p>

          <p className="text-black">
            I&apos;m currently pursuing a pre-specialty in{" "}
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
            Beyond my professional life, I&apos;m also an{" "}
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
