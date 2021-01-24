import { useTasks } from "@/hooks";
import { useSnackbar } from "notistack";
import { useMutation } from "@apollo/client";
import { UPDATE_TASK } from "@work-project/graphql";
import { Checkbox, AddTask } from "@/components";
import { useSelectedProjectValue } from "@/context";

const Tasks = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { selectedProject } = useSelectedProjectValue();
  const { tasks, setTasks } = useTasks(selectedProject);

  const [archiveTask] = useMutation(UPDATE_TASK, {
    onError: error => enqueueSnackbar(error.message, { variant: "error" }),
    onCompleted: () => {
      enqueueSnackbar("The Task has been updated.", { variant: "success" });
      setTasks([...tasks]);
    },
  });

  const handleArchive = id => {
    archiveTask({
      variables: {
        id: id,
        updateTaskInput: {
          isArchived: true,
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
            <Checkbox id={task.id} onClick={() => handleArchive(task.id)} />
            <span>{task.name}</span>
          </li>
        ))}
      </ul>
      <AddTask />
    </div>
  );
};

export default Tasks;
