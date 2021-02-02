import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { lodash } from "lodash";
import { REMOVE_PROJECT } from "@work-project/graphql";
import { useProjectsValue, useSelectedProjectValue } from "@/context";
import { Delete } from "@material-ui/icons";
import { useSnackbar } from "notistack";

const Projects = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();

  const { setSelectedProject } = useSelectedProjectValue();

  const [removeProject, { data, loading: removeLoading }] = useMutation(
    REMOVE_PROJECT,
    {
      onCompleted: data => {
        enqueueSnackbar("Project removed successfuly.", { variant: "success" });
        setSelectedProject("INBOX");
        setProjects([...projects]);
      },
      onError: error => enqueueSnackbar(error.message, { variant: "error" }),
    }
  );

  const handleRemoveProject = id => {
    removeProject({ variables: { id } });
  };

  return projects.map(project => {
    return (
      <li
        key={project.id}
        className="sidebar__project"
        onClick={() => setSelectedProject(project)}
      >
        <span className="sidebar__dot">•</span>
        <span className="sidebar__project-name">{project.name}</span>
        <span
          className="sidebar__project-delete"
          onClick={() => setShowConfirm(!showConfirm)}
        >
          <Delete />
          {showConfirm && (
            <div className="project-delete-modal">
              <div className="project-delete-modal__inner">
                <p>Are you sure you want to delete this project?</p>
                <button
                  type="button"
                  onClick={() => handleRemoveProject(project.id)}
                >
                  Delete
                </button>
                <span
                  tabIndex={0}
                  role="button"
                  onClick={() => {
                    setShowConfirm(!showConfirm);
                  }}
                >
                  Cancel
                </span>
              </div>
            </div>
          )}
        </span>
      </li>
    );
  });
};

export default Projects;
