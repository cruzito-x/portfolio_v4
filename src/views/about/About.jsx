import profilePhoto from "../../assets/img/me.webp";

const About = ({ lang }) => {
  return (
    <div className="container p-5 h-100" id="about">
      <div className="row mt-5 align-items-center">
        <div className="text-black text-center">
          <h1 className="fw-semibold">{lang.about_me?.text}</h1>
          <label className="fw-semibold enphasis-text-dark">
            {lang.about_subtitle?.text}
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
            {lang.about_description?.text}
            <span className="fw-semibold enphasis-text">
              {lang.about_description_title?.text}
            </span>
            {lang.about_experience_backfill?.text}
            <span className="fw-semibold enphasis-text">
              {lang.about_secondary_title?.text}
            </span>
            {lang.about_web_designer_title?.text}
            <span className="fw-semibold enphasis-text">
              {lang.title?.text}
            </span>
            {lang.about_experience_description_backfill?.text}
            <span className="fw-semibold enphasis-text">
              {lang.development?.text}
            </span>{" "}
            {lang.and?.text}
            <span className="fw-semibold enphasis-text">
              {lang.management?.text}
            </span>{" "}
            {lang.of?.text}
            <span className="fw-semibold enphasis-text">
              {lang.relational_databases?.text}
            </span>
            .
          </p>

          <p className="text-black">
            {lang.currently_pre_specialty?.text}
            <span className="fw-semibold enphasis-text">
              {lang.ai_especiality?.text}
            </span>
            {lang.at_the?.text}
            <span className="fw-semibold enphasis-text">
              {lang.university?.text}
            </span>
            .
          </p>

          <p className="text-black">
            {lang.cosplayer_text?.text}
            <span className="fw-semibold enphasis-text">
              {lang.cosplayer_title?.text}
            </span>
            {lang.cosplay_description?.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
