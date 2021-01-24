import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "@work-project/graphql";
import { useSnackbar } from "notistack";

const useTasks = selectedProject => {
  const { enqueueSnackbar } = useSnackbar();
  const [tasks, setTasks] = useState([]);

  const { data, error, refetch } = useQuery(GET_TASKS, {
    variables: {
      isArchived: false,
      withTasks: true,
      categoryId: selectedProject.id,
    },
    onError: error => enqueueSnackbar(error.message, { variant: "error" }),
    onCompleted: () => setTasks(data.tasks),
  });

  useEffect(() => {
    refetch();
  }, [tasks]);

  return { tasks, setTasks };
};

export default useTasks;
