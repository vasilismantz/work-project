import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_TASKS, UPDATE_TASK } from "@work-project/graphql";
import { isEmpty } from "lodash";
import { useTasks } from "@/hooks";
import { useSnackbar } from "notistack";
import { Checkbox } from "@/components";

const Tasks = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { loading, error, data } = useQuery(GET_TASKS, {
    onError: error => enqueueSnackbar(error.message, { variant: "error" }),
  });

  console.log(data);

  const handleArchive = ({ id }) => {
    archiveTask({
      variables: {
        updateTaskInput: {
          id,
          archived,
        },
      },
    });
  };

  let projectName = "";

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {data &&
          data.tasks.map(task => (
            <li key={`${task.id}`}>
              <Checkbox id={task.id} onClick={handleArchive} />
              <span>{task.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Tasks;
