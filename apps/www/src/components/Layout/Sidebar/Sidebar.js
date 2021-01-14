import {
  KeyboardArrowDown,
  Inbox,
  CalendarToday,
  DateRange,
} from "@material-ui/icons";
import { Projects } from "@/components";

const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li>
          <span>
            <Inbox />
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <CalendarToday />
          </span>
          <span>Today</span>
        </li>
        <li>
          <span>
            <DateRange />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <KeyboardArrowDown />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">
        <Projects />
      </ul>
      Add Project Component Here!!
    </div>
  );
};

export default Sidebar;
