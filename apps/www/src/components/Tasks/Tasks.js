import React, { useState, useEffect } from "react";
import { useTasks } from "@/hooks";
import { useSnackbar } from "notistack";
import { Checkbox, AddTask } from "@/components";
import { useSelectedProjectValue } from "@/context";

const Tasks = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { selectedProject } = useSelectedProjectValue();
  const { tasks, setTasks } = useTasks(selectedProject);

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

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{selectedProject.name}</h2>

      <ul className="tasks__list">
        {tasks?.map(task => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} onClick={handleArchive} />
            <span>{task.name}</span>
          </li>
        ))}
      </ul>
      <AddTask />
    </div>
  );
};

export default Tasks;
