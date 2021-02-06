import { useState } from "react";
import { useMutation } from "@apollo/client";
import moment from "moment";
import { ADD_TASK } from "@work-project/graphql";
import { useSelectedProjectValue } from "@/context";
import { useSnackbar } from "notistack";
import { DateRange, ListAlt } from "@material-ui/icons";
import { ProjectOverlay, TaskDate } from "@/components";
import useTasks from "../../hooks/useTasks";

const AddTask = ({
  showAddTaskMain = true,
  shouldShowMain = false,
  showQuickAddTask,
  setShowQuickAddTask,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const [task, setTask] = useState("");
  const [taskDate, setTaskDate] = useState(moment());
  const [project, setProject] = useState("");
  const [showMain, setShowMain] = useState(shouldShowMain);
  const [showProjectOverlay, setShowProjectOverlay] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);

  const { selectedProject } = useSelectedProjectValue();
  const { tasks, setTasks } = useTasks(selectedProject);

  const projectId = project || selectedProject.id || null;

  const [addTask, { data, error }] = useMutation(ADD_TASK, {
    variables: {
      addTaskInput: {
        name: task,
        date: taskDate,
        isArchived: false,
        projectId: projectId,
      },
      withProject: false,
    },
    onError: error => enqueueSnackbar(error.message, { variant: "error" }),
    onCompleted: data => {
      setTask("");
      setProject("");
      setTasks([...tasks]);
      setShowMain("");
      setShowProjectOverlay(false);
    },
  });

  const addTaskHandle = () => {
    task && addTask();
  };

  return (
    <div
      className={showQuickAddTask ? "add-task add-task__overlay" : "add-task"}
    >
      {showAddTaskMain && (
        <div
          className="add-task__shallow"
          onClick={() => setShowMain(!showMain)}
        >
          <span className="add-task__plus">+</span>
          <span className="add-task__text">Add Task</span>
        </div>
      )}

      {(showMain || showQuickAddTask) && (
        <div className="add-task__main">
          {showQuickAddTask && (
            <>
              <div>
                <h2 className="header">Quick Add Task</h2>
                <span
                  className="add-task__cancel-x"
                  onClick={() => {
                    setShowMain(false);
                    setShowProjectOverlay(false);
                    setShowQuickAddTask(false);
                  }}
                  tabIndex={0}
                  role="button"
                >
                  X
                </span>
              </div>
            </>
          )}
          <ProjectOverlay
            setProject={setProject}
            showProjectOverlay={showProjectOverlay}
            setShowProjectOverlay={setShowProjectOverlay}
          />
          <TaskDate
            taskDate={taskDate}
            setTaskDate={setTaskDate}
            showTaskDate={showTaskDate}
            setShowTaskDate={setShowTaskDate}
          />
          <input
            className="add-task__content"
            type="text"
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <button
            type="button"
            className="add-task__submit"
            onClick={() =>
              showQuickAddTask
                ? addTask() && setShowQuickAddTask(false)
                : addTaskHandle()
            }
          >
            Add Task
          </button>
          {!showQuickAddTask && (
            <span
              className="add-task__cancel"
              onClick={() => {
                setShowMain(false);
                setShowProjectOverlay(false);
              }}
            >
              Cancel
            </span>
          )}
          <span
            className="add-task__project"
            onClick={() => {
              setShowTaskDate(false);
              setShowProjectOverlay(!showProjectOverlay);
            }}
          >
            <ListAlt />
          </span>
          <span
            className="add-task__date"
            onClick={() => {
              setShowProjectOverlay(false);
              setShowTaskDate(!showTaskDate);
            }}
          >
            <DateRange />
          </span>
        </div>
      )}
    </div>
  );
};

export default AddTask;
