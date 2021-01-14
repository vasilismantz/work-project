import { useState, useEffect } from "react";
import { useProjects } from "@/hooks";
import { useMutation, useQuery } from "@apollo/client";
import { GET_CATEGORIES, REMOVE_CATEGORY } from "@work-project/graphql";
import { Delete } from "@material-ui/icons";
import { useSnackbar } from "notistack";

const Projects = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [showConfirm, setShowConfirm] = useState(false);

  const { data, loading, error, refetch } = useQuery(GET_CATEGORIES, {
    onError: error => enqueueSnackbar(error.message, { variant: "error" }),
  });

  const [removeProject, { loading: removeLoading }] = useMutation(
    REMOVE_CATEGORY,
    {
      onCompleted: () => {
        refetch();
        enqueueSnackbar("Project removed successfuly.", { variant: "success" });
      },
      onError: error => enqueueSnackbar(error.message, { variant: "error" }),
    }
  );

  const handleRemoveProject = id => {
    removeProject({ variables: { id } });
  };

  console.log(data);

  return data ? (
    data.categories.map(project => {
      return (
        <li key={project.id} className="sidebar__project">
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
    })
  ) : (
    <></>
  );
};

export default Projects;
