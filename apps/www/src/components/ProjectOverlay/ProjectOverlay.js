import { useProjectsValue } from "@/context";

const ProjectOverlay = ({
  setProject,
  showProjectOverlay,
  setShowProjectOverlay,
}) => {
  const { projects } = useProjectsValue();

  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay">
        <ul className="project-overlay__list">
          {projects.map(project => (
            <li key={project.id}>
              <div
                onClick={() => {
                  setProject(project.id);
                  setShowProjectOverlay(false);
                }}
              >
                {project.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default ProjectOverlay;
