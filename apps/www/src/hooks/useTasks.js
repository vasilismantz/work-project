import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY_BY_NAME, GET_TASKS } from "@work-project/graphql";
import { useSnackbar } from "notistack";

const useTasks = selectedProject => {
  const { enqueueSnackbar } = useSnackbar();
  const [tasks, setTasks] = useState([]);
  // const [archivedTasks, setArchivedTasks] = useState([]);

  let variables = {
    withTasks: true,
    name: selectedProject.name,
  };

  let query = GET_CATEGORY_BY_NAME;

  let helper = () => {
    setTasks(data.categoryByName?.tasks);
  };

  if (selectedProject.name === "INBOX") {
    query = GET_TASKS;
    variables = {};
    helper = () => {
      setTasks(data.tasks);
    };
  }

  const { data, error, refetch } = useQuery(query, {
    variables,
    onError: error => enqueueSnackbar(error.message, { variant: "error" }),
    onCompleted: () => helper(),
  });

  useEffect(() => {
    refetch();
  }, [tasks]);

  return { tasks, setTasks };
};

export default useTasks;
