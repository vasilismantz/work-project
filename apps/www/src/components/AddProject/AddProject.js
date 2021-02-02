import { useState } from "react";
import { useProjectsValue } from "@/context";
import { useMutation } from "@apollo/client";
import { ADD_PROJECT } from "@work-project/graphql";
import { useSnackbar } from "notistack";

const AddProject = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [show, setShow] = useState(false);
  const [projectName, setProjectName] = useState("");
  const { projects, setProjects } = useProjectsValue();

  const [addProject, { data }] = useMutation(ADD_PROJECT, {
    variables: {
      addProjectInput: {
        name: projectName,
        color: "white",
      },
    },
    onError: error => enqueueSnackbar(error.message, { variant: "error" }),
    onCompleted: data => {
      enqueueSnackbar("Project has been added.", { variant: "success" });
      setProjects([...projects, data.addProject]);
      setProjectName("");
      setShow(false);
    },
  });

  return (
    <div className="add-project">
      {show && (
        <div className="add-project__input">
          <input
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
            className="add-project__name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
          >
            Add Project
          </button>
          <span className="add-project__cancel" onClick={() => setShow(false)}>
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        // aria-label="Add Project"
        className="add-project__text"
        onClick={() => setShow(!show)}
        // role="button"
        // tabIndex={0}
      >
        Add Project
      </span>
    </div>
  );
};

export default AddProject;
