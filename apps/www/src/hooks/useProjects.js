import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "@work-project/graphql";
import { useSnackbar } from "notistack";

const useProjects = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [projects, setProjects] = useState([]);

  const { refetch } = useQuery(GET_PROJECTS, {
    onError: error => enqueueSnackbar(error.message, { variant: "error" }),
    onCompleted: data => {
      setProjects(data.projects);
    },
  });

  useEffect(() => {
    refetch();
  }, [projects]);

  return { projects, setProjects };
};

export default useProjects;
