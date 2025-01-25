import { NavLink } from "react-router-dom";

function ProjectBtn() {
  return (
    <div>
      <NavLink to="/about-us" className="project-link">
        <span className="project-btn">About this project</span>
      </NavLink>
    </div>
  );
}

export default ProjectBtn;
