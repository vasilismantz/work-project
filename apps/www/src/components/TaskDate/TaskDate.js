import moment from "moment";
import { FlightTakeoff, WbSunny, NextWeek } from "@material-ui/icons";

const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => 
  showTaskDate && (
    <div className="task-date">
      <ul className="task-date__list">
        <li
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment());
          }}
        >
          <span>
            <FlightTakeoff />
          </span>
          <span>Today</span>
        </li>
        <li
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().add(1, "day"));
          }}
        >
          <span>
            <WbSunny />
          </span>
          <span>Tomorrow</span>
        </li>
        <li
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().add(7, "days"));
          }}
        >
          <span>
            <NextWeek />
          </span>
          <span>Next week</span>
        </li>
      </ul>
    </div>
  );


export default TaskDate;
