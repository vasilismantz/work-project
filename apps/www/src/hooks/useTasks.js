import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY_BY_NAME } from "@work-project/graphql";
import { useSnackbar } from "notistack";

const useTasks = selectedProject => {
  const { enqueueSnackbar } = useSnackbar();
  const [tasks, setTasks] = useState([]);
  // const [archivedTasks, setArchivedTasks] = useState([]);

  let variables = {
    withTasks: true,
    name: selectedProject,
  };

  if (selectedProject === "INBOX") {
    variables = {
      withTasks: true,
    };
  }

  const { data, error } = useQuery(GET_CATEGORY_BY_NAME, {
    variables,
    onError: error => enqueueSnackbar(error.message, { variant: "error" }),
    onCompleted: () => setTasks(data.categoryByName?.tasks),
  });

  return { tasks, setTasks };
};

export default useTasks;
