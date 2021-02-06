import { useTasks } from "@/hooks";
import { useSnackbar } from "notistack";
import { useMutation } from "@apollo/client";
import { UPDATE_TASK } from "@work-project/graphql";
import { Checkbox, AddTask, Center } from "@/components";
import { useSelectedProjectValue } from "@/context";
import { CircularProgress, NoSsr } from "@material-ui/core";
import moment from "moment";

const Tasks = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { selectedProject } = useSelectedProjectValue();
  const { tasks, setTasks, loading } = useTasks(selectedProject);

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

  if (!loading) {
    return (
      <div className="tasks" data-testid="tasks">
        <h2 data-testid="project-name">{selectedProject.name}</h2>

        <ul className="tasks__list">
          {tasks?.map(task => (
            <li key={`${task.id}`}>
              <Checkbox id={task.id} onClick={() => handleArchive(task.id)} />
              <span>{task.name}</span>
              <span className="task__date">
                {moment(task.date).format("Do MMM HH:mm")}
              </span>
            </li>
          ))}
        </ul>
        <AddTask />
      </div>
    );
  }

  return (
    <NoSsr>
      <div
        className="tasks"
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress
          style={{
            position: "absolute",
            top: "25%",
          }}
        />
      </div>
    </NoSsr>
  );
};

export default Tasks;
