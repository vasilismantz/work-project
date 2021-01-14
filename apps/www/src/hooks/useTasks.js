import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "@work-project/graphql";

const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);
  // const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    const { data, loading, error, refetch } = useQuery(GET_TASKS);
    if (loading) return "Loading";
    if (error) return `Error! ${error.message}`;
    setTasks(...data.tasks);
    return tasks;
  }, []);
};

export default useTasks;
