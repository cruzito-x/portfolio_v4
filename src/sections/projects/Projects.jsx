import { useState, useRef, useEffect } from "react";
import { projectsData, projects } from "../../assets/data/Portfolio";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const carouselRef = useRef(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    if (selectedCategory === "all" && carouselRef.current) {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft += 10;
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [selectedCategory]);

  return (
    <div className="container p-5 h-100" id="projects">
      <div className="text-black text-center mt-5">
        <h1 className="fw-semibold">Projects</h1>
        <label className="fw-semibold dark-enphasis-text">
          Some of the Notable Projects I have Worked On
        </label>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-5">
        {projects.map((category) => (
          <label
            key={category.name}
            className={`text-primary text-decoration-none cursor-pointer mx-2 ${
              selectedCategory === category.name
                ? "btn btn-primary text-white"
                : ""
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          </label>
        ))}
      </div>

      {selectedCategory === "all" ? (
        <div
          className="d-flex overflow-hidden mt-3"
          style={{
            scrollBehavior: "smooth",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
          }}
          ref={carouselRef}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card border-0 h-100 mx-2"
              style={{ minWidth: "300px", maxWidth: "300px" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="card-img-top rounded mb-3"
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text" style={{ whiteSpace: "normal" }}>
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
            <div key={project.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card border-0 h-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top rounded mb-3"
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
