import React from "react";

function ProjectItem({ name, about, technologies }) {
  technologies = technologies.map((tech) => {
    return <span key={tech}>{tech}</span>;
  });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies}
      </div>
    </div>
  );
}

export default ProjectItem;
