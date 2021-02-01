import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "@work-project/graphql";
import { useSnackbar } from "notistack";
import moment from "moment";

const useTasks = selectedProject => {
  const { enqueueSnackbar } = useSnackbar();
  const [tasks, setTasks] = useState([]);

  let variables;

  if (selectedProject.name === "NEXT_7") {
    variables = {
      isArchived: false,
      withTasks: true,
      date: moment().add(1, "weeks").startOf("isoWeek"),
    };
  } else if (selectedProject.name === "TODAY") {
    variables = {
      isArchived: false,
      withTasks: true,
      date: moment().endOf("day"),
    };
  } else {
    variables = {
      isArchived: false,
      withTasks: true,
      categoryId: selectedProject.id,
    };
  }
  const { refetch } = useQuery(GET_TASKS, {
    variables: variables,
    onError: error => enqueueSnackbar(error.message, { variant: "error" }),
    onCompleted: data => setTasks(data.tasks),
  });

  useEffect(() => {
    refetch();
  }, [tasks]);

  return { tasks, setTasks };
};

export default useTasks;
