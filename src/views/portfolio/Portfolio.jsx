import { useState, useRef, useEffect } from "react";
import { getProjectsData, getFilters } from "../../assets/data/Portfolio";

const Projects = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState(lang.all?.text);
  const carouselRef = useRef(null);
  const projectsData = getProjectsData(lang);
  const filters = getFilters(lang);

  useEffect(() => {
    if (lang.all?.text) {
      setSelectedCategory(lang.all.text);
    }
  }, [lang.all?.text]);

  const filteredProjects =
    selectedCategory === lang.all?.text
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  const infiniteProjects = [...filteredProjects, ...filteredProjects];

  useEffect(() => {
    if (selectedCategory === lang.all?.text && carouselRef.current) {
      const carousel = carouselRef.current;
      let scrollAmount = 0;

      const interval = setInterval(() => {
        if (carousel) {
          carousel.scrollLeft += 2;
          scrollAmount += 2;

          if (scrollAmount >= carousel.scrollWidth / 2) {
            carousel.scrollLeft = 0;
            scrollAmount = 0;
          }
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [selectedCategory]);

  return (
    <div className="container p-5 h-100" id="portfolio">
      <div className="text-black text-center mt-5">
        <h1 className="fw-semibold">{lang.portfolio?.text}</h1>
        <label className="fw-semibold enphasis-text-dark">
          {lang.projects_subtitle?.text}
        </label>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-5">
        {filters.map((category) => (
          <label
            key={category.name}
            className={`text-primary text-decoration-none cursor-pointer mx-2 ${
              selectedCategory === category.name
                ? "btn btn-primary text-white"
                : ""
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </label>
        ))}
      </div>

      {selectedCategory === lang.all?.text ? (
        <div
          className="d-flex overflow-hidden mt-3"
          style={{
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
          }}
          ref={carouselRef}
        >
          {infiniteProjects.map((project, index) => (
            <div
              key={index}
              className="card border-0 h-100 mx-2"
              style={{ minWidth: "300px", maxWidth: "300px" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="card-img-top rounded"
              />
              <div className="card-body ps-0 pe-0">
                <h5 className="card-title text-black">
                  {project.title}
                  <br />
                  <span
                    className="badge fw-normal w-auto"
                    style={{
                      fontSize: "11px",
                      border: `1px solid ${project.category_color}`,
                      color: project.category_color,
                    }}
                  >
                    {project.category}
                  </span>
                </h5>
                <p
                  className="card-text text-black"
                  style={{ whiteSpace: "normal" }}
                >
                  {project.description}
                </p>
                <div className="d-flex flex-wrap">
                  {project.techs.map((tech) => (
                    <span
                      key={tech.id}
                      className="badge fw-normal me-1 mb-1 d-flex align-items-center"
                      style={{
                        border: `1px solid ${tech.color}`,
                        color: tech.color,
                      }}
                    >
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="row mt-3 justify-content-center">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="card border-0 h-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top rounded"
                />
                <div className="card-body ps-0 pe-0">
                  <h5 className="card-title text-black">{project.title}</h5>
                  <p className="card-text text-black">{project.description}</p>
                  <div className="d-flex">
                    {project.techs.map((tech) => (
                      <span
                        key={tech.id}
                        className="badge fw-normal me-1 mb-1 d-flex align-items-center"
                        style={{
                          border: `1px solid ${tech.color}`,
                          color: tech.color,
                        }}
                      >
                        {tech.icon} {tech.name}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 d-flex align-items-center">
                    {project.deploy_url && (
                      <a
                        href={project.deploy_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary me-2"
                      >
                        <i className="bx bx-rocket me-1"></i>
                        {lang.deploy?.text}
                      </a>
                    )}
                    {project.source_url && (
                      <a
                        href={project.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary me-2"
                      >
                        <i className="bx bxl-github me-1"></i>
                        {lang.source_code?.text}
                      </a>
                    )}
                    {project.extension_url && (
                      <a
                        href={project.extension_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary me-2"
                      >
                        <i className="bx bxl-microsoft me-1"></i>
                        {lang.extension_source?.text}
                      </a>
                    )}
                    {project.design_url && (
                      <a
                        href={project.design_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary"
                      >
                        <i className="bx bxl-figma"></i>
                        {lang.design?.text}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
