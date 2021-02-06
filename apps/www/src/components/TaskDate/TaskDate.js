import moment from "moment";
import { FlightTakeoff, WbSunny, NextWeek } from "@material-ui/icons";
import Icon from "@material-ui/core/Icon";
import { DateTimePicker } from "@material-ui/pickers";

const TaskDate = ({ taskDate, setTaskDate, showTaskDate, setShowTaskDate }) =>
  showTaskDate && (
    <div className="task-date">
      <DateTimePicker
        name="datetime"
        variant="inline"
        format="dd MMM, HH:mm"
        inputVariant="outlined"
        value={taskDate}
        onChange={date => setTaskDate(date)}
      />
    </div>
  );

export default TaskDate;
